import React, { useState } from "react";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    },
    form: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "300px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#0056A6",
      color: "white",
      cursor: "pointer",
    },
    link: {
      display: "block",
      margin: "10px 0",
      textAlign: "right",
      color: "#0056A6",
      textDecoration: "none",
      fontSize: "14px",
      cursor: "pointer",
    },
    toggleButton: {
      marginTop: "-10px",
      marginBottom: "10px",
      background: "none",
      border: "none",
      color: "#0056A6",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" style={styles.input} />
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Senha"
          style={styles.input}
        />
        <button
          type="button"
          style={styles.toggleButton}
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? "Ocultar senha" : "Mostrar senha"}
        </button>
        <a href="#" style={styles.link}>
          Esqueceu sua senha?
        </a>
        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
