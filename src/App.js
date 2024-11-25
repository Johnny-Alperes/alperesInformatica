import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";

// Exemplos de páginas para categorias
const CategoryPage = ({ category }) => (
  <div style={{ padding: "20px" }}>
    <h1>{category}</h1>
    <p>Detalhes sobre {category}.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Carousel />
                <Services />
                <ContactForm />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        {/* Rotas das categorias */}
        <Route path="/notebook" element={<CategoryPage category="Notebook" />} />
        <Route path="/desktop" element={<CategoryPage category="Desktop" />} />
        <Route path="/placa-de-video" element={<CategoryPage category="Placa de Vídeo" />} />
        <Route path="/placa-mae" element={<CategoryPage category="Placa-mãe" />} />
        <Route path="/memoria" element={<CategoryPage category="Memória" />} />
        <Route path="/hd" element={<CategoryPage category="HD" />} />
        <Route path="/ssd" element={<CategoryPage category="SSD" />} />
      </Routes>
    </Router>
  );
}

export default App;
