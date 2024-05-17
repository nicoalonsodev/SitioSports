import React from "react";
import FilterSizes from "../../Sizes/FilterSizes";
import { useDispatch } from "react-redux";
import {
  toggleCategory,
  toggleBrand,
  cleanFilters,
  toggleSubcategory,
} from "../../../redux/orebiSlice";

const DropdownMedias = () => {
  const dispatch = useDispatch();

  const category = {
    _id: 9008,
    title: "Medias",
  };


  const sizes = [
    {
      _id: 9019,
      title: "39/40",
    },
    {
      _id: 9020,
      title: "41/42",
    },
    {
      _id: 9021,
      title: "43/44",
    },
  ];

  const brands = [
    {
      _id: 900,
      title: "Nike",
    },
    {
      _id: 901,
      title: "Adidas",
    },
  ];

  const handleFilterSub = (cat, sub) => {
    dispatch(cleanFilters());
    dispatch(toggleCategory(cat));
    if (sub) {
      dispatch(toggleSubcategory(sub));
    }
  };
  const handleFilter = (cat, brand) => {
    dispatch(cleanFilters());
    dispatch(toggleCategory(cat));
    if (brand) {
      dispatch(toggleBrand(brand));
    }
  };
  return (
    <div className=" w-full flex  h-auto p-10">
      <div className="border-[1px] flex w-full border-gray-100 space-x-4">
        <div className="w-[25%] flex flex-col">
          <h1 className="font-bold text-lg">Marca</h1>
          <a
            className="hover:underline"
            href="/shop"
            onClick={() => handleFilter(category)}
          >
           Todas las medias
          </a>
          <a
            className="hover:underline"
            href="/shop"
            onClick={() => handleFilter(category, brands[1])}
          >
            Medias Adidas
          </a>
          <a
            className="hover:underline"
            href="/shop"
            onClick={() => handleFilter(category, brands[0])}
          >
            Medias Nike
          </a>
        </div>
        <div className=" w-[50%] space-y-1">
          <h1 className="font-bold text-lg"> Busca segun tu talle</h1>
          <FilterSizes sizes={sizes} cat={category} />
        </div>
      </div>
    </div>
  );
};

export default DropdownMedias;
