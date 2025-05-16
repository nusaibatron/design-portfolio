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
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1.5rem", // Remove vertical padding
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  position: "relative",
  height: "64px", // Fixed height for navbar
  minHeight: "64px"
}}>
  {/* Left: Home icon */}
  <div style={{ width: "25%", display: "flex", justifyContent: "flex-start", height: "100%", alignItems: "center" }}>
    {!isHome && (
      <Link href="/" style={{
        color: "#fff",
        fontSize: "1.5rem",
        textDecoration: "none",
        height: "100%",
        display: "flex",
        alignItems: "center"
      }}>
        🏠
      </Link>
    )}
  </div>

  {/* Center: Nav */}
  <nav style={{
    width: "33.33%", // Middle 1/3 of the page
    display: "flex",
    justifyContent: "space-between", // Evenly distribute links
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
    height: "100%",
    alignItems: "center"
  }}>
    <Link href="/projects" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center" }}>Projects</Link>
    <Link href="/about" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center" }}>About Me</Link>
    <Link href="/art" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center" }}>Art</Link>
  </nav>

  {/* Right: placeholder to balance layout */}
  <div style={{ width: "25%", height: "100%" }} />
</header>


        {children}
      </body>
    </html>
  );
}
