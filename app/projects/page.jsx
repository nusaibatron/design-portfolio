"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = isMobile
    ? { display: "flex", flexDirection: "column", gap: "2rem" }
    : { display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "repeat(3, auto)", gap: "4rem" };

  return (
    <div
      style={{
        ...containerStyle,
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
          color: "#515151",
          width: "50%", // Reduce width by 10%
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
                    color: "#515151",

          width: "50%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Versana Finance Status
      </div>
      <div
        style={{
          backgroundImage: "url('/versana.jpg')", // Replace placeholder with actual image
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
          color: "#515151",
          width: "50%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Dots
      </div>
      <div
        style={{
          backgroundImage: "url('/dots.jpg')", // Replace video with image
          backgroundSize: "100% 100%", // Stretch the image to completely fit the box
          backgroundPosition: "center", // Center the image
          borderRadius: "15px",
          boxShadow: "1 8px 40px rgba(0,0,0,0.08)", // Add drop shadow
          border: "2px solid rgba(200, 225, 255, 0.55)", // Add border to match Versana
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "16 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
        }}
      />

      {/* Project 4 */}
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
          color: "#515151",
          width: "50%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Kiwi
      </div>
      <div
        style={{
          backgroundImage: "url('/kiwi.jpg')", // Add Kiwi image
          backgroundSize: "100% 100%", // Stretch the image to completely fit the box
          backgroundPosition: "center", // Center the image
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "10 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
        }}
      />
    </div>
  );
}