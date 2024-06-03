import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { SplOfferData } from "../../../constants";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const SpecialOffers = () => {

  const products = useSelector((state) => state.orebiReducer.products);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (products) {
      const specialOffers = products.filter(product => product.special_offers);
      setData(specialOffers);
    }
  }, [products]);
  return (
    <div className="w-full pb-20">
      <Heading heading="Ofertas" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={product.variants[0].imgUrl[0]}
            productName={product.productName}
            price={product.price}
            color={product.color}
            // badge={true}
            description={product.description}
            variants={product.variants}
            brand={product.brand}
            cat={product.cat}
            sub_cat={product.sub_cat}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
