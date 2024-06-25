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
      <div className="px-72 py-4">
        <p className="text-balance text-center">
          AHORA ESTAS EN EL CATÁLOGO POR ENCARGO, ESTO SIGNIFICA QUE LOS
          PRODUCTOS VERÁS EN PANTALLA DEMORAN DE 30 A 35 DÍAS HÁBILES EN LLEGAR
          A TU DESTINO.
        </p>
      </div>
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />

          <Pagination commissions={"commissions"} itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default ShopByCommissions;
