import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../../home/Products/Product";
import SampleNextArrow from "../../home/NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../../home/NewArrivals/SamplePrevArrow";
import { useSelector } from "react-redux";
const RecommendProducts = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);

  useEffect(() => {
    if (products) {
      const newArrivals = products.filter(product => product.new_arrivals);
      const shuffled = newArrivals.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 4);
      setNewArrivalsProducts(selected);
    }
  }, [products]);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-4 lg:pb-16 space-y-10 py-8">
      {/* <Heading heading="Nuevos ingresos" /> */}
      <h1 className="text-left text-2xl lg:text-4xl font-normal ">Recomendaciones</h1>
      <Slider {...settings}>
        {newArrivalsProducts.map((product) => (
          <div key={product.id} className="px-2">
          <Product
            _id={product.id}
            img={product.variants[0].imgUrl[0]}
            productName={product.productName}
            price={product.price}
            color="Black"
            badge={true}
            des={product.description}
            variants={product.variants}
            brand={product.brand}
            cat={product.cat}
            sub_cat={product.sub_cat}
            discount={product.discount_percentage}
          />
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendProducts;
