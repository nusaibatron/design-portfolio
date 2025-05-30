'use client'

import './globals.css';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobileStatus = window.innerWidth <= 750;
      console.log("isMobile:", window.innerWidth); // Log the mobile status
      setIsMobile(mobileStatus);
    };
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
        background: "linear-gradient(270deg, #88c9e8, #ff80b5, #9089fc, #88c9e8)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 30s ease-in-out infinite",
        color: "#0f0f0f",
        minHeight: "100vh",
        boxSizing: "border-box",
        overflowX: "hidden",
        overflowY: "auto" // Allow scrolling if needed, but no forced height
      }}>
        <header style={{
          backgroundColor: "#0a1a30",
          backgroundImage: "none", // Explicitly remove any background image/gradient
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1.5rem",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          position: "relative",
          height: "64px",
          minHeight: "64px",
          zIndex: 10 // Ensure nav stays above background
        }}>
          {/* Desktop: Left home icon and right placeholder */}
          {!isMobile && (
            <>
              <div className="nav-home-link-desktop" style={{ width: "25%", display: "flex", justifyContent: "flex-start", height: "100%", alignItems: "center" }}>
                {!isHome && (
                  <Link href="/" style={{
                    color: "#fff",
                    fontSize: "1.1rem",
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
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              height: "100%",
              alignItems: "center",
              margin: "0 auto", // Center the middle 1/3 horizontally
              position: "relative", // Allow precise centering
              top: "50%", // Vertically center
              transform: "translateY(-50%)" // Adjust for exact vertical alignment
            }}
          >
            {/* Home icon as nav item on mobile only, and only if not on home page */}
            {isMobile && (
              <span className="nav-home-link-mobile">
                <Link href="/" style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto", // Adjust width for better visibility
                  padding: "0.5rem" // Add padding for better touch area
                }}>
                  🏠
                </Link>
              </span>
            )}
            <Link href="/projects" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center", fontSize: ".75rem", padding: "0.5rem 1rem" }}>  Projects  </Link>
            <Link href="/art" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center", fontSize: ".75rem", padding: "0.5rem 1rem" }}>  Art  </Link>
                        <Link href="/about" style={{ textDecoration: "none", color: "white", height: "100%", display: "flex", alignItems: "center", fontSize: ".75rem", padding: "0.5rem 1rem" }}>  About  </Link>

          </nav>

          {/* Desktop: Right placeholder */}
          {!isMobile && <div style={{ width: "25%", height: "100%" }} />}
        </header>
        <main style={{
          minHeight: "calc(100vh - 64px)", // Ensure main content fills the viewport below the navbar
          width: "100%"
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}
