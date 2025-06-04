export default function Home() {
  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      flexDirection: "column"
    }}>
      {/* Background animation layer */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(270deg, #88c9e8, #ff80b5, #9089fc, #88c9e8)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 30s ease-in-out infinite",
        zIndex: -1,
        filter: "blur(100px)",
        opacity: 0.6,
      }} />

      {/* Animated rectangle for main content */}
      <div className="test-animated-rect" style={{
        width: "min(420px, 33vw)", // responsive width: 1/3 of page width on desktop
        maxWidth: "90%", // ensure it doesn't exceed 90% of viewport width
        height: "auto", // allow height to adjust automatically
        padding: "1.5rem",
        borderRadius: "32px",
        marginBottom: "2.5rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto", // center horizontally
        marginRight: "auto" // center horizontally
      }}>
        <h1 style={{
          fontSize: "1.7rem", // bigger text
          fontWeight: 600,     // bolder
          margin: 0,
          color: "#222",
          textAlign: "center",
          lineHeight: 1.08,
          letterSpacing: "-0.5px",
          width: "100%", // make text fill the rectangle
          wordBreak: "break-word"
        }}>
          Hey I'm Nusaiba
        </h1>
      </div>
      <p style={{
        fontSize: ".8rem",
        color: "#fff",
        textAlign: "center",
        marginTop: "-1.2rem",
        marginBottom: 0
      }}>
        Designer in New York City merging tech, taste, and everything inbetween. ✨
      </p>
    </div>
  );
}