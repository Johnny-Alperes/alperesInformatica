import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

import "./ProductCarousel.css";

const products = [
  {
    name: "Notebook Dell Inspiron",
    price: "R$ 3.200,00",
    image: "https://via.placeholder.com/150?text=Notebook+Dell",
  },
  {
    name: "Mouse Gamer RGB",
    price: "R$ 150,00",
    image: "https://via.placeholder.com/150?text=Mouse+Gamer",
  },
  {
    name: "Teclado Mecânico",
    price: "R$ 400,00",
    image: "https://via.placeholder.com/150?text=Teclado+Mecânico",
  },
  {
    name: "Monitor 24' Full HD",
    price: "R$ 800,00",
    image: "https://via.placeholder.com/150?text=Monitor+Full+HD",
  },
  {
    name: "Headset Gamer",
    price: "R$ 250,00",
    image: "https://via.placeholder.com/150?text=Headset+Gamer",
  },
  {
    name: "Impressora Multifuncional",
    price: "R$ 1.200,00",
    image: "https://via.placeholder.com/150?text=Impressora",
  },
];

function ProductCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="product-slide">
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
