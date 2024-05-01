import React from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Subcategory from "./shopBy/Subcategory";
import Size from "./shopBy/Size";
import Price from "./shopBy/Price";
import NavTitle from "../shopPage/shopBy/NavTitle";
import SizeCamisetas from "./shopBy/SizeCamisetas";
import SubcategoryCamisetas from "./shopBy/Subcategory.Camisetas";
const ShopSideNav = () => {
  
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Brand />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Botines</h1>
        <Subcategory />
        <Size />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Camisetas</h1>
        <SubcategoryCamisetas />
        <SizeCamisetas />
      </div>
      {/* <Price /> */}
    </div>
  );
};

export default ShopSideNav;
