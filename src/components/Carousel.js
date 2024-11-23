import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const products = [
    {
      id: 1,
      name: "Mouse Gamer",
      image: "https://images.tcdn.com.br/img/img_prod/1159412/mouse_gamer_redragon_nix_rgb_wireless_10000dpi_9_botoes_black_m914_rgb_182583812_1_76a616ca234b4e298a7ec45824bfde4f.jpg",
    },
    {
      id: 2,
      name: "Microfone Gamer",
      image: "https://mirandacomputacao.jetassets.com.br/produto/48224-principal.png",
    },
    {
      id: 3,
      name: "Monitor Ultrawide",
      image: "https://m.media-amazon.com/images/I/81wfdDTIjHS._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 4,
      name: "Headset Gamer",
      image: "https://patoloco.com.br/arquivos/produtos/imagens_adicionais/4ddb9976e68263b7d0a27d8ab260a5dec1afbff6.jpeg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Produtos em promoção!</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
