import React, { useState } from "react";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide";

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
    // beforeChange: (prev, next) => {
    //   setDotActive(next);
    // },
    // responsive: [
    //   {
    //     breakpoint: 1024, // Pantallas grandes
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //       customPaging: (i) => (
    //         <div
    //           style={
    //             i === dotActive
    //               ? {
    //                   width: "30px",
    //                   height: "45px",
    //                   color: "#262626",
    //                   borderRight: "3px #262626 solid",
    //                   padding: "8px 0",
    //                   cursor: "pointer",
    //                 }
    //               : {
    //                   width: "30px",
    //                   height: "45px",
    //                   color: "transparent",
    //                   borderRight: "3px white solid",
    //                   padding: "8px 0",
    //                   cursor: "pointer",
    //                 }
    //           }
    //         >
    //           {/* 0{i + 1} */}
    //         </div>
    //       ),
    //       appendDots: (dots) => (
    //         <div
    //           style={{
    //             position: "absolute",
    //             top: "50%",
    //             left: "7%",
    //             transform: "translateY(-50%)",
    //           }}
    //         >
    //           <ul style={{ margin: "0px" }}> {dots} </ul>
    //         </div>
    //       ),
    //     },
    //   },
    //   {
    //     breakpoint: 576, // Pantallas pequeñas
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //       customPaging: (i) => (
    //         <div
    //           style={
    //             i === dotActive
    //               ? {
    //                   width: "25px",
    //                   color: "#262626",
    //                   borderRight: "3px #262626 solid",
    //                   cursor: "pointer",
    //                   fontSize: "12px",
    //                 }
    //               : {
    //                   width: "25px",
    //                   color: "transparent",
    //                   borderRight: "3px white solid",
    //                   cursor: "pointer",
    //                   fontSize: "12px",
    //                 }
    //           }
    //         >
    //           0{i + 1}
    //         </div>
    //       ),
    //       appendDots: (dots) => (
    //         <div
    //           style={{
    //             position: "absolute",
    //             top: "50%",
    //             left: "2%",
    //             transform: "translateY(-50%)",
    //           }}
    //         >
    //           <ul style={{ margin: "0px" }}> {dots} </ul>
    //         </div>
    //       ),
    //     },
    //   },
    // ],
  };

  const slides = [
    {
      imgSrc:
        "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717595311/NUESTRA_CAMISETA_1_efphhh.jpg",
      text: "Quality Printing Solutions",
      Subtext:
        "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/catalogo",
      buttonText: "Comprar Ahora",
    },
    {
      imgSrc: "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717595294/Dise%C3%B1o_sin_t%C3%ADtulo_39_ejjava.png",
      text: "Enhance Your Printing Experience",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonLink: "/catalogo",
      buttonText: "Comprar Ahora",
    },
    {
      imgSrc: "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1718304229/Dise%C3%B1o_sin_t%C3%ADtulo_46_rwettj.png",
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
