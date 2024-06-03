import React, { useState } from "react";
import { visa, amex, mastercard, shipping } from "../../../assets/images";
import { TiPlus } from "react-icons/ti";

const PaymentMethods = () => {
  const [viewPaymentMethods, setViewPaymentMethods] = useState(false);

  const handleViewPayment = () => {
    setViewPaymentMethods(!viewPaymentMethods);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1 cursor-pointer" onClick={handleViewPayment}>
        <div className="flex">
          <div className="w-[48px]">
            <img src={visa} alt="" />
          </div>
          <div className="w-[48px]">
            <img src={amex} alt="" />
          </div>
          <div className="w-[48px]">
            <img src={mastercard} alt="" />
          </div>
          <div className="w-[48px] flex items-center">
            <TiPlus className="text-xl text-[#fc148c]" />
          </div>
        </div>
        <div>
          <p>
            <span className="font-bold">15% de descuento</span> pagando con
            transferencia bancaria
          </p>
        </div>
        <div className="underline">VER MEDIOS DE PAGO</div>
      </div>
      <div className="flex items-center gap-1">
        <img width={32} src={shipping} alt="" />
        <p>
          <span className="text-[#fc148c] font-bold">Envío Gratis </span>{" "}
          superando los $45.000,00
        </p>
      </div>
    
      {/* {viewPaymentMethods && (
        <div className="fixed -top-4 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Medios de Pago</h2>
            {/* Aquí coloca el contenido de los métodos de pago */}
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleViewPayment}
            >
              Cerrar
            </button>
          </div>
        </div>
      )} */} 
    </div>
  );
};

export default PaymentMethods;
