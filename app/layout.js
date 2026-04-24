import "./globals.css";

export const metadata = {
  title: "Dashboard | Reforma Electoral Integral",
  description:
    "Dashboard institucional del proyecto de Reforma Electoral Integral (INLEG-2026-40722643-APN-PTE).",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
