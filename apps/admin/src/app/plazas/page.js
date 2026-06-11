"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function PlazasPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [plazas, setPlazas] = useState([]);

  useEffect(() => {
    async function fetchPlazas() {
      if (!supabase) {
        setError("Supabase no está configurado. Revisa apps/admin/.env.local");
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from("plazas")
          .select("*")
          .order("sort_order", { ascending: true });

        if (error) {
          console.error(error);
          setError("Error al cargar plazoletas.");
        } else {
          setPlazas(data || []);
        }
      } catch (err) {
        console.error(err);
        setError("Error inesperado al cargar plazoletas.");
      } finally {
        setLoading(false);
      }
    }
    fetchPlazas();
  }, []);

  if (loading) return <p>Cargando plazoletas...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Plazoletas</h1>
      <Link href="#" style={{ display: "inline-block", marginBottom: "1rem", background: "#0070f3", color: "white", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none" }}>Nueva plazoleta</Link>
      {plazas.length === 0 ? (
        <p>No hay plazoletas registradas aún.</p>
      ) : (
        <ul>
          {plazas.map(plaza => (
            <li key={plaza.id} style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}>
              <h3>{plaza.name}</h3>
              <p>{plaza.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}