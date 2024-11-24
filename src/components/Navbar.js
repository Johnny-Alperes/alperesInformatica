import React, { useState } from "react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Alperes Informática</div>
      <div style={styles.menu}>
        <button
          style={{
            ...styles.loginButton,
            backgroundColor: isHovered ? "#008000" : "#0056A6", // Verde ou Azul
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00274D", // Azul escuro
    padding: "10px 20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease", // Animação suave
  },
};

export default Navbar;
