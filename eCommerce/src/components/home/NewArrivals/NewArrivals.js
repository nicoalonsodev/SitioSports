import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  river,
  boca,
  adidas3,
  puma1,
  arg2,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { useSelector } from "react-redux";
const NewArrivals = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);

  useEffect(() => {
    if (products) {
      const newArrivals = products.filter(product => product.new_arrivals);
      setNewArrivalsProducts(newArrivals);
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
    <div className="w-full pb-16 space-y-10 py-8">
      {/* <Heading heading="Nuevos ingresos" /> */}
      <h1 className="text-left text-4xl font-semibold ">Nuevos Ingresos</h1>
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
          />
        </div>
        ))}
        <div className="px-2">
          <Product
            _id="100001"
            img={river}
            productName="Round Table Clock"
            price="44.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={boca}
            productName="Smart Watch"
            price="250.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={arg2}
            productName="cloth Basket"
            price="80.00"
            color="Mixed"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={puma1}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={adidas3}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
