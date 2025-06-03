"use client";
import {isMobile} from 'react-device-detect';

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  // const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
          console.log("Window width:", window.innerWidth); // Log the current window width

      // setIsMobile(window.innerWidth <= 900);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = isMobile
    ? { display: "flex", flexDirection: "column", gap: "2rem" }
     : { display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "repeat(2, auto)", gap: "4rem" };

  return (
    <div
      style={{
        ...containerStyle,
        padding: "2rem",
        alignItems: "center",
      }}
    >
                  {/* Project Code Simple */}
      <div><div
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
        <a
  href="https://www.codesimpletech.com/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  CodeSimple
</a>
        <div
          style={{
            fontSize: "0.75rem", // Smaller font size for subtext
            fontWeight: 400, // Lighter font weight for subtext
            color: "white", // White color for subtext
            marginTop: "0.5rem", // Add spacing between title and subtext
          }}
        >
          2021-2024
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
As a founding team member from this Berkeley-based startup, I led design and development of the Code Simple site and integrated Stripe to power seamless class payments and tutor payouts      </div></div>
      <div
        style={{
          padding: "10px", // Add padding to create space for the blur effect
          borderRadius: "12px", // Rounded corners
          backdropFilter: "blur(8px)", // Add blur effect
          border: "2px solid white", // Add white border
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "10 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
  href="https://www.codesimpletech.com/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "block", width: "100%", height: "100%" }}
>
  <div
    style={{
      backgroundImage: "url('/codesimple.jpg')", // Add Kiwi image
      backgroundSize: "100% 100%", // Stretch the image to completely fit the box
      backgroundPosition: "center", // Center the image
      borderRadius: "8px", // Inner container rounded corners
      width: "100%", // Fill the available space
      height: "100%", // Fill the available space
    }}
  />
</a>
      </div>
      
      {/* Project Intuit */}
      <div><div
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
        <a
  href="https://www.intuit.com/intuitassist/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  Intuit
</a>
        <div
          style={{
            fontSize: "0.75rem", // Smaller font size for subtext
            fontWeight: 400, // Lighter font weight for subtext
            color: "white", // White color for subtext
            marginTop: "0.5rem", // Add spacing between title and subtext
          }}
        >
          2023-present
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
        I built AI-powered features in QuickBooks using Javascript React, empowering small businesses make AI-powered faster decisions, like predicting cash flow and auto-recommending next steps based on their finances.
      </div></div>
      <div
        style={{
          padding: "10px", // Add padding to create space for the blur effect
          borderRadius: "12px", // Rounded corners
          backdropFilter: "blur(8px)", // Add blur effect
          border: "2px solid white", // Add white border
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "16 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
  href="https://www.intuit.com/intuitassist/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "block", width: "100%", height: "100%" }}
>
  <div
    style={{
      backgroundImage: "url('/intuit.jpg')", // Replace placeholder with actual image
      backgroundSize: "100% 100%", // Stretch the image to completely fit the box
      backgroundPosition: "center", // Center the image
      borderRadius: "8px", // Inner container rounded corners
      width: "100%", // Fill the available space
      height: "100%", // Fill the available space
    }}
  />
</a>
      </div>

      {/* Project Versana */}
      <div><div
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
        <a
  href="https://versana.io/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  Versana
</a>
        <div
          style={{
            fontSize: "0.75rem", // Smaller font size for subtext
            fontWeight: 400, // Lighter font weight for subtext
            color: "white", // White color for subtext
            marginTop: "0.5rem", // Add spacing between title and subtext
          }}
        >
          2023
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
        I worked with an 8-person product team in the early stages of this fintech startup. I coded  backend React logic for banks, allowing them to make faster decisions by surfacing real-time loan and deal insights.
      </div></div>
      <div
        style={{
          padding: "10px", // Add padding to create space for the blur effect
          borderRadius: "12px", // Rounded corners
          backdropFilter: "blur(8px)", // Add blur effect
          border: "2px solid white", // Add white border
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "16 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://versana.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <div
            style={{
              backgroundImage: "url('/versana.jpg')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              borderRadius: "8px",
              width: "100%",
              height: "100%",
            }}
          />
        </a>
      </div>

                              {/* Project GM */}
      <div><div
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
        <a
  href="https://www.gm.com/company/growth-strategy/artificial-intelligence"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  GM Finance
</a>
        <div
          style={{
            fontSize: "0.75rem", // Smaller font size for subtext
            fontWeight: 400, // Lighter font weight for subtext
            color: "white", // White color for subtext
            marginTop: "0.5rem", // Add spacing between title and subtext
          }}
        >
          2020
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
At GM, I built predictive features that used car data to help users make smarter, money-saving decisions from maintenance to habits.      </div></div>
      <div
        style={{
          padding: "10px", // Add padding to create space for the blur effect
          borderRadius: "12px", // Rounded corners
          backdropFilter: "blur(8px)", // Add blur effect
          border: "2px solid white", // Add white border
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "10 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
  href="https://www.gm.com/company/growth-strategy/artificial-intelligence"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "block", width: "100%", height: "100%" }}
>
  <div
    style={{
      backgroundImage: "url('/gm.jpg')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      borderRadius: "8px",
      width: "100%",
      height: "100%",
    }}
  />
</a>
      </div>

      {/* Project Dots */}
      <div><div
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
        <a
  href="https://dots.dev/?gad_source=1&gbraid=0AAAAAogfWRKXyozZNuxF79wawBfIkSIwg&gclid=Cj0KCQjww-HABhCGARIsALLO6Xzym1fXE4vNMUQTXACkDSuU3Qqrko_zpWPzXQJkBgTBMUs4NV0VWmkaAimpEALw_wcB"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  Dots
</a>
        <div
          style={{
            fontSize: "0.75rem", // Smaller font size for subtext
            fontWeight: 400, // Lighter font weight for subtext
            color: "white", // White color for subtext
            marginTop: "0.5rem", // Add spacing between title and subtext
          }}
        >
          2021
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
        I built mobile payout flows and integrated Venmo, Zelle, and PayPal helping freelancers and contractors access funds instantly.
      </div>
    </div>
    <div
      style={{
        padding: "10px", // Add padding to create space for the blur effect
        borderRadius: "12px", // Rounded corners
        backdropFilter: "blur(8px)", // Add blur effect
        border: "2px solid white", // Add white border
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
        width: "90%", // Reduce width of the image box by 10%
        height: "300px", // Set height to better fit the image
        aspectRatio: "16 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
  href="https://dots.dev/?gad_source=1&gbraid=0AAAAAogfWRKXyozZNuxF79wawBfIkSIwg&gclid=Cj0KCQjww-HABhCGARIsALLO6Xzym1fXE4vNMUQTXACkDSuU3Qqrko_zpWPzXQJkBgTBMUs4NV0VWmkaAimpEALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <div
            style={{
              backgroundImage: "url('/dots.jpg')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              borderRadius: "8px",
              width: "100%",
              height: "100%",
            }}
          />
        </a>
      </div>


                  {/* Project Haven */}
      <div><div
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
        <a
  href="https://www.linkedin.com/company/haven-tech-us/posts/?feedView=all"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  Haven Tech
</a>
        <div
          style={{
            fontSize: "0.75rem", // Smaller font size for subtext
            fontWeight: 400, // Lighter font weight for subtext
            color: "white", // White color for subtext
            marginTop: "0.5rem", // Add spacing between title and subtext
          }}
        >
          2022-2023
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
 I brought Figma designs to life at this NYC startup that got acquired by MassMutual Insurance.    </div></div>
      <div
        style={{
          padding: "10px", // Add padding to create space for the blur effect
          borderRadius: "12px", // Rounded corners
          backdropFilter: "blur(8px)", // Add blur effect
          border: "2px solid white", // Add white border
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "10 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
  href="https://www.linkedin.com/company/haven-tech-us/posts/?feedView=all"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "block", width: "100%", height: "100%" }}
>
  <div
    style={{
      backgroundImage: "url('/haven.jpg')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      borderRadius: "8px",
      width: "100%",
      height: "100%",
    }}
  />
</a>
      </div>

      {/* Project Kiwi */}
      <div><div
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
        <a
  href="https://www.tiktok.com/@kiwi___app/video/7119848174780419374"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  Kiwi
</a>
        <div
          style={{
            fontSize: "0.75rem", // Smaller font size for subtext
            fontWeight: 400, // Lighter font weight for subtext
            color: "white", // White color for subtext
            marginTop: "0.5rem", // Add spacing between title and subtext
          }}
        >
          2021
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
  I designed the mobile flow of a Gen Z music-sharing app in React Native, combining messaging, audio, and AI-powered song recommendations.
      </div></div>
      <div
        style={{
          padding: "10px", // Add padding to create space for the blur effect
          borderRadius: "12px", // Rounded corners
          backdropFilter: "blur(8px)", // Add blur effect
          border: "2px solid white", // Add white border
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Add drop shadow
          width: "90%", // Reduce width of the image box by 10%
          height: "300px", // Set height to better fit the image
          aspectRatio: "10 / 9", // Maintain aspect ratio for better fit
          margin: "0 auto", // Center horizontally
          display: "flex", // Ensure inner content is centered
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
  href="https://www.tiktok.com/@kiwi___app/video/7119848174780419374"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "block", width: "100%", height: "100%" }}
>
  <div
    style={{
      backgroundImage: "url('/kiwi.jpg')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      borderRadius: "8px",
      width: "100%",
      height: "100%",
    }}
  />
</a>
      </div>

    </div>
  );
}