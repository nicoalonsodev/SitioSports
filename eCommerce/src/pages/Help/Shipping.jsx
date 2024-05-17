import React from "react";

const Shipping = () => {
  return (
    <div className="px-20 flex justify-center">
      <div className="flex flex-col justify-center items-start py-20 w-2/3 gap-6">
        <h1 className="text-3xl font-semibold">Envíos</h1>
        <div className="flex flex-col justify-start items-start space-y-6">
          <p className="text-xl">
            Nuestros enviós son realizados con el servicio de Correo Argentino.
          </p>
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/2682@2x.png"
            alt="correo argentino"
          />
          <p className="text-xl">Ofrecemos dos formas de envíos:</p>
          <div className="space-y-2">
            <h1 className="text-pink-600 text-xl font-semibold">
              Estandar - Gratis para compras superiores a $45.000
            </h1>
            <p>
              Tu pedido es despachado y enviado a la sucursal de Correo
              Argentino mas cercana a tu domicilio, tardando de 3 a 4 días
              hábiles.{" "}
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-pink-600 text-xl font-semibold">
              A domicilio - Se le suma $3000 al monto de envío que ya estaba
              determinado.
            </h1>
            <p>
              Tu pedido es despachado y enviado a tu domicilio, tardando 5 días
              hábiles en llegar.
            </p>
          </div>
          <p>
            Para todos los envíos proporcionamos al cliente un codigo de
            seguimiento para poder rastrear su pedido a través de Correo
            Argentino
          </p>
          <p>
            Por favor cualquier consulta puedes comunicarnos a nuestro whatsapp
            o por correo electrónico. También le pedimos amablemente que nos
            indique el número de orden de su compra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
