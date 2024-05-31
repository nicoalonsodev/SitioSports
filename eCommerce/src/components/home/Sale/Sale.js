import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
  saleImgFour,
  saleImgFive,
  saleImgSix,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const Sale = () => {
  return (
    <div className="py-0 lg:py-20 flex flex-col md:flex-row items-start justify-between gap-4">
      <div className="bg-[#f3f3f3] w-full md:w-2/3 lg:w-1/2 f-full flex flex-col justify-center items-center text-black">
        <div className="relative  h-[610px] aspect-w-4 aspect-h-3 w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source
              src="https://res.cloudinary.com/doczyujqf/video/upload/v1717157423/SitioSports/Feed_sitio.sport_Argentina_1_kln9hk.mp4"
              type="video/mp4"
            />
           
            Tu navegador no soporta la reproducción de video.
          </video>
          {/* <Image className="h-full w-full object-cover" imgSrc={saleImgFour} /> */}
        </div>
      </div>

      <div className=" h-[610px] w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 overflow-hidden">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc="https://res.cloudinary.com/doczyujqf/image/upload/v1717156481/SitioSports/6cd0f650-a6dc-4dc4-b4ba-b9a5f27f226f_q4je6h.jpg"
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover "
              imgSrc="https://res.cloudinary.com/doczyujqf/image/upload/v1717156481/SitioSports/IMG_5182_otok2w.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
