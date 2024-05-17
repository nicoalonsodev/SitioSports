import React from "react";
import { bannerImgFour } from "../../assets/images";
import { Link } from "react-router-dom";
import Image from "../designLayouts/Image";
const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => {
  return (
    <div className="relative flex justify-start items-start h-[550px]">
      {/* <div className="max-w-[450px] mr-[100px] z-[5] h-full flex flex-wrap items-center mt-[168px] px-32">
        <Link to={buttonLink}>
          
        </Link>
      </div> */}
      <div className="absolute">
        <Image imgSrc={imgSrc} />
      </div>
    </div>
  );
};

export default CustomSlide;
