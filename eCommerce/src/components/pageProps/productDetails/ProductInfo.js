import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import Sizes from "../../Sizes/Sizes";
import PaymentMethods from "./PaymentMethods";
import { FaRulerHorizontal, FaLock } from "react-icons/fa";
import SizeGuide from "./SizeGuide";

const ProductInfo = ({ productInfo, handleSelectedImages }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeMaxQuantity, setSizeMaxQuantity] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState({
    variant: "blue",
    id: 2,
    sizes: [
      {
        size: "39",
        stock: 6,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "41",
        stock: 0,
      },
      {
        size: "42",
        stock: 0,
      },
      {
        size: "43",
        stock: 3,
      },
      {
        size: "44",
        stock: 0,
      },
      {
        size: "45",
        stock: 0,
      },
    ],
    imgUrl: [
      "https://res.cloudinary.com/doczyujqf/image/upload/v1715636234/xjh8ueocjorq1puiidvm.jpg",
      "https://res.cloudinary.com/doczyujqf/image/upload/v1715687623/gwriyowwnzne4sriuatf.jpg",
    ],
  });
  const highlightStyle = {
    color: "#d0121a", // Change this to the desired color
    fontWeight: "bold", // Change this to the desired font weight
  };

  useEffect(() => {
    if (
      productInfo &&
      productInfo.variants &&
      productInfo.variants.length > 0
    ) {
      setSelectedVariant(productInfo.variants[0]);
    }
  }, [productInfo]);
  console.log(selectedVariant);

  useEffect(() => {
    if (selectedVariant) {
      handleSelectedImages(selectedVariant.imgUrl);
    }
  }, [selectedVariant]);

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
      _id: 9003,
      title: "40",
    },
    {
      _id: 9005,
      title: "41",
    },
    {
      _id: 9007,
      title: "42",
    },
    {
      _id: 9009,
      title: "43",
    },
    {
      _id: 9011,
      title: "44",
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
    // Buscar el objeto en productInfo.sizes que tiene el tamaño seleccionado
    const selectedSizeObject = selectedVariant.sizes.find(
      (item) => item.size === size
    );

    if (selectedSizeObject) {
      // Si se encontró el objeto, actualizar el estado sizeMaxQuantity con el stock correspondiente
      setSizeMaxQuantity(selectedSizeObject.stock);
    } else {
      // Manejar el caso donde el tamaño seleccionado no se encuentra en productInfo.sizes
      console.log("El tamaño seleccionado no se encontró en el producto");
      // Podrías establecer sizeMaxQuantity en 0 u otro valor predeterminado si lo deseas
      setSizeMaxQuantity(0);
    }
  };

  const availableSizes = selectedVariant.sizes
    ?.map((size) => {
      if (size.stock > 0) {
        return size.size;
      }
    })
    .filter((size) => size !== undefined && size !== null);

  return (
    <>
      <div className="flex flex-col items-start gap-4 lg:w-[40%]">
        <div>
          <span className=" text-[#fc148c] font-semibold">Fútbol</span>
          <h1 className="text-3xl font-normal">{productInfo.productName}</h1>
          <h6 className="text-3xl font-extrabold text-gray-700">
            $ {productInfo.price}
          </h6>
        </div>
        <p className="text-gray-700">
          {productInfo.description ? productInfo.description : ""}
        </p>
        <PaymentMethods />
        {productInfo.variants ? (
          <div className="flex py-4">
            {productInfo.variants?.map((variant) => (
              <div
                key={variant.id}
                className={`cursor-pointer border-gray-300 border-[1px] ${
                  variant.id !== selectedVariant.id
                    ? ""
                    : "border-b-2 border-gray-700"
                }`}
                onClick={() => setSelectedVariant(variant)}
              >
                <img className="w-20" src={variant.imgUrl[0]} />
              </div>
            ))}
           
          </div>
        ) : (
          ""
        )}
        <Sizes
          selectedSize={selectedSize}
          handleSize={handleSize}
          productSizes={availableSizes}
          sizes={productInfo.cat === "Botines" ? sizesBotines : sizesCamisetas}
        />
        <SizeGuide cat={productInfo.cat} />
        <div className="flex flex-row items-center gap-12">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: productInfo._id,
                  name: productInfo.productName,
                  quantity: 1,
                  maxQuantity: sizeMaxQuantity,
                  size: selectedSize,
                  image: selectedVariant.imgUrl[0],
                  badge: productInfo.badge,
                  price: productInfo.price,
                  color: productInfo.color,
                  variant: selectedVariant,
                })
              )
            }
            className="bg-[#fc148c] text-white font-semibold py-3 px-4 lg:px-16 rounded-sm w-auto h-auto lg:h-full text-xl"
          >
            Agregar al Carrito
          </button>
        </div>
        <div className="flex items-center justify-start gap-4">
          <FaLock className="text-2xl" />
          <div className="flex flex-col">
            <p className="font-semibold">Compra Protegida</p>
            <p className="text-sm">Tus datos cuidados durante toda la compra.</p>
          </div>
        </div>
        <p className="text-sm">
          EN SITIO SPORTS, VENDEMOS PRODUCTOS CON ENTREGA INMEDIATA Y PRODUCTOS
          POR ENCARGO. LOS PRODUCTOS CON ENTREGA INMEDIATA DEMORAN DE 1 A 5 DÍAS
          HÁBILES EN LLEGAR A TU PUERTA Y LOS PRODUCTOS POR ENCARGO DEMORAN DE
          20 A 30 DÍAS HÁBILES. PARA VER EL CATALOGO POR ENCARGO{" "}
          <a className="underline" href="/encargo">
            HAZ CLICK AQUI
          </a>
        </p>
      </div>
    </>
  );
};

export default ProductInfo;
