import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.png"; // Adjust the path to your logo file
import savedImage from "./ias.jpg"; // Add the path to your saved image
import Header from "./Header";

function App() {
  const [zonesCount, setZonesCount] = useState(0);
  const [indusCount, setIndusCount] = useState(0);
  const [subscribersCount, setSubscribersCount] = useState(0);

  const statsRef = useRef(null);

  const animateCount = (target, setter) => {
    let current = 0;
    const increment = target / 100;
    const animate = () => {
      if (current < target) {
        current += increment;
        setter(Math.floor(current));
        requestAnimationFrame(animate);
      } else {
        setter(target);
      }
    };
    animate();
  };

  const handleScroll = () => {
    if (statsRef.current) {
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        animateCount(14, setZonesCount);
        animateCount(157, setIndusCount);
        animateCount(483, setSubscribersCount);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <style>
        {`
          @keyframes moveLeft {
            0% {
              left: 100%;  /* Start from the right (off-screen) */
            }
            100% {
              left: -100%; /* Move to the left off-screen */
            }
          }
        `}
      </style>

      {/* Navbar */}
      <Header/>

      {/* Main Section */}
      <main style={{ margin: 0, padding: 0 }}>
        {/* Full-Width Image Section with Quote */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "90vh",
            overflow: "hidden",
          }}
        >
          <img
            src={savedImage}
            alt="Future Tunisia Vision"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%", // Start from the right (off-screen)
              transform: "translateY(-50%)", // Center vertically
              textAlign: "center",
              animation: "moveLeft 10s linear infinite", // Apply animation
            }}
          >
            <p
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: "#000000",
                backgroundColor: "transparent",
                padding: "20px 40px",
                borderRadius: "8px",
                margin: 0,
                display: "inline-block",
                whiteSpace: "nowrap", // Prevent text from wrapping
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
            >
              Building smarter industries for a sustainable tomorrow
            </p>
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section style={{ textAlign: "center", marginTop: "20px" }} ref={statsRef}>
        <h3>Statistics:</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            margin: "10px 0",
          }}
        >
          {/* Zones Count */}
          <div style={statBoxStyle}>
            <div>Number of Industrial Zones:</div>
            <div style={statNumberStyle}>{zonesCount}</div>
          </div>

          {/* Industries Count */}
          <div style={statBoxStyle}>
            <div>Number of Industries:</div>
            <div style={statNumberStyle}>{indusCount}</div>
          </div>

          {/* Subscribers Count */}
          <div style={statBoxStyle}>
            <div>Subscribers:</div>
            <div style={statNumberStyle}>{subscribersCount}</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer style={{ marginTop: "15px" }}>
        <button
          style={{
            padding: "15px 0",
            fontSize: "16px",
            backgroundColor: "#008241",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100%", // Full width button
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </button>
      </footer>
    </div>
  );
}

// Navigation Item Styling
const navItemStyle = (color = "black") => ({
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "bold",
  color: color,
});

// Statistics Box Styling
const statBoxStyle = {
  padding: "20px",
  borderRadius: "8px",
  fontWeight: "bold",
  width: "120px",
  textAlign: "center",
  backgroundColor: "transparent", // Removed grey background
};

// Number Style for Statistics
const statNumberStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "10px",
};

export default App;