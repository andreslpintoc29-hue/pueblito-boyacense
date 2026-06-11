"use client";

import { useState, useEffect } from "react";
import supabase from "@/lib/supabaseClient";

export default function ServicesDemo() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    schedule: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    location_reference: "",
    status: "visible",
    is_featured: false,
  });

  useEffect(() => {
    if (!supabase) return;
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("services").select("*").order("created_at", { ascending: false });
    if (error) setError("Error al cargar servicios");
    else setServices(data);
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(null);
    const slug = formData.name.toLowerCase().trim().replace(/\s+/g, "-");
    const { error } = await supabase.from("services").insert({
      name: formData.name,
      slug,
      description: formData.description,
      schedule: formData.schedule,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      instagram: formData.instagram,
      location_reference: formData.location_reference,
      status: formData.status,
      is_featured: formData.is_featured,
    });
    if (error) setError("Error al guardar el servicio");
    else {
      setSuccess("Servicio creado con éxito");
      setFormData({
        name: "",
        description: "",
        schedule: "",
        phone: "",
        whatsapp: "",
        instagram: "",
        location_reference: "",
        status: "visible",
        is_featured: false,
      });
      setFormVisible(false);
      fetchServices();
    }
    setSaving(false);
  };

  return (
    <div style={{ backgroundColor: "#F7F1E5", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
        <h1 style={{ color: "#2B2118", fontSize: "2rem", marginBottom: "0.5rem" }}>Servicios</h1>
        <p style={{ color: "#2B2118", marginBottom: "1.5rem" }}>Administra restaurantes, hospedajes, cafeterías, artesanías, spa, capilla y otros servicios turísticos.</p>

        <button onClick={() => setFormVisible(!formVisible)} style={{ backgroundColor: "#1B5E20", color: "#fff", padding: "0.75rem 1.25rem", borderRadius: "6px", border: "none", cursor: "pointer", marginBottom: "1rem" }}>
          {formVisible ? "Cancelar" : "Nuevo servicio"}
        </button>

        {formVisible && (
          <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: "grid", gap: "1rem" }}>
            <input required name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
            <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange}></textarea>
            <input name="schedule" placeholder="Horario" value={formData.schedule} onChange={handleChange} />
            <input name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
            <input name="whatsapp" placeholder="WhatsApp" value={formData.whatsapp} onChange={handleChange} />
            <input name="instagram" placeholder="Instagram" value={formData.instagram} onChange={handleChange} />
            <input name="location_reference" placeholder="Referencia de ubicación" value={formData.location_reference} onChange={handleChange} />
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="visible">Visible</option>
              <option value="draft">Borrador</option>
            </select>
            <label>
              <input type="checkbox" name="is_featured" checked={formData.is_featured} onChange={handleChange} />
              Destacado
            </label>
            <button type="submit" disabled={saving} style={{ backgroundColor: "#1B5E20", color: "#fff", padding: "0.75rem", borderRadius: "6px", border: "none", cursor: "pointer" }}>Guardar</button>
            {saving && <p>Guardando...</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        )}

        {loading ? (
          <p>Cargando servicios...</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
            {services.map((srv) => (
              <div key={srv.id} style={{ backgroundColor: "#fff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <h3 style={{ color: "#2B2118" }}>{srv.name}</h3>
                <p>{srv.description}</p>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <span style={{ backgroundColor: srv.status === "visible" ? "#C8E6C9" : "#FFE0B2", padding: "0.25rem 0.5rem", borderRadius: "4px" }}>{srv.status}</span>
                  <span style={{ backgroundColor: srv.is_featured ? "#A64B2A" : "#E0E0E0", color: srv.is_featured ? "#fff" : "#000", padding: "0.25rem 0.5rem", borderRadius: "4px" }}>{srv.is_featured ? "Destacado" : "Normal"}</span>
                </div>
                {srv.schedule && <p><strong>Horario:</strong> {srv.schedule}</p>}
                {srv.whatsapp && <p><strong>WhatsApp:</strong> {srv.whatsapp}</p>}
                {srv.instagram && <p><strong>Instagram:</strong> {srv.instagram}</p>}
                {srv.location_reference && <p><strong>Ubicación:</strong> {srv.location_reference}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}