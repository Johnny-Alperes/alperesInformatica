import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
