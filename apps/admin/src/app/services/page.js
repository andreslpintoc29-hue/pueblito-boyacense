'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

function generateSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export default function ServicesPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [saving, setSaving] = useState(false)
  const [services, setServices] = useState([])
  const [showForm, setShowForm] = useState(false)

  const [form, setForm] = useState({
    name: '',
    description: '',
    status: 'visible',
    is_featured: false,
  })

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    if (!supabase) {
      setError('Supabase no está configurado. Revisa apps/admin/.env.local')
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error) {
      setError(error.message)
    } else {
      setServices(data || [])
    }

    setLoading(false)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!supabase) {
      setError('Supabase no está configurado. Revisa apps/admin/.env.local')
      return
    }

    setSaving(true)
    setError(null)
    setSuccess(null)

    const slug = generateSlug(form.name)

    const { error } = await supabase.from('services').insert([
      {
        name: form.name,
        slug,
        description: form.description,
        status: form.status,
        is_featured: form.is_featured,
      },
    ])

    if (error) {
      setError(error.message)
    } else {
      setSuccess('Servicio creado correctamente')
      setForm({ name: '', description: '', status: 'visible', is_featured: false })
      setShowForm(false)
      fetchServices()
    }

    setSaving(false)
  }

  if (!supabase) {
    return (
      <div style={{ padding: 20 }}>
        Supabase no está configurado. Revisa apps/admin/.env.local
      </div>
    )
  }

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ marginBottom: 20 }}>Servicios</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: '#2e7d32',
            color: '#fff',
            padding: '10px 16px',
            border: 'none',
            borderRadius: 6,
            marginBottom: 20,
            cursor: 'pointer',
          }}
        >
          {showForm ? 'Cancelar' : 'Nuevo servicio'}
        </button>

        {showForm && (
          <div style={{ background: '#fff', padding: 20, borderRadius: 8, marginBottom: 20 }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 12 }}>
                <input
                  name="name"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: 10 }}
                />
              </div>

              <div style={{ marginBottom: 12 }}>
                <textarea
                  name="description"
                  placeholder="Descripción"
                  value={form.description}
                  onChange={handleChange}
                  style={{ width: '100%', padding: 10 }}
                />
              </div>

              <div style={{ marginBottom: 12 }}>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  style={{ width: '100%', padding: 10 }}
                >
                  <option value="visible">Visible</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label>
                  <input
                    type="checkbox"
                    name="is_featured"
                    checked={form.is_featured}
                    onChange={handleChange}
                  />{' '}
                  Destacado
                </label>
              </div>

              <button
                type="submit"
                disabled={saving}
                style={{
                  background: '#c85a2e',
                  color: '#fff',
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
              >
                {saving ? 'Guardando...' : 'Crear servicio'}
              </button>
            </form>
          </div>
        )}

        <div style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
          {loading && <p>Cargando...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          {!loading && services.length === 0 && (
            <p>No hay servicios registrados aún.</p>
          )}

          {services.map((service) => (
            <div
              key={service.id}
              style={{
                borderBottom: '1px solid #eee',
                padding: '10px 0',
              }}
            >
              <strong>{service.name}</strong>
              <p style={{ margin: '4px 0' }}>{service.description}</p>
              <small>
                Estado: {service.status} | {service.is_featured ? 'Destacado' : 'Normal'}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
