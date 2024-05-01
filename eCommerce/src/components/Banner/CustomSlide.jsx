import React from "react";
import { bannerImgFour } from "../../assets/images";
import { Link } from "react-router-dom";
import Image from "../designLayouts/Image";
const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => {
  return (
    <div className="relative flex justify-center items-start h-[550px]">
      <div className="max-w-[450px] mr-[100px] z-[5] h-full flex flex-wrap items-center">
        {/* <h1 className="mb-[15px] text-5xl text-gray-100 font-bold">{text}</h1>
          <p className="mb-[25px] text-2xl text-gray-200 ">{Subtext}</p> */}
        <Link to={buttonLink}>
          <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="absolute">
        <Image imgSrc={imgSrc} />
      </div>
    </div>
  );
};

export default CustomSlide;
