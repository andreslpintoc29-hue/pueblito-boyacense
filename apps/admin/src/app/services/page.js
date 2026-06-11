"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function ServicesPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      if (!supabase) {
        setError("Supabase no está configurado. Revisa apps/admin/.env.local");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("services")
          .select("*")
          .order("sort_order", { ascending: true });

        if (error) {
          console.error(error);
          setError("Error al cargar servicios.");
        } else {
          setServices(data || []);
        }
      } catch (err) {
        console.error(err);
        setError("Error inesperado al cargar servicios.");
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Servicios</h1>
      <Link href="#" style={{ display: "inline-block", marginBottom: "1rem", background: "#0070f3", color: "white", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none" }}>
        Nuevo servicio
      </Link>
      {services.length === 0 ? (
        <p>No hay servicios registrados aún.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id} style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Estado: {service.status}</p>
              <p>Destacado: {service.is_featured ? "Sí" : "No"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}