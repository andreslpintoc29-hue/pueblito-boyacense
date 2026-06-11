-- Datos de demostración para Pueblito Boyacense
-- Categorías de servicios turísticos
INSERT INTO service_categories (id, name, description) VALUES
  (1, 'Gastronomía', 'Restaurantes y comida típica boyacense'),
  (2, 'Artesanías', 'Tiendas de recuerdos y productos locales'),
  (3, 'Alojamiento', 'Hospedajes y hoteles en Pueblito Boyacense'),
  (4, 'Entretenimiento', 'Actividades recreativas y culturales');

-- Servicios de ejemplo
INSERT INTO services (id, category_id, name, description, price) VALUES
  (1, 1, 'Restaurante La Candelaria', 'Comida típica boyacense con platos tradicionales', 25000),
  (2, 1, 'Café Boyacá Dulce', 'Variedad de postres y café artesanal', 10000),
  (3, 2, 'Tienda Artesanal Tunja', 'Venta de ruanas, mochilas y recuerdos', 15000),
  (4, 3, 'Hotel Villa Colonial', 'Habitaciones cómodas con vista panorámica', 120000),
  (5, 4, 'Música en Vivo', 'Presentaciones de música andina en la plaza principal', 0);

-- Eventos turísticos
INSERT INTO events (id, title, description, event_date, location) VALUES
  (1, 'Festival del Sol y la Luna', 'Celebración cultural con música y gastronomía', '2026-12-15', 'Plaza Central'),
  (2, 'Feria Artesanal de Navidad', 'Exposición y venta de artesanías locales', '2026-12-20', 'Zona Comercial'),
  (3, 'Concierto Andino', 'Presentación de grupos de música folclórica', '2026-12-30', 'Teatro Municipal');