import React from "react";
import { Link } from "react-router-dom";
import {
offer1, offer2, video_arg
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
              src={video_arg}
              type="video/mp4"
            />
           
            Tu navegador no soporta la reproducción de video.
          </video>
          {/* <Image className="h-full w-full object-cover" imgSrc={saleImgFour} /> */}
        </div>
      </div>

      <div className="hidden h-[610px] w-full md:w-2/3 lg:w-1/2 lg:flex flex-col gap-4 overflow-hidden">
        <div className="h-1/2 w-full">
          <Link to="/catalogo">
            <Image
              className="h-full w-full object-cover"
              imgSrc={offer1}
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/catalogo">
            <Image
              className="h-full w-full object-cover "
              imgSrc={offer2}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
