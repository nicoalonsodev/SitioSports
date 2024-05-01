import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import Sizes from "../../Sizes/Sizes";
const ProductInfo = ({ productInfo }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const highlightStyle = {
    color: "#d0121a", // Change this to the desired color
    fontWeight: "bold", // Change this to the desired font weight
  };

  const renderDescription = () => {
    if (!productInfo.des) {
      return null; // or handle accordingly if product.des is not defined
    }

    const description = productInfo.des.split(/:(.*?)-/).map((part, index) => {
      return (
        <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
          {part}
        </span>
      );
    });

    return <>{description}</>;
  };
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const sizesBotines = [
    {
      _id: 9001,
      title: "39",
    },
    {
      _id: 9002,
      title: "39.5",
    },
    {
      _id: 9003,
      title: "40",
    },
    {
      _id: 9004,
      title: "40.5",
    },
    {
      _id: 9005,
      title: "41",
    },
    {
      _id: 9006,
      title: "41.5",
    },
    {
      _id: 9007,
      title: "42",
    },
    {
      _id: 9008,
      title: "42.5",
    },
    {
      _id: 9009,
      title: "43",
    },
    {
      _id: 9010,
      title: "43.5",
    },
    {
      _id: 9011,
      title: "44",
    },
    {
      _id: 90012,
      title: "44.5",
    },
    {
      _id: 90013,
      title: "45",
    },
  ];

  const sizesCamisetas = [
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
  const handleSize = (size) => {
    setSelectedSize(size);
  };
  return (
    <>
      <div className="flex flex-col items-start gap-4 lg:w-2/4">
        <div>
          <span className=" text-[#fc148c] font-semibold">Fútbol</span>
          <h1 className="text-4xl font-bold">{productInfo.productName}</h1>
          <h6 className="text-lg font-semibold text-gray-700">
            $ {productInfo.price}
          </h6>
        </div>
        <p className="text-gray-700">Short description</p>
        <Sizes selectedSize={selectedSize} handleSize={handleSize} productSizes={productInfo.sizes} sizes={productInfo.cat === "Botines" ? sizesBotines : sizesCamisetas} />
        <div className="hover:underline cursor-pointer">Guia de talles</div>
        <div className="flex flex-row items-center gap-12">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: productInfo.id,
                  name: productInfo.productName,
                  quantity: 1,
                  size: selectedSize,
                  image: productInfo.img,
                  badge: productInfo.badge,
                  price: productInfo.price,
                  colors: productInfo.color,
                })
              )
            }
            className="bg-[#fc148c] text-white font-semibold py-3 px-4 lg:px-16 rounded-sm w-auto h-auto lg:h-full text-xl"
          >
            Agregar al Carrito
          </button>
        </div>
        <div>Envio gratis a partir de los $99.99</div>
      </div>
    </>
  );
};

export default ProductInfo;
