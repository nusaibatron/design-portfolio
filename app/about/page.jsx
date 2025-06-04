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

  // Updated layout to display 3 columns horizontally
  const containerStyle = isMobile
    ? { display: "flex", flexDirection: "column", gap: "5rem", width: "100%" }
    : { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" };

  return (
    <div
      style={{
        ...containerStyle,
        padding: "2rem",
        alignItems: "center",
      }}
    >
      {/* About Me */}
            {/* column 3 */}

      <div
        style={{
          padding: "10px",
          borderRadius: "12px",
          backdropFilter: "blur(8px)",
          border: "2px solid white",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          width: isMobile ? "80%" : "300px",
          height: isMobile ? "auto" : "57%",
          aspectRatio: "9 / 16",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/nusaibaheadshot.jpg')", // Replace placeholder with actual image
            backgroundSize: "100% 100%", // Stretch the image to completely fit the box
            backgroundPosition: "center", // Center the image
            borderRadius: "8px", // Inner container rounded corners
            width: "100%", // Fill the available space
            height: "100%", // Fill the available space
          }}
        />
      </div>
                  {/* column 2 */}

      <div style={{ width: isMobile ? "100%" : "auto" }}>
        <div
          style={{
            background: "rgba(200, 225, 255, 0.55)",
            backdropFilter: "blur(8px)",
            borderRadius: "32px",
            padding: "1.5rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            textAlign: "center",
            fontWeight: 800,
            fontSize: "0.85rem",
            color: "#515151",
            width: isMobile ? "100%" : "50%",
            margin: "0 auto",
          }}
        >
          Nusaiba Rahman
              <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
            color: "white",
            marginTop: "0.5rem",
          }}
        >
          Berkeley 2020, Data Science - Business Analytics
        </div>
        </div>

        <div
          style={{
            padding: "1.5rem",
            textAlign: "left",
            fontWeight: 300,
            fontSize: "0.85rem",
            color: "white",
            width: isMobile ? "100%" : "80%",
            margin: "0 auto",
          }}
        >
I thrive at the intersection of tech and branding, and I love working with small teams and freelance clients. I’m drawn to projects that blend thoughtful design with smart systems — and nothing beats the satisfaction of creating real impact. Want to collaborate? 
<a href="mailto:nusaiba@berkeley.edu" style={{ textDecoration: 'none', color: 'inherit',           fontWeight: 600,
 }}>Let’s chat! ➡️  Mail ✉️   </a>
<a href="https://www.linkedin.com/in/nusaiba-rahman/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600}}> LinkedIn 🌐 </a>      

</div>
</div>
                        
                        {/* column 1 */}

      <div style={{ width: isMobile ? "100%" : "auto" }}>
        <div
          style={{
            background: "rgba(200, 225, 255, 0.55)",
            backdropFilter: "blur(8px)",
            borderRadius: "32px",
            padding: "1.5rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            textAlign: "center",
            fontWeight: 800,
            fontSize: "0.85rem",
            color: "#515151",
            width: isMobile ? "100%" : "50%",
            margin: "0 auto",
          }}
        >
          My Tool Belt
                      <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
            color: "white",
            marginTop: "0.5rem",
          }}
        >
          Always open to learning more.
        </div>
        </div>
        <div
          style={{
            padding: "1.5rem",
            textAlign: "left",
            fontWeight: 300,
            fontSize: "0.85rem",
            color: "white",
            width: isMobile ? "100%" : "80%",
            margin: "0 auto",
          }}
        >
        Javascript (React) ★ Bubble ★ Bolt ★ Figma ★ Framer ★ Stripe ★ Jupyter (Python, AI libraries) ★ SQL ★ Adobe Creative (InDesign, Illustrator, Photoshop) ★
        </div>
      </div>
    </div>
  );
}