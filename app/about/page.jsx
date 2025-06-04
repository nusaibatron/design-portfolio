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
    ? { display: "flex", flexDirection: "column", gap: "5rem" } // Maintain vertical layout for mobile screens
    : { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }; // Updated to 3 columns for non-mobile screens

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
          padding: "10px", // Add padding to create space for the blur effect
          borderRadius: "12px", // Rounded corners
          backdropFilter: "blur(8px)", // Add blur effect
          border: "2px solid white", // Add white border
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
          width: "300px", // Swapped width and height
          height: "57%", // Reduced height by an additional 7%
          aspectRatio: "9 / 16", // Adjusted aspect ratio for vertical orientation
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
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

      <div><div
        style={{
          background: "rgba(200, 225, 255, 0.55)",
          backdropFilter: "blur(8px)",
          borderRadius: "32px",
          padding: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "0.85rem", // Reduced font size
          color: "#515151",
          width: "50%", // Reduce width by 10%
          height: "50px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Nusaiba Rahman
              <div
        style={{
          fontSize: "0.75rem", // Smaller font size for subtext
          fontWeight: 400, // Lighter font weight for subtext
          color: "white", // White color for subtext
          marginTop: "0.5rem", // Add spacing between title and subtext
                    bottomMargin: "1rem", // Add bottom margin for spacing

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
          fontSize: "0.85rem", // Reduced font size
          color: "white",
          width: "80%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
I thrive at the intersection of tech and branding, and I love working with small teams and freelance clients. I’m drawn to projects that blend thoughtful design with smart systems — and nothing beats the satisfaction of creating real impact. Want to collaborate? 
<a href="mailto:nusaiba@berkeley.edu" style={{ textDecoration: 'none', color: 'inherit',           fontWeight: 600,
 }}>Let’s chat! ➡️  Mail ✉️   </a>
<a href="https://www.linkedin.com/in/nusaiba-rahman/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600}}> LinkedIn 🌐 </a>      

</div></div>
                        
                        {/* column 1 */}

      <div><div
        style={{
          background: "rgba(200, 225, 255, 0.55)",
          backdropFilter: "blur(8px)",
          borderRadius: "32px",
          padding: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "0.85rem", // Reduced font size
          color: "#515151",
          width: "50%", // Reduce width by 10%
          height: "50px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        My Tool Belt
                      <div
        style={{
          fontSize: "0.75rem", // Smaller font size for subtext
          fontWeight: 400, // Lighter font weight for subtext
          color: "white", // White color for subtext
          marginTop: "0.5rem", // Add spacing between title and subtext
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
          fontSize: "0.85rem", // Reduced font size
          color: "white",
          width: "80%", // Reduce width by 10%
          height: "30px", // Reduced height to one-third of original
          margin: "0 auto", // Center horizontally
        }}
      >
        Javascript (React) ★ Bubble ★ Bolt ★ Figma ★ Framer ★ Stripe ★ Jupyter (Python, AI libraries) ★ SQL ★ Adobe Creative (InDesign, Illustrator, Photoshop) ★
      </div></div>
    </div>
  );
}