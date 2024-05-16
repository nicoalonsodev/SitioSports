import React, { useState } from "react";
import { FaRulerHorizontal } from "react-icons/fa";
import { talles_botines, talles_camisetas } from "../../../assets/images";
const SizeGuide = ({cat}) => {
  const [viewSizeGuide, setViewSizeGuide] = useState(false);

  const handleViewSize = () => {
    setViewSizeGuide(!viewSizeGuide);
  };

  return (
    <div>
      <div className="hover:underline cursor-pointer flex items-center gap-1 "
      onClick={handleViewSize}
      >
        <FaRulerHorizontal className="rotate-180 text-xl text-[#fc148c]" />
        <p className="underline hover:text-[#fc148c]">Guia de talles</p>
      </div>
      {/* Modal */}
      {viewSizeGuide && (
        <div className="fixed -top-4 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Guia de Talels</h2>
            {/* Aquí coloca el contenido de los métodos de pago */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleViewSize}
            >
              Cerrar
            </button>
            <img src={cat === "Botines" ? talles_botines : talles_camisetas} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeGuide;
