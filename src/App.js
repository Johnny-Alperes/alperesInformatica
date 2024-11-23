import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
