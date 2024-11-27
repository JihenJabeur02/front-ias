// Homepage2.js
import React from "react";
import logo from "./logo.png";

const Homepage2 = () => {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
    },
    container: {
      textAlign: "center",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#fff",
      borderBottom: "1px solid #ddd",
    },
    logo: {
      width: "100px",
    },
    navbar: {
      display: "flex",
    },
    navLink: {
      margin: "0 15px",
      textDecoration: "none",
      color: "black",
      fontWeight: "bold",
    },
    activeLink: {
      color: "green",
    },
    profile: {
      display: "flex",
    },
    icon: {
      margin: "0 5px",
      fontSize: "20px",
    },
    mainContent: {
      margin: "20px",
    },
    icons: {
      display: "flex",
      justifyContent: "center",
    },
    circleContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      maxWidth: "600px",
      margin: "10px auto",
    },
    circle: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      backgroundColor: "#ddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "55px",
      fontSize: "14px",
      fontWeight: "bold",
    },
    footer: {
      backgroundColor: "#e8f5e9",
      padding: "10px 0",
    },
    contactButton: {
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
    },
    contactButtonHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={logo} style={styles.logo} alt="Logo" />
        <nav style={styles.navbar}>
          <a href="#" style={{ ...styles.navLink, ...styles.activeLink }}>
            HOME
          </a>
          <a href="#" style={styles.navLink}>About Us</a>
          <a href="#" style={styles.navLink}>Subscribe</a>
        </nav>
        <div style={styles.profile}>
          <a href="#" style={styles.icon}>🔔</a>
          <a href="#" style={styles.icon}>👤</a>
          <a href="#" style={styles.icon}>❓</a>
        </div>
      </header>
      <main style={styles.mainContent}>
        <div style={styles.icons}>
          <a href="#" style={styles.icon}>🔔</a>
          <a href="#" style={styles.icon}>📋</a>
          <a href="#" style={styles.icon}>🚨</a>
        </div>
        <div style={styles.circleContainer}>
          <button style={styles.circle}
          onClick={()=>window.location='http://localhost:3000/industries'}
          >Industries</button>
          <button style={styles.circle}
          
          onClick={()=>window.location='http://localhost:3000/request'}
          >Request</button>
          <button style={styles.circle}
          
          onClick={()=>window.location='http://localhost:3000/cart'}
          >Cart</button>
          <button style={styles.circle}>Energy Transaction</button>
        </div>
      </main>
      <footer style={styles.footer}>
        <button style={styles.contactButton}>Contact Us</button>
      </footer>
    </div>
  );
};

export default Homepage2;
