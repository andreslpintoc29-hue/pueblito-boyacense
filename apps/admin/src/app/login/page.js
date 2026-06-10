"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
    router.push("/dashboard");
  }

  return (
    <main className="page">
      <section className="card">
        <span className="eyebrow">Pueblito Boyacense</span>
        <h1>Panel Interno</h1>
        <h2>Iniciar sesión</h2>

        {success ? (
          <p style={{ color: "#1B5E20", fontWeight: 600 }}>
            Acceso concedido. Próximo paso: dashboard privado.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textAlign: "left",
              marginTop: "20px",
            }}
          >
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontWeight: 600 }}>Correo electrónico</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                style={{
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #d8cdb8",
                  fontSize: "1rem",
                }}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontWeight: 600 }}>Contraseña</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                style={{
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #d8cdb8",
                  fontSize: "1rem",
                }}
              />
            </label>

            {error ? (
              <p style={{ color: "#A64B2A", fontWeight: 600, margin: 0 }}>
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: loading ? "#7a8a7a" : "#1B5E20",
                color: "#ffffff",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Ingresando..." : "Iniciar sesión"}
            </button>
          </form>
        )}

        <p className="note">Este panel no está destinado al cliente final.</p>
      </section>
    </main>
  );
}
