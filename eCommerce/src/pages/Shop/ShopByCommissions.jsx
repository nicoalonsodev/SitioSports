import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const ShopByCommissions = () => {
  const [itemsPerPage, setItemsPerPage] = useState(48);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="" />
      <div className="px-72 py-4 flex flex-wrap">
        <p className="text-balance text-left">
          TE PRESENTAMOS NUESTRO CATÁLOGO POR ENCARGO. TE TRAEMOS EL MODELO Y TALLE QUE NOS PIDAS! UNA VEZ QUE TENGAS TU MODELO HACE <a className="text-pink-500 hover:underline uppercase" href="https://wa.me/+5493812097082" target="_blank">click par contactarnos por whatsapp</a>
        </p>
        <ul className="list-disc pl-5 mt-4 text-left">
          <li>Demora estimada de 30 a 35 días.</li>
          <li>Cada botín viene con su mochila y su caja original.</li>
          <li>Elegir de nuestro catálogo (Si no encuentras tu botín, <a className="text-pink-500 hover:underline" href="https://wa.me/+5493812097082" target="_blank">contáctanos haciendo click aqui.</a>)</li>
          <li>Talles del 5 US al 12 US.</li>
          <li>Precio 140 USD, se paga el 50% para hacer el encargo y el 50% restante cuando llegan a tu destino.</li>
        </ul>
        <div className="flex justify-center w-full mt-4">
          <a
            href="https://drive.google.com/file/d/1gFSE1iiupdqe5QKeFG3mUP45Yezno7FP/uc?export=download"
            className="mr-4 font-bold text-pink-500 hover:underline"
          >
            Descargar catálogo
          </a>
          <a
            href="https://drive.google.com/file/d/1gFSE1iiupdqe5QKeFG3mUP45Yezno7FP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-pink-500 hover:underline"
          >
            Ver el catálogo en línea
          </a>
        </div>
      </div>
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        {/* <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div> */}
        {/* <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />

          {/* <Pagination commissions={"commissions"} itemsPerPage={itemsPerPage} /> 
        </div> */}
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default ShopByCommissions;
