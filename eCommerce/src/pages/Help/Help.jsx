import React from "react";
import {
  follow_order,
  credit_card,
  sizes_guia,
  returning,
  shipping_order,
} from "../../assets/images";
import Contact from "../Contact/Contact";
const Help = () => {
  return (
    <div className="flex flex-wrap justify-center px-32 py-12">
      <div className="flex flex-col justify-center px-32 w-full">
        <div className="flex justify-center gap-x-6">
          <div className="flex flex-col justify-center items-start bg-[#fc148c] rounded-lg">
            <div>
              <img src={shipping_order} />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-center text-2xl font-semibold text-white">
                Envios
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start bg-[#fc148c] rounded-lg">
            <div>
              <img src={credit_card} />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-center text-2xl font-semibold text-white">
                Pagos
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start bg-[#fc148c] rounded-lg">
            <div>
              <img src={follow_order} />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-center text-2xl font-semibold text-white">
                Seguimiento
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start bg-[#fc148c] rounded-lg">
            <div>
              <img src={returning} />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-center text-2xl font-semibold text-white">
                Devoluciones
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start bg-[#fc148c] rounded-lg p-3">
            <div className="">
              <img src={sizes_guia} />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-center text-2xl font-semibold text-white">
                Talles
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Help;
