import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Obrigado pelo contato, ${name}! Entraremos em contato em breve.`);
  };

  return (
    <section className="contact-form">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Mensagem:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
