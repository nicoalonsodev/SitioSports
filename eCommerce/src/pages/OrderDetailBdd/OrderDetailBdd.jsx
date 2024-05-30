import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoTransparent } from "../../assets/images";
import axios from "axios";
const OrderDetailBdd = () => {
  const [isChanging, setIsChanging] = useState(false);
  const { id } = useParams();
  const [order, setOrder] = useState("");
  const [prevOrder, setPrevOrder] = useState("");
  const orders = useSelector((state) => state.orebiReducer.orders);
  const [changes, setChanges] = useState({});
  const [laoding, setLoading] = useState(false);
  useEffect(() => {
    if (orders) {
      const foundOrder = orders.find((order) => order.id === id);
      if (foundOrder) {
        setOrder(foundOrder);
        setPrevOrder(foundOrder);
        setChanges((prevChanges) => ({
          ...prevChanges,
          items: foundOrder.items,
        }));
      }
    }
  }, [orders]);

  const handleSaveChanges = () => {
    if (changes.status === "Enviado" && !changes.track_id) {
      alert(
        "Debes ingresar el código de seguimiento asi el cliente puede rastrear su pedido"
      );
    } else {
      setLoading(true);
      axios
        .put(`http://localhost:3001/order/${order.id}`, changes)
        .then((response) => {
          // Maneja la respuesta de la solicitud, por ejemplo, muestra una notificación de éxito
          alert("Cambios guardados con éxito");
          setIsChanging(false);
          setChanges({
            items: order.items,
          });
          setLoading(false);
        })
        .catch((error) => {
          // Maneja errores, muestra una notificación de error, etc.
          console.error("Error al guardar los cambios", error);
          setIsChanging(false);
          setChanges({
            items: order.items,
          });
          setLoading(false);
        });
    }
  };

  const handleChanging = () => {
    setIsChanging(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    setChanges((prevChanges) => ({
      ...prevChanges,
      [name]: value,
    }));
  };

  const handleReturn = () => {
    setOrder(prevOrder);
    setIsChanging(!isChanging);
  };
  return (
    <>
      <div className="px-32 py-10">
        <div className="w-full flex justify-between">
          <a href="/orderstable">
            <img className="w-20" src={logoTransparent} alt="" />
          </a>
          <div>
            {isChanging ? (
              <button
                className="text-2xl mr-3 bg-blue-500 px-3 py-1 rounded-lg text-gray-200"
                onClick={handleReturn}
              >
                X
              </button>
            ) : (
              ""
            )}
            <button
              onClick={!isChanging ? handleChanging : handleSaveChanges}
              className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
            >
              {!isChanging
                ? "Realizar Cambios"
                : laoding
                ? "cargando..."
                : "Guardar"}
            </button>
          </div>
        </div>
        {order ? (
          <div className="flex justify-center gap-32 mx-20 border-[1px] shadow-md border-gray-500 rounded-lg p-4">
            <div className="flex flex-col gap-4 justify-center ">
              <div>
                <h1 className="font-bold text-[#fc148c]">
                  Orden #{order.order_number}
                </h1>
              </div>
              <div className="flex flex-col justify-start text-md">
                <h1 className="font-semibold text-lg">Cliente</h1>
                <p>{order.name ? order.name : ""}</p>
                <p>3 Productos</p>
              </div>
              <div>
                Estado:
                {isChanging ? (
                  <div className="flex flex-col">
                    <select
                      name="status"
                      value={order.status}
                      onChange={handleChange}
                    >
                      <option value="Cancelado">Cancelado</option>
                      <option value="Pago pendiente">Pago pendiente</option>
                      <option value="Aprobado">Aprobado</option>
                      <option value="Enviado">Enviado</option>
                    </select>
                    {order.status === "Enviado" ? (
                      <div>
                        <label htmlFor="">Código de Seguimiento</label>
                        <input
                          type="text"
                          name="track_id"
                          id="track_id"
                          onChange={handleChange}
                          value={order.track_id}
                          autocomplete="track_id"
                          className="border-[1px] border-gray-700"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <p>{order.status}</p>
                )}
                {order.track_id !== "" && !isChanging ? (
                  <p>Código de Seguimiento: {order.track_id}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col justify-start text-md">
                <h1 className="font-semibold text-lg">
                  Informacion de Contacto{" "}
                </h1>
                <p>{order.email}</p>
                <p>{order.phone}</p>
                <p>Id: {order.client_id}</p>
              </div>
              <div className="flex flex-col justify-start text-md">
                <h1 className="font-semibold text-lg"> Dirección de Envío </h1>
                <p>{order.name}</p>
                <p>
                  {order.shipment.street_name} {order.shipment.street_number}{" "}
                  {order.shipment.floor}
                </p>
                <p>
                  {order.shipment.city_name}, {order.shipment.state_name}
                </p>
                <p>{order.shipment.zipCode}, AR</p>
                <p>{order.shipment.apartment}</p>
              </div>
            </div>
            <div className="w-1/2 space-y-2">
              <div className="w-2/3 h-auto border-[1px] border-gray-500 rounded-lg space-y-4 p-4 flex flex-wrap justify-center items-center">
                {order.items?.map((item) => (
                  <div className="w-full flex justify-between ">
                    <div className="w-20 ">
                      <img className="w-full" src={item.variant.imgUrl[0]} />
                    </div>
                    <div className="w-auto text-gray-800">
                      <p>
                        {item.name}
                        <span>
                          ({item.description}) x{item.quantity}
                        </span>
                      </p>
                      <p className="text-[#fc148c]">${item.price} c/u</p>
                    </div>
                  </div>
                ))}
              </div>
              {isChanging ? (
                <div>
                  <label htmlFor="admin_comment">Comentarios: </label>
                  <textarea
                    name="admin_comment"
                    id="admin_comment"
                    onChange={handleChange}
                    value={order.admin_comment}
                    autoComplete="admin_comment"
                    className="border-[1px] border-gray-400 rounded-lg p-1"
                    rows="4" 
                    cols="50" 
                  />
                </div>
              ) : order.admin_comment ? (
                <div>
                  <h1>Comentarios:</h1>
                  <p>{order.admin_comment}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OrderDetailBdd;
