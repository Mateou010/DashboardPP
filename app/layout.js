import "./globals.css";

export const metadata = {
  title: "Dashboard | Reforma Electoral Integral",
  description:
    "Dashboard institucional del proyecto de Reforma Electoral Integral (INLEG-2026-40722643-APN-PTE)."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
