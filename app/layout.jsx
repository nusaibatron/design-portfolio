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
<header
  style={{
    backgroundColor: "#0a1a30",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    flexWrap: "wrap",
  }}
>
  <a
    href="/"
    style={{
      fontSize: "1.5rem",
      color: "white",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }}
  >
    <span role="img" aria-label="home" style={{ fontSize: "1.2rem" }}>
      🏠
    </span>
    <span className="hide-on-mobile">Home</span>
  </a>

  <nav
    style={{
      display: "flex",
      justifyContent: "center",
      flex: 1,
      gap: "3rem",
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "#fff",
    }}
  >
    <a href="/projects" style={{ color: "inherit", textDecoration: "none" }}>
      Projects
    </a>
    <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>
      About Me
    </a>
    <a href="/art" style={{ color: "inherit", textDecoration: "none" }}>
      Art
    </a>
  </nav>
</header>

        {children}
      </body>
    </html>
  );
}
