'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
          padding: "0 1.5rem",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          position: "relative",
          height: "64px",
          minHeight: "64px"
        }}>
          {/* Desktop: Left home icon and right placeholder */}
          {!isMobile && (
            <>
              <div className="nav-home-link-desktop" style={{ width: "25%", display: "flex", justifyContent: "flex-start", height: "100%", alignItems: "center" }}>
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
            </>
          )}

          {/* Nav bar: always rendered, but home icon only in nav on mobile */}
          <nav
            className={`nav-links nav-links--${isHome ? "3" : "4"}`}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              height: "100%",
              alignItems: "center"
            }}
          >
            {/* Home icon as nav item on mobile only, and only if not on home page */}
            {isMobile && !isHome && (
              <span className="nav-home-link-mobile">
                <Link href="/" style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%"
                }}>
                  🏠
                </Link>
              </span>
            )}
            <Link href="/projects" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center" }}>Projects</Link>
            <Link href="/about" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center" }}>About Me</Link>
            <Link href="/art" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center" }}>Art</Link>
          </nav>

          {/* Desktop: Right placeholder */}
          {!isMobile && <div style={{ width: "25%", height: "100%" }} />}
        </header>

        {children}
      </body>
    </html>
  );
}
