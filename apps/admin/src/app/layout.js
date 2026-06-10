import "./globals.css";

export const metadata = {
  title: "Panel Interno — Pueblito Boyacense",
  description: "Panel privado del proveedor para administrar contenidos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
