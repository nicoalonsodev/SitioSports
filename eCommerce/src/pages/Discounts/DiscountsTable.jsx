import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDiscountsFromBackend } from "../../utils/api";
import { setBackendDiscounts } from "../../redux/orebiSlice";
import DiscountsForm from "./DiscountsForm";
import { logoTransparent } from "../../assets/images";

const DiscountsTable = () => {
  const dispatch = useDispatch();

  // Cargar los descuentos al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const discounts = await fetchDiscountsFromBackend();
        dispatch(setBackendDiscounts(discounts)); // Guardar los descuentos en el estado
      } catch (error) {
        console.error("Error fetching discounts:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Obtener los descuentos del store
  const discounts = useSelector(
    (state) => state.orebiReducer.discounts.discounts
  );

  return (
    <div className="flex flex-wrap justify-center items-start min-h-screen py-14">
      <div>
        <div className="flex justify-start space-x-6 items-center ">
          <a href="/admin">
            <img className="w-20" src={logoTransparent} alt="" />
          </a>
          <h1 className="text-3xl font-bold text-gray-700">
            Cupones de Descuento
          </h1>
        </div>
      </div>
      <div className="w-full p-4">
        <table className="min-w-full bg-white border border-gray-200 mx-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">Código</th>
              <th className="py-2 px-4 border-b text-center">Descripción</th>
              <th className="py-2 px-4 border-b text-center">Porcentaje</th>
              <th className="py-2 px-4 border-b text-center">
                Fecha de Creación
              </th>
            </tr>
          </thead>
          <tbody>
            {discounts && discounts.length > 0 ? (
              discounts.map((discount) => (
                <tr key={discount.id}>
                  <td className="py-2 px-4 border-b text-center">
                    {discount.code}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {discount.description || "Sin descripción"}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {discount.percentage}%
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {new Date(discount.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No se encontraron cupones de descuento.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <DiscountsForm />
    </div>
  );
};

export default DiscountsTable;
