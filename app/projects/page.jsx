export default function ProjectsPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // Two columns
        gridTemplateRows: "repeat(3, auto)", // Three rows
        gap: "4rem", // Add more spacing between items
        padding: "2rem",
        alignItems: "center",
      }}
    >
      {/* Project 1 */}
      <div
        style={{
          background: "rgba(200, 225, 255, 0.55)",
          backdropFilter: "blur(8px)",
          borderRadius: "32px",
          padding: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "0.85rem", // Reduced font size
          color: "#fff", // White text color
          width: "90%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Intuit Quickbooks
      </div>
      <div
        style={{
          backgroundImage: "url('/intuit.jpg')", // Replace placeholder with actual image
          backgroundSize: "100% 100%", // Stretch the image to completely fit the box
          backgroundPosition: "center", // Center the image
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "16 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
        }}
      />

      {/* Project 2 */}
      <div
        style={{
          background: "rgba(200, 225, 255, 0.55)",
          backdropFilter: "blur(8px)",
          borderRadius: "32px",
          padding: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "0.85rem", // Reduced font size
          color: "#fff", // White text color
          width: "90%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Project 2
      </div>
      <div
        style={{
          backgroundImage: "url('/intuit.jpg')", // Replace placeholder with actual image
          backgroundSize: "100% 100%", // Stretch the image to completely fit the box
          backgroundPosition: "center", // Center the image
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "16 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
        }}
      />

      {/* Project 3 */}
      <div
        style={{
          background: "rgba(200, 225, 255, 0.55)",
          backdropFilter: "blur(8px)",
          borderRadius: "32px",
          padding: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "0.85rem", // Reduced font size
          color: "#fff", // White text color
          width: "90%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Project 3
      </div>
      <div
        style={{
          backgroundImage: "url('/intuit.jpg')", // Replace placeholder with actual image
          backgroundSize: "100% 100%", // Stretch the image to completely fit the box
          backgroundPosition: "center", // Center the image
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "16 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
        }}
      />
    </div>
  );
}