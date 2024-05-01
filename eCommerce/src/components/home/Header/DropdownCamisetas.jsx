import React from "react";
import FilterSizes from "../../Sizes/FilterSizes";
import { useDispatch } from "react-redux";
import {
  toggleCategory,
  toggleBrand,
  cleanFilters,
  toggleSubcategory,
} from "../../../redux/orebiSlice";

const DropdownBotines = () => {
  const dispatch = useDispatch();

  const category = {
    _id: 9009,
    title: "Camisetas",
  };

  const subcategory = [
    {
      _id: 10008,
      title: "24/25",
    },
    {
      _id: 10009,
      title: "Retro",
    },
  ];

  const sizes = [
    {
      _id: 9014,
      title: "S",
    },
    {
      _id: 9015,
      title: "M",
    },
    {
      _id: 9016,
      title: "L",
    },
    {
      _id: 9017,
      title: "XL",
    },
    {
      _id: 9018,
      title: "XXL",
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
    {
      _id: 902,
      title: "Puma",
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
            Todas las camisetas
          </a>
          <a
            className="hover:underline"
            href="/shop"
            onClick={() => handleFilter(category, brands[1])}
          >
            Camiseta Adidas
          </a>
          <a
            className="hover:underline"
            href="/shop"
            onClick={() => handleFilter(category, brands[0])}
          >
            Camiseta Nike
          </a>
        </div>
        <div className="w-[25%] flex flex-col">
          <h1 className="font-bold text-lg"> Para</h1>
          <a className="hover:underline" href="/shop"
           onClick={() => handleFilterSub(category, subcategory[1])}
          >
            Camisetas Retro
          </a>
          <a className="hover:underline" href="/shop"
           onClick={() => handleFilterSub(category, subcategory[0])}
          >
            Camisetas 24/25
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

export default DropdownBotines;
