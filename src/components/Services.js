import React from "react";
import "./Services.css";

function Services() {
  const services = [
    "Formatação de Computadores",
    "Remoção de Vírus",
    "Troca de Peças",
    "Instalação de Software",
    "Configuração de Redes",
  ];

  return (
    <section className="services">
      <h2>Nossos Serviços</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
