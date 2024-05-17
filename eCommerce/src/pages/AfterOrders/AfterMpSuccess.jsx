import React from 'react'
import { useParams } from 'react-router-dom';
const AfterMp = () => {
  const { orden } = useParams();
  return (
    <div className="px-20 flex justify-center">
      <div className="flex justify-center items-start py-20 w-2/3 gap-6">
        <div className="flex flex-col justify-start items-start space-y-6">
          <h1 className="text-3xl font-normal">Orden de compra: #{orden}</h1>
          <h1 className="text-xl text-pink-600 font-semibold">Su compra fue exitosa!</h1>
          <p>Muchas gracias por comprar en Sitio Sports</p>
          <p>Podes hacer la trasnferencia o depósito en la siguiente cuenta.</p>
          <p>
            Por favor enviar comprobante mediante WhatsApp (11 7363 8933), hasta
            no enviar el comprobante no es computada la compra. (Por favor si es
            posible enviar en formato documento, es necesario que se vea el
            código de operación, fecha, importe y destino). También le pedimos
            amablemente que nos indique el número de orden de su compra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AfterMp
