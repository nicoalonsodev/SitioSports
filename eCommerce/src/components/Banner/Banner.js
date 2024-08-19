import React, { useState } from "react";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide";
import { banner1} from "../../assets/images";
import banner_prueba from "../../assets/banner_prueba.webp"
import banner_prueba2 from "../../assets/banner_prueba2.webp"

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
        banner_prueba,
      text: "Quality Printing Solutions",
      Subtext:
        "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/catalogo",
      buttonText: "Comprar Ahora",
    },
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
      imgSrc: banner_prueba2,
      text: "Enhance Your Printing Experience",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonLink: "/catalogo",
      buttonText: "Comprar Ahora",
    },
  ];

  
  return (
    <div className="w-full bg-white overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
