'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <head>
        <title>Nusaiba | Portfolio</title>
  <link rel="icon" href="/nusaiba.png" type="image/png" />
      </head>
      <body style={{
        margin: 0,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        backgroundColor: "#f9f9fb",
        color: "#0f0f0f",
      }}>
        <header style={{
          backgroundColor: "#0a1a30",
          display: "flex",
          alignItems: "center",
          padding: "1rem 2rem",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          position: "relative"
        }}>
          {/* Home icon on non-home pages */}
          {!isHome && (
            <Link href="/" style={{
              position: "absolute",
              left: "2rem",
              color: "#fff",
              fontSize: "1.5rem",
              textDecoration: "none"
            }}>
              🏠
            </Link>
          )}

          {/* Centered nav */}
          <nav style={{
            margin: "0 auto",
            display: "flex",
            gap: "5rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#fff",
            textAlign: "center"
          }}>
            <Link href="/projects" style={{ textDecoration: "none", color: "white" }}>Projects</Link>
            <Link href="/about" style={{ textDecoration: "none", color: "white" }}>About Me</Link>
            <Link href="/art" style={{ textDecoration: "none", color: "white" }}>Art</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
