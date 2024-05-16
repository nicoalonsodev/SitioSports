import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
const AfterTransfer = () => {
  return (
    <div className="px-20">
      <div className="flex justify-start items-start py-20 w-2/3 gap-6">
        <div>
          <GiSandsOfTime className="text-4xl" />
        </div>
        <div className="flex flex-col justify-start items-start space-y-6">
          <h1 className="text-2xl font-semibold">En espera de pago</h1>
          <p>Hola como estas?</p>
          <p>Podes hacer la trasnferencia o depósito en la siguiente cuenta</p>
          <div>
            <p>TITULAR: PEDRO GONZALEZ</p>
            <p>CVU: 123456789876554</p>
            <p>ALIAS: PEDRO.GONZALEZ</p>
            <p>DNI: 38546333</p>
          </div>
          <p>
            Por favor enviar comprobante mediante WhatsApp (11 7363 8933), hasta
            no enviar el comprobante no es computada la compra. (Por favor si es
            posible enviar en formato documento, es necesario que se vea el
            código de operación, fecha, importe y destino). También le pedimos
            amablemente que nos indique el número de orden de su compra.
          </p>
          <p>Gracias por tu compra!</p>
        </div>
      </div>
    </div>
  );
};

export default AfterTransfer;
