"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchGallery() {
      if (!supabase) {
        setError("Supabase no está configurado. Revisa apps/admin/.env.local");
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from("gallery_images")
          .select("*")
          .order("sort_order", { ascending: true });

        if (error) {
          console.error(error);
          setError("Error al cargar galería.");
        } else {
          setImages(data || []);
        }
      } catch (err) {
        console.error(err);
        setError("Error inesperado al cargar galería.");
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  if (loading) return <p>Cargando galería...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Galería</h1>
      <Link href="#" style={{ display: "inline-block", marginBottom: "1rem", background: "#0070f3", color: "white", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none" }}>Nueva imagen</Link>
      {images.length === 0 ? (
        <p>No hay imágenes registradas aún.</p>
      ) : (
        <ul>
          {images.map(img => (
            <li key={img.id} style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}>
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}