export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nusaiba | Portfolio </title>
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
          justifyContent: "center",
          padding: "1rem 2rem",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
        }}>
          <nav style={{
            display: "flex",
            gap: "7rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#fff"
          }}>
            <span style={{ cursor: "pointer" }}>Projects</span>
            <span style={{ cursor: "pointer" }}>About Me</span>
            <span style={{ cursor: "pointer" }}>Art</span>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
