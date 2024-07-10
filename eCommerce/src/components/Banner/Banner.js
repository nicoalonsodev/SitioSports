import React, { useState } from "react";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide";
import { banner1, banner2, banner2_mobile } from "../../assets/images";
const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  const slides = [
    {
      imgSrc:
        banner1,
      text: "Quality Printing Solutions",
      Subtext:
        "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/catalogo",
      buttonText: "Comprar Ahora",
    },
    {
      imgSrc: banner2,
      text: "Enhance Your Printing Experience",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonLink: "/catalogo",
      buttonText: "Comprar Ahora",
    },
    {
      imgSrc: banner2_mobile,
      text: "Efficiency Redefined",
      Subtext:
        "Maximize productivity with our advanced printers and high-quality consumables. ",
      buttonLink: "/shop",
      buttonText: "Comprar Ahora",
    },
  ];

  // Filtrar slides según el tamaño de la pantalla
  const filteredSlides =
    window.innerWidth >= 1024
      ? slides.slice(0, 2) // Pantallas grandes: primeros 2 slides
      : [slides[0], slides[2]]; // Pantallas pequeñas: primer y tercer slide

  return (
    <div className="w-full bg-white overflow-hidden">
      <Slider {...settings}>
        {filteredSlides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
