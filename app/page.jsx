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
    }}>
      {/* Background animation layer */}
<div style={{
    position: "fixed",         // <-- use fixed instead of absolute
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",           // <-- full viewport height
    background: "linear-gradient(270deg, #88c9e8, #ff80b5, #9089fc, #88c9e8)",
    backgroundSize: "400% 400%",
    animation: "gradientShift 8s ease-in-out infinite",
    zIndex: -1,                // <-- stays behind everything
    filter: "blur(100px)",
    opacity: 0.6,
}} />

      {/* Foreground content */}
      <div style={{
        position: "relative",
        textAlign: "center",
        zIndex: 1,
        maxWidth: "700px"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          marginBottom: "1rem",
        }}>
          Hey I'm Nusaiba
        </h1>
        <p style={{
          fontSize: "1.25rem",
          color: "#111",
        }}>
          This is where i'll keep my stuff to show you ✨
        </p>
      </div>
    </div>
  );
}
