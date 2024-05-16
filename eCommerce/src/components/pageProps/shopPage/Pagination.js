import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

// const items = paginationItems;

function Items({ currentItems, selectedBrands, selectedCategories, selectedSizes, selectedSubcategories }) {
 

  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);

    const isSubcategorySelected =
    selectedSubcategories.length === 0 ||
    selectedSubcategories.some((subcategory) => subcategory.title === item.sub_cat);

    const isSizeSelected =
    selectedSizes.length === 0 ||
    selectedSizes.some((selectedSize) =>
      item.variants.some((variant) =>
        variant.sizes.some(
          (size) =>
            selectedSize.title === size.size && size.stock !== 0
        )
      )
    );
    return isBrandSelected && isCategorySelected && isSizeSelected && isSubcategorySelected;
  });
 
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item._id} className="w-full">
          <Product
            _id={item.id}
            badge={item.badge}
            img={item.variants[0].imgUrl[0]}
            productName={item.productName}
            price={item.price}
            brand={item.brand}
            cat={item.cat}
            sub_cat={item.sub_cat}
            sizes={item.sizes}
            variants={item.variants}
            description={item.description}
            color={item.color}
          />
        </div>
      ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, commissions }) => {
  const items = useSelector(state => {
    if (commissions) {
      // Si es así, devolvemos los productos por encargo
      return state.orebiReducer.commissions;
    } else {
      // Si no, devolvemos todos los productos
      return state.orebiReducer.products;
    }
  });  // Filter items based on selected brands and categories

  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const selectedBrands = useSelector(
    (state) => state.orebiReducer.checkedBrands
  );
  const selectedCategories = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );
  const selectedSubcategories = useSelector(
    (state) => state.orebiReducer.checkedSubcategorys
  );
  const selectedSizes = useSelector(
    (state) => state.orebiReducer.checkedSizes
  );
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    const newStart = newOffset + 1; // Adjust the start index

    setItemOffset(newOffset);
    setItemStart(newStart);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
          selectedSizes={selectedSizes}
          selectedSubcategories={selectedSubcategories}
        />
      </div>
    </div>
  );
};

export default Pagination;
