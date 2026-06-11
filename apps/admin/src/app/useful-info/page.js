"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UsefulInfoPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ infos: [], faqs: [] });

  useEffect(() => {
    async function fetchUsefulInfo() {
      if (!supabase) {
        setError("Supabase no está configurado. Revisa apps/admin/.env.local");
        setLoading(false);
        return;
      }

      try {
        const { data: infos } = await supabase.from("useful_info").select("*").order("sort_order", { ascending: true });
        const { data: faqs } = await supabase.from("faqs").select("*").order("sort_order", { ascending: true });

        setData({ infos: infos || [], faqs: faqs || [] });
      } catch (err) {
        console.error(err);
        setError("Error al cargar información útil.");
      } finally {
        setLoading(false);
      }
    }
    fetchUsefulInfo();
  }, []);

  if (loading) return <p>Cargando información...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Información Útil</h1>
      <h2>Información</h2>
      {data.infos.length === 0 ? <p>No hay información registrada aún.</p> : (
        <ul>
          {data.infos.map(info => (
            <li key={info.id}>{info.title} - {info.content}</li>
          ))}
        </ul>
      )}
      <h2>FAQs</h2>
      {data.faqs.length === 0 ? <p>No hay FAQs registradas aún.</p> : (
        <ul>
          {data.faqs.map(faq => (
            <li key={faq.id}><strong>{faq.question}</strong>: {faq.answer}</li>
          ))}
        </ul>
      )}
    </div>
  );
}