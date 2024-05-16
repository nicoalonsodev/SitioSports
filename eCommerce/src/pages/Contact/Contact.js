import React from "react";
import contactImg from "../../assets/images/sitio/contacto.jpeg";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  return (
    <div className="max-w-container mx-auto px-32 py-14 space-y-8">
      <h1 className="text-gray-700 font-bold text-4xl">SERVICIO AL CLIENTE</h1>
      <p>Servicio disponible de Lun - Vie: 9:00 AM a 9:00 PM y Sab: 10:00 AM a 6:00 PM</p>
      <div className="flex items-start gap-4">
        <div>
          <FaWhatsapp className="text-8xl" />
        </div>
        <div className="space-y-4 text-left w-2/3">
          <h1 className="text-gray-700 font-bold text-xl">Whatsapp</h1>
          <p className="text-lg">
            Añade +54 11 6842 0923 a la lista de contactos en tu smartphone y
            comunícate con nosotros.
          </p>
          <p className="text-lg">
            Si necesitas ayuda a través de WhatsApp, por favor comunícate con
            nosotros al número +541168420923. Recuerda que adidas nunca iniciará
            la comunicación ni te buscará por este canal, solamente
            responderemos a tus mensajes.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 py-8">
        <div>
          <IoMdMail className="text-8xl" />
        </div>
        <div className="space-y-4 text-left ">
          <h1 className="text-gray-700 font-bold text-xl">Correo Electrónico</h1>
          <p className="text-lg">
           sitiosports@gmail.com
          </p>
       
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div>
          <FaInstagram className="text-8xl" />
        </div>
        <div className="space-y-4 text-left ">
          <h1 className="text-gray-700 font-bold text-xl">Instagram</h1>
          <p className="text-lg">
            Comunicate con nosotros a travez de nuestro instagram.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
