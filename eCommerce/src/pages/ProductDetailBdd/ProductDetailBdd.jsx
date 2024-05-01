import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoTransparent } from "../../assets/images";
import axios from "axios";
import SizesForm from "../ProductForm/SizesFormBotines";
import SizesFormCamisetas from "../ProductForm/SizesFormCamisetas";
import SizesFormMedias from "../ProductForm/SizesFormMedias";
const ProductDetailBdd = () => {
  const [isChanging, setIsChanging] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [prevProduct, setPrevProduct] = useState("");
  const products = useSelector((state) => state.orebiReducer.products);

  useEffect(() => {
    if (products) {
      const foundProduct = products.find((product) => product.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setPrevProduct(foundProduct);
      }
    }
  }, [products]);

  const handleSaveChanges = () => {
    const productChanges = {
      productName: product.productName,
      price: product.price,
      stock: product.stock,
      cat: product.cat,
      sub_cat: product.sub_cat,
      sizes: product.sizes,
      brand: product.brand,
    };
    axios
      .put(`http://localhost:3001/products/${product.id}`, productChanges)
      .then((response) => {
        // Maneja la respuesta de la solicitud, por ejemplo, muestra una notificación de éxito
        alert("Cambios guardados con éxito");
        setIsChanging(false);
      })
      .catch((error) => {
        // Maneja errores, muestra una notificación de error, etc.
        console.error("Error al guardar los cambios", error);
        setIsChanging(false);
      });
  };

  const handleChanging = () => {
    setIsChanging(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    // validate({ ...registro, [name]: value });
  };

  const handleSizes = (size) => {
    if (product.sizes.includes(size)) {
      setProduct((prevForm) => ({
        ...prevForm,
        sizes: prevForm.sizes.filter((selectedSize) => selectedSize !== size),
      }));
    } else {
      setProduct((prevForm) => ({
        ...prevForm,
        sizes: [...prevForm.sizes, size],
      }));
    }
  };
  const handleReturn = () => {
    setProduct(prevProduct)
    setIsChanging(!isChanging)
  }
  return (
    <>
      <div className="px-32 py-10">
        <div className="w-full flex justify-between">
          <a href="/producttable">
            <img className="w-20" src={logoTransparent} alt="" />
          </a>
          <div>
            {isChanging ? <button className="text-2xl" onClick={handleReturn}>X</button> : ""}
            <button
              onClick={!isChanging ? handleChanging : handleSaveChanges}
              className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
            >
              {!isChanging ? "Realizar Cambios" : "Guardar"}
            </button>
          </div>
        </div>
        {product ? (
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center gap-2 text-xl">
              <h1>Nombre de Producto: </h1>
              {isChanging ? (
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  onChange={handleChange}
                  value={product.productName}
                  autocomplete="productName"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nike Ultimate"
                />
              ) : (
                <p>{product.productName}</p>
              )}
            </div>
            <div className="flex justify-center gap-2 text-xl">
              <h1>Precio: </h1>
              {isChanging ? (
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={product.price}
                  onChange={handleChange}
                  autocomplete="price"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              ) : (
                <p>{product.price}</p>
              )}
            </div>
            <div className="flex justify-center gap-2 text-xl">
              <h1>Stock: </h1>
              {isChanging ? (
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  onChange={handleChange}
                  value={product.stock}
                  autocomplete="stock"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nike Ultimate"
                />
              ) : (
                <p>{product.stock}</p>
              )}
            </div>
            <div className="flex justify-center gap-2 text-xl">
              <h1>Categoria: </h1>
              {isChanging ? (
                <input
                  type="text"
                  name="cat"
                  id="cat"
                  onChange={handleChange}
                  value={product.cat}
                  autocomplete="cat"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nike Ultimate"
                />
              ) : (
                <p>{product.cat}</p>
              )}
            </div>
            <div className="flex justify-center gap-2 text-xl">
              <h1>Subcategoria: </h1>
              {isChanging ? (
                <input
                  type="text"
                  name="sub_cat"
                  id="sub_cat"
                  onChange={handleChange}
                  value={product.sub_cat}
                  autocomplete="sub_cat"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nike Ultimate"
                />
              ) : (
                <p>{product.sub_cat}</p>
              )}
            </div>
            <div>
              {product.cat === "Botines" ? (
                <SizesForm
                  handleSizes={isChanging ? handleSizes : ""}
                  selectedSizes={product.sizes}
                />
              ) : (
                ""
              )}
              {product.cat === "Camisetas" ? (
                <SizesFormCamisetas
                  handleSizes={isChanging ? handleSizes : ""}
                  selectedSizes={product.sizes}
                />
              ) : (
                ""
              )}
              {product.cat === "Medias" ? (
                <SizesFormMedias
                  handleSizes={isChanging ? handleSizes : ""}
                  selectedSizes={product.sizes}
                />
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-center gap-2 text-xl">
              <h1>Marca: </h1>
              {isChanging ? (
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  onChange={handleChange}
                  value={product.brand}
                  autocomplete="brand"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nike Ultimate"
                />
              ) : (
                <p>{product.brand}</p>
              )}
            </div>
            <div className="flex justify-center">
              <img src={product.image} alt="" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProductDetailBdd;
