import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.cartProducts);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");

  const ivaPercentage = 17.356;
  let totalWithShipping = 0;
  if (shippingCharge === "Gratis") {
    totalWithShipping = totalAmt;
  } else {
    totalWithShipping = totalAmt + shippingCharge;
  }
  const ivaAmount = ((ivaPercentage / 100) * totalWithShipping).toFixed(2);
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 45000) {
      setShippingCharge(5000);
    }  else if (totalAmt > 45000) {
      setShippingCharge("Gratis");
    }
  }, [totalAmt]);

  const handlePaymentGateway = () => {
    navigate(`/paymentgateway`, {
      state: {
        item: products,
        shippingCharge,
      },
    });
  };
  let numberOfProducts = 0;
  if (products) {
    for (const product of products) {
      numberOfProducts += product.quantity;
    }
  }

  return (
    <div className="max-w-container mx-auto px-32 relative">
      <div className="absolute top-10 right-24 flex items-center gap-3 w-[200px]">
        <img className="w-10 rounded-md" src="https://d1zxmlch3z83cq.cloudfront.net/production/2.3.41/_next/server/static/img/safe-shopping.svg" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold">COMPRA SEGURA</p>
          <p className="text-sm"> 100% PROTEGIDA</p>
        </div>
      </div>
      <Breadcrumbs title="Tu Carrito" />
      {products.length > 0 ? (
        <div className="pb-20 ">
          <div className="flex  gap-4 items-center">
            <IoIosInformationCircleOutline className="text-4xl text-pink-500" />
            <p className="text-md text-left">
              Los artículos en tu carrito no están reservados. <br />
              Terminá el proceso de compra ahora para hacerte con ellos.
            </p>
          </div>
          <div className="flex justify-between items-start flex-wrap mt-5">
            <div className="w-1/2 flex flex-wrap justify-start items-start">
              {products.map((item) => (
                <div className="w-full" key={item._id}>
                  <ItemCard item={item} />
                </div>
              ))}
            </div>
            <div className="w-1/3 gap-4 flex">
              <div className="w-full flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-left">
                  Resumen Del Pedido
                </h1>
                <div>
                  <p className="flex items-center justify-between border-b-0 py-1.5 text-lg font-medium">
                    {numberOfProducts === 1
                      ? "1 Producto"
                      : `${numberOfProducts} productos`}
                    <span className="font-normal tracking-wide font-titleFont">
                      ${totalAmt}
                    </span>
                  </p>
                  <p className="flex items-center justify-between py-1.5 text-lg font-medium">
                    Envio
                    <span className="font-normal tracking-wide font-titleFont">
                      {shippingCharge === "Gratis"
                        ? shippingCharge
                        : `$${shippingCharge}`}
                    </span>
                  </p>
                  <p className="flex items-center font-bold justify-between  py-1.5 text-lg ">
                    Total
                    <span className="font-bold tracking-wide text-lg font-titleFont">
                      $
                      {shippingCharge === "Gratis"
                        ? totalAmt
                        : totalAmt + shippingCharge}
                    </span>
                  </p>
                  <p className="">(IVA incluido ${ivaAmount})</p>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    className="w-full"
                    onClick={() => handlePaymentGateway()}
                  >
                    <button className="w-full h-10 bg-primeColor text-white hover:bg-gray-700 duration-300">
                      CONTINUAR COMPRA
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase hover:bg-red-700 duration-300"
          >
            Resetear
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Tu carrito se encuentra vacío.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Tu carrito de compras vive para servir, dale un propósito.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Ir al Catálogo
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
