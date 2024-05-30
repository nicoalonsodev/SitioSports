import React from "react";
import { bannerImgFour } from "../../assets/images";
import { Link } from "react-router-dom";
import Image from "../designLayouts/Image";
const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => {
  return (
    <div className="relative flex justify-start items-start h-[200px] lg:h-[550px]">
      <div className="absolute">
        <Image imgSrc={imgSrc} />
      </div>
    </div>
  );
};

export default CustomSlide;
