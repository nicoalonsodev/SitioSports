import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AddressForm from "../../components/PayerForm/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/PayerForm/ContactForm";
import { tarjetas, otherPaymentMethods } from "../../constants";
const Payment = (props) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.orebiReducer.cartProducts);
  const [resume, setResume] = useState(false);
  const [email, setEmail] = useState("");
  const [contactReady, setContactReady] = useState(false);
  const [addressReady, setAddressReady] = useState(false);
  const [readyToPay, setReadyToPay] = useState(false);
  const [productInfo, setProductInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shipping, setShippihng] = useState("");
  const [shippmentCharge, setShippmentCharge] = useState(0);
  const [shipmentPlusTotal, setShipmentPlusTotal] = useState(0);
  const [totalAmt, setTotalAmt] = useState("");
  const location = useLocation();
  const [order, setOrder] = useState({
    productInfo: "",
    payerInfo: "",
  });

  useEffect(() => {
    setProductInfo(location.state.item);
    setResume(true);
  }, [location]);

  useEffect(() => {
    let price = 0;
    if (productInfo !== "") {
      productInfo?.map((item) => {
        price += item.price * item.quantity;
        return price;
      });
      setTotalAmt(price);
    }
  }, [productInfo]);

  useEffect(() => {
    //aca probamos con un valor corto
    if (totalAmt !== "" && totalAmt > 130) {
      setShippmentCharge(0);
      setShipmentPlusTotal(totalAmt);
    } else {
      setShippmentCharge(20);
      setShipmentPlusTotal(totalAmt + shippmentCharge);
    }
  }, [totalAmt]);

  const handlePay = async () => {
    if (paymentMethod === "mp") {
      try {
        const response = await axios.post(
          "http://localhost:3001/create-order",
          order
        );
        const preferenceId = response.data.id;
        const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
        window.open(redirectUrl, "_blank");
      } catch (error) {
        // Manejar errores si la solicitud falla
        console.error("Error creating order:", error);
      }
    } else {
      try {
        const postOrder = {
          items: productInfo,
          name: order.payerInfo.payerName,
          email: order.payerInfo.email,
          phone: order.payerInfo.phone,
          shipment: {
            zipCode: order.payerInfo.zipCode,
            state_name: order.payerInfo.state,
            city_name: order.payerInfo.city,
            street_name: order.payerInfo.street,
            street_number: order.payerInfo.streetNumber,
            floor: order.payerInfo.floor,
            aclaration: order.payerInfo.aclaration,
          },
          order_type: "Trasferencia Bancaria",
          status: "Pago Pendiente",
          status_detail: "Cliente debe realizar la transferencia",
          transaction_amount: totalAmt,
          shipping_amount: shipmentPlusTotal,
          transaction_details: {
            net_received_amount: totalAmt,
            total_paid_amount: shipmentPlusTotal,
          },
        };
        const responsePost = await axios.post(
          "http://localhost:3001/order",
          postOrder
        );
        console.log(responsePost.data);
        // navigate("/order-wire-transfer");
      } catch (error) {
        console.error("Error creating order:", error);
      }
    }
  };

  const handleSubmitContact = (email) => {
    setEmail(email);
    setContactReady(true);
  };
  const handleAddress = (addressForm) => {
    setOrder({
      productInfo: productInfo,
      payerInfo: addressForm,
    });
    setAddressReady(true);
  };

  const handleEditMail = () => {
    setAddressReady(false);
  };

  // const subtotal = productInfo.price * productInfo.quantity

  return (
    <div className="flex flex-wrap w-screen justify-start items-start px-32 pb-20 relative">
      <div className="w-2/3 justify-between space-y-6">
        <div className="w-full flex flex-wrap justify-start ">
          <div className="w-1/3">
            <p className="font-bold text-2xl text-left">Tu Contacto</p>
            <div className="w-full">
              {!readyToPay ? (
                <ContactForm handleSubmitContact={handleSubmitContact} />
              ) : (
                <div className="w-1/2  p-3">
                  <p className="font-bold">
                    <span className="font-normal">{email}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="h-auto w-auto text-black ">
            {readyToPay ? (
              <button
                onClick={handleEditMail}
                className="p-2 border-[1px] border-gray-300 rounded-sm hover:bg-gray-700 hover:text-gray-200"
              >
                Editar
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="w-full flex justify-start ">
          <div className="w-3/5">
            <hr className="border-[1.5px] border-[#e279c84d]" />
          </div>
        </div>
        <div className="w-full">
          <p className="font-bold text-2xl pb-3">Tu Dirección</p>
          <div className="">
            {!addressReady && contactReady ? (
              <AddressForm handleAddress={handleAddress} email={email} />
            ) : (
              ""
            )}
            {addressReady ? (
              <div className="py-4 text-gray-600">
                <h1 className="text-gray-800 font-bold">Dirección de envío</h1>
                <p>{order.payerInfo.payerName}</p>
                <p>{order.payerInfo.phone}</p>
                <p>{order.payerInfo.zipCode}, AR</p>
                <p>{order.payerInfo.state}</p>
                <p>{order.payerInfo.city}</p>
                <p>{order.payerInfo.street}</p>
                <p>{order.payerInfo.streetNumber}</p>
                <p>{order.payerInfo.floor}</p>
                <p>{order.payerInfo.aclaration}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="w-full flex justify-start ">
          <div className="w-3/5">
            <hr className="border-[1.5px] border-[#e279c84d]" />
          </div>
        </div>

        <div className="w-full space-y-4">
          <p className="font-bold text-2xl ">Opciones de Entrega</p>
          {order.payerInfo ? (
            <>
              <div
                className={`${
                  shipping === "estandar"
                    ? "border-[3px] border-[#e46dc7] shadow-sm"
                    : "border-[1px] border-gray-700"
                } w-3/5 flex justify-between p-4 cursor-pointer hover:bg-gray-50`}
                onClick={() => setShippihng("estandar")}
              >
                <div className="">
                  <div className="h-auto">
                    <h1 className="text-lg font-bold">Entrega Estándar </h1>
                    <h1 className="text-lg text-gray-600">
                      Retirar en punto de entrega
                    </h1>
                  </div>
                </div>
                <div>Gratis</div>
              </div>
              <div
                className={`${
                  shipping === "esp"
                    ? "border-[3px] border-[#e46dc7] shadow-sm"
                    : "border-[1px] border-gray-700"
                } w-3/5 flex justify-between p-4 cursor-pointer hover:bg-gray-50`}
                onClick={() => setShippihng("esp")}
              >
                <div className="">
                  <div className="h-auto">
                    <h1 className="text-lg font-bold">Envío a Domicilio</h1>
                    <h1 className="text-lg text-gray-600">
                      Catamarca 1600 - Yerba Buena
                    </h1>
                  </div>
                </div>
                <div>$2.350</div>
              </div>
            </>
          ) : (
            ""
          )}
          {shipping ? (
            <div className="">
              <button
                className="w-auto h-10 px-4 uppercase bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
                onClick={() => setReadyToPay(true)}
              >
                Continuar
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex justify-start ">
          <div className="w-3/5">
            <hr className="border-[1.5px] border-[#e279c84d]" />
          </div>
        </div>

        <div className="w-full space-y-4">
          <p className="font-bold text-2xl ">Medio de Pago</p>
          {readyToPay ? (
            <>
              <div
                className={`${
                  paymentMethod === "tb"
                    ? "border-[3px] border-[#e46dc7] shadow-sm"
                    : "border-[1px] border-gray-700"
                } w-3/5 flex flex-wrap  p-4 cursor-pointer hover:bg-gray-50`}
                onClick={() => setPaymentMethod("tb")}
              >
                <div className="w-full flex justify-between">
                  <div className="">
                    <div className="h-8">
                      <h1 className="text-lg">Transferencia Bancaria</h1>
                    </div>
                  </div>
                  <div className="font-semibold">15% de descuento</div>
                </div>
                {paymentMethod === "tb" ? (
                  <div className="py-3 text-center text-md text-gray-500">
                    Cuando termines la compra, vas a ver la información de pago.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div
                className={`${
                  paymentMethod === "mp"
                    ? "border-[3px] border-[#e46dc7] shadow-sm"
                    : "border-[1px] border-gray-700"
                } w-3/5 flex flex-wrap p-4 cursor-pointer hover:bg-gray-50`}
                onClick={() => setPaymentMethod("mp")}
              >
                <div className="w-full flex justify-between">
                  <div className="">
                    <div className="h-8">
                      <img
                        className="h-8 w-auto"
                        src="https://www.mercadopago.com/v1/platforms/tienda-nube/assets/logos/logo-mp-400x120.png"
                      />
                    </div>
                  </div>
                  <div>3 cuotas sin interes</div>
                </div>
                {paymentMethod === "mp" ? (
                  <div className="flex flex-wrap py-3 gap-2">
                    {tarjetas?.map((tarjeta) => (
                      <img className="w-14" src={tarjeta} />
                    ))}
                    {otherPaymentMethods?.map((payment) => (
                      <img src={payment} className="w-14" />
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            ""
          )}
          <div className="">
            {readyToPay ? (
              <button
                className={`w-auto h-10 px-4 uppercase bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300 ${
                  !paymentMethod ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={paymentMethod ? handlePay : null}
                disabled={!paymentMethod}
              >
                {paymentMethod === "mp"
                  ? "Pagar a través de Mercado Pago"
                  : paymentMethod === "tb"
                  ? "Realizar pedido"
                  : "Seleccione una forma de pago"}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="w-1/3 border-2 border-gray-300 p-4  gap-4 flex">
        <div className="sticky top-0 border-gray-700 w-full flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-left">
            Resumen Del Pedido
          </h1>
          <div className="w-full gap-y-4">
            {products?.map((product) => (
              <div className="flex justify-between gap-6">
                <div className="w-20 ">
                  <img className="w-full" src={product.image} />
                </div>
                <div className="w-full text-gray-800">
                  <p>
                    {product.name} {product.variant.variant}
                    <span>
                      ({product.size}) x{product.quantity}
                    </span>
                  </p>
                  <p>${product.price} c/u</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="flex items-center justify-between border-b-0 py-1.5 text-lg font-medium">
              Subtotal
              <span className="font-semibold tracking-wide font-titleFont">
                ${totalAmt}
              </span>
            </p>
            <p className="flex items-center justify-between py-1.5 text-lg font-medium">
              Envio
              <span className="font-semibold tracking-wide font-titleFont">
                {shipping === "estandar" ? "Gratis" : `$${shippmentCharge}`}
              </span>
            </p>
            <p className="flex items-center justify-between  py-1.5 text-lg font-medium">
              Total
              <span className="font-bold tracking-wide text-lg font-titleFont">
                ${shipmentPlusTotal}
              </span>
            </p>
            <p className="">(IVA incluido)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
