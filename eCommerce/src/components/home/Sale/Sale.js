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
              src="https://res.cloudinary.com/dtf3dfpnw/video/upload/v1717665407/Lleva_la_pasi%C3%B3n_de_la_scaloneta_a_todos_lados_en_esta_Copa_Am%C3%A9rica_2024_Prep%C3%A1rate_para_alentar_a_nuestra_selecci%C3%B3n_con_la_nueva_camiseta_oficial_de_Argentina._Caracter%C3%ADsticas-_Material_Premi_1_k8rnqd.mp4"
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
              imgSrc="https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717665349/IMG_5182_motsmt.jpg"
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/catalogo">
            <Image
              className="h-full w-full object-cover "
              imgSrc="https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717665348/IMG_5181_da1u0x.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
