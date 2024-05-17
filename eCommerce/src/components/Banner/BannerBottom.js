import React from "react";
import { lock, shipping_country } from "../../assets/images";
import { FaWhatsapp } from "react-icons/fa";
const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-32 py-10">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center lg:px-24">
        <div className="flex md:w-auto items-center gap-2 w-72 space-x-4">
          <span className="text-5xl text-center w-10 ml-1 text-orange-500">
            <img src={shipping_country} />
          </span>
          <p className="text-xl text-lightText ">
            ENVÍO GRATIS <br />{" "}
            <span className="text-xs text-lightText ">
              ENVÍO GRATIS A PARTIR DE $45.000
            </span>
          </p>
        </div>

        <div className="h-2/3 border-l-2 border-[#e5e7eb]"></div>

        <a
          href="https://wa.me/+5490446339"
          target="_blank"
          className="flex items-center gap-2 w-72 space-x-4"
        >
          <span className="font-bold font-titleFont w-6 text-center">
            <FaWhatsapp className="text-[#fc148c]" size={35} />
          </span>
          <p className="text-lightText text-xl">24 Hs Atención al Cliente</p>
        </a>

        <div className="h-2/3 border-l-2 border-[#e5e7eb]"></div>

        <div className="flex  md:w-auto items-center gap-2 w-72 space-x-4">
          <span className="text-2xl  text-center w-10">
            <img src={lock} />
          </span>
          <p className="text-xl text-lightText">Compra Protegida</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
