import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredCategories, setIsHoveredCategories] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Estado para abrir/fechar menu de categorias
  const navigate = useNavigate();

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo} onClick={() => navigate("/")} role="button">
        Alperes Informática
      </div>
      <div style={styles.menu}>
        {/* Home Button */}
        <button
          style={{
            ...styles.navButton,
            backgroundColor: isHoveredHome ? "#008000" : "#0056A6",
          }}
          onMouseEnter={() => setIsHoveredHome(true)}
          onMouseLeave={() => setIsHoveredHome(false)}
          onClick={() => navigate("/")}
        >
          Home
        </button>

        {/* Categorias Dropdown */}
        <div style={styles.dropdown}>
          <button
            style={{
              ...styles.navButton,
              backgroundColor: isHoveredCategories ? "#008000" : "#0056A6",
            }}
            onMouseEnter={() => setIsHoveredCategories(true)}
            onMouseLeave={() => setIsHoveredCategories(false)}
            onClick={toggleCategories}
          >
            Categorias
          </button>
          {isCategoriesOpen && (
            <div style={styles.dropdownMenu}>
              <div style={styles.dropdownItem} onClick={() => navigate("/notebook")}>
                Notebook
              </div>
              <div style={styles.dropdownItem} onClick={() => navigate("/desktop")}>
                Desktop
              </div>
              <div style={styles.dropdownItem} onClick={() => navigate("/placa-de-video")}>
                Placa de Vídeo
              </div>
              <div style={styles.dropdownItem} onClick={() => navigate("/placa-mae")}>
                Placa-mãe
              </div>
              <div style={styles.dropdownItem} onClick={() => navigate("/memoria")}>
                Memória
              </div>
              <div style={styles.dropdownItem} onClick={() => navigate("/hd")}>
                HD
              </div>
              <div style={styles.dropdownItem} onClick={() => navigate("/ssd")}>
                SSD
              </div>
            </div>
          )}
        </div>

        {/* Login Button */}
        <button
          style={{
            ...styles.loginButton,
            backgroundColor: isHoveredLogin ? "#008000" : "#0056A6", // Verde ou Azul
          }}
          onMouseEnter={() => setIsHoveredLogin(true)}
          onMouseLeave={() => setIsHoveredLogin(false)}
          onClick={() => navigate("/login")}
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
    position: "relative",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  menu: {
    display: "flex",
    alignItems: "center",
  },
  navButton: {
    color: "white",
    backgroundColor: "#0056A6",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginRight: "10px",
    transition: "background-color 0.3s ease",
  },
  loginButton: {
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  dropdown: {
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    zIndex: 1000,
    overflow: "hidden",
  },
  dropdownItem: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: "#00274D",
    fontSize: "14px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
};

export default Navbar;
