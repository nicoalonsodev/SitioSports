import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  nike1,
  nike2,
  adidas1,
  adidas2,
  adidas3,
  puma1,
} from "../../../assets/images/index";
import { useSelector } from "react-redux";

const BestSellers = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [bestSellersProducts, setBestSellersProducts] = useState([]);

  useEffect(() => {
    if (products) {
      const bestSellers = products.filter(product => product.best_sellers);
      setBestSellersProducts(bestSellers);
    }
  }, [products]);

  return (
    <div className="w-full py-14">
      <Heading heading="Lo Más Vendido" />
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {bestSellersProducts.map((product) => (
          <div key={product.id} className="px-2">
          <Product
            _id={product.id}
            img={product.variants[0].imgUrl[0]} 
            productName={product.productName}
            price={product.price}
            compare_price={product.compare_price}
            color="Black"
            badge={true}
            variants={product.variants}
            brand={product.brand}
            cat={product.cat}
            description={product.description}
            sub_cat={product.sub_cat}
            discount={product.discount_percentage}
            video_youtube={product.video_youtube}
          />
        </div>
        ))}
        {/* <Product
          _id="1011"
          img={nike1}
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={nike2}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={adidas1}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        /> */}
      </div>
    </div>
  );
};

export default BestSellers;
