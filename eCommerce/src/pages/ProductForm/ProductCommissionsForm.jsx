import React, { useState } from "react";
import axios from "axios";
import UploadImage from "../../components/UploadImage/UploadImage";
import PostSizeBotines from "../../components/ProductForm/PostSizeBotines";
import PostSizeCamisetas from "../../components/ProductForm/PostSizeCamisetas";
import PostSizeMedias from "../../components/ProductForm/PostSizeMedias";
import Variant from "./Variant";
const ProductCommissionsForm = () => {
  // const [selectedSizes, setSelectedSizes] = useState([]);
  const [variants, setVariants] = useState([
    { variant: "", id: 1, sizes: [], imgUrl: [] },
  ]);
  const [form, setForm] = useState({
    productName: "",
    price: 0,
    stock: 0,
    brand: "",
    cat: "",
    sizes: [],
    variants: [{ variant: "", id: 1, sizes: [], imgUrl: [] }],
    color: "",
    image: "",
    description: "",
    sub_cat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cat") {
      // Limpiar el estado de sizes si cambia la categoría
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        sizes: [],
        variants: variants,
        sub_cat: "",
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSizes = (size, id) => {
    // Encuentra el índice del objeto en variants con el mismo id
    const variantFormIndex = form.variants.findIndex(
      (variant) => variant.id === id
    );
    const variantIndex = variants.findIndex((variant) => variant.id === id);

    // Si el índice es válido, actualiza el estado
    if (variantFormIndex !== -1) {
      setForm((prevForm) => {
        const updatedVariants = [...prevForm.variants];
        updatedVariants[variantFormIndex] = {
          ...updatedVariants[variantFormIndex],
          sizes: size,
        };

        return {
          ...prevForm,
          variants: updatedVariants,
        };
      });
    }
  };

  const handleCreateVariant = () => {
    // Genera un nuevo ID único para la nueva variante
    const newId =
      variants.length > 0 ? variants[variants.length - 1].id + 1 : 1;

    // Crea una nueva variante con el ID generado y el resto de los campos en blanco
    const newVariant = { variant: "new", id: newId, sizes: [], imgUrl: [] };

    // Actualiza el estado para agregar la nueva variante
    setVariants((prevVariants) => [...prevVariants, newVariant]);

    setForm((prevForm) => ({
      ...prevForm,
      variants: [...prevForm.variants, newVariant],
    }));
  };

  const handleDeleteVariant = (variantId) => {
    // Filtra las variantes para mantener solo aquellas cuyo ID no coincide con el ID dado
    const updatedVariants = variants.filter(
      (variant) => variant.id !== variantId
    );

    // Actualiza el estado con las variantes actualizadas
    setVariants(updatedVariants);
    // Filtra las variantes en form.variants para mantener solo aquellas cuyo ID no coincide con el ID dado
    const updatedFormVariants = form.variants.filter(
      (variant) => variant.id !== variantId
    );

    // Actualiza el estado de form con las variantes actualizadas
    setForm((prevForm) => ({
      ...prevForm,
      variants: updatedFormVariants,
    }));
  };

  const handleChangeVariantName = (variantId, newValue) => {
    // Actualiza el estado cambiando el valor del variant con el ID dado
    setForm((prevForm) => ({
      ...prevForm,
      variants: prevForm.variants.map((variant) =>
        variant.id === variantId ? { ...variant, variant: newValue } : variant
      ),
    }));

    setVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === variantId ? { ...variant, variant: newValue } : variant
      )
    );
  };
  
  const handleChangeVariantImg = (img, variantId) => {
    // Actualiza el estado cambiando el valor del variant con el ID dado
    setForm((prevForm) => ({
      ...prevForm,
      variants: prevForm.variants.map((variant) =>
        variant.id === variantId
          ? { ...variant, imgUrl: [...variant.imgUrl, img] } // Agrega la nueva imagen al array existente
          : variant
      ),
    }));

    setVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === variantId
          ? { ...variant, imgUrl: [...variant.imgUrl, img] } // Agrega la nueva imagen al array existente
          : variant
      )
    );
  };

  const handleDeleteImage = (index, variantId) => {

    
    // Actualizar el estado con las imágenes actualizadas
    setVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === variantId ? { ...variant, imgUrl: variant.imgUrl.filter((_, i) => i !== index) } : variant
      )
    );
  
    setForm((prevForm) => ({
      ...prevForm,
      variants: prevForm.variants.map((variant) =>
        variant.id === variantId ? { ...variant, imgUrl: variant.imgUrl.filter((_, i) => i !== index) } : variant
      )
    }));
  };

  // const handleSizes = (size) => {
  //   if (form.sizes.includes(size)) {
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       sizes: prevForm.sizes.filter((selectedSize) => selectedSize !== size),
  //     }));
  //   } else {
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       sizes: [...prevForm.sizes, size],
  //     }));
  //   }
  // };

  const handleUploadImage = (url) => {
    setForm((prevRegistro) => ({
      ...prevRegistro,
      image: url,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/commissions", form);

      // Verifica si la solicitud fue exitosa
      if (response.status === 200 || response.status === 201) {
        alert("Producto Agregado Exitosamente");
        setForm({
          productName: "",
          price: 0,
          brand: "",
          cat: "",
          color: "",
          image: "",
          description: "",
        });
        window.location.href = "http://localhost:3000/commissionstable";
      } else {
        console.error("Error al agregar el producto.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
  console.log();
  // const handleSizes = (size) => {
  //   if (selectedSizes.includes(size)) {
  //     setSelectedSizes(selectedSizes.filter((selectedSize) => selectedSize !== size));
  //   } else {
  //     setSelectedSizes([...selectedSizes, size]);
  // }}
  return (
    <form class="px-4 md:px-8 max-w-3xl mx-auto py-12" onSubmit={handleSubmit}>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Nuevo Producto Por Encargo
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Esta información va a ser publica, porfavor revisar bien las
            casillas antes de publicar.
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="productName"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Titulo del producto
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    onChange={handleChange}
                    value={form.productName}
                    autocomplete="productName"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nike Ultimate"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="price"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Precio
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={form.price}
                    onChange={handleChange}
                    autocomplete="price"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="brand"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Marca
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    onChange={handleChange}
                    value={form.brand}
                    autocomplete="brand"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nike Ultimate"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="cat"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Categoría
              </label>
              <div class="mt-2">
                <select
                  id="cat"
                  name="cat"
                  autocomplete="categoria"
                  onChange={handleChange}
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected hidden>
                    Selecciona una opción
                  </option>
                  <option>Camisetas</option>
                  <option>Botines</option>
                  <option>Medias</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="sub_cat"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Subcategoria
              </label>
              <div className="mt-2">
                {form.cat === "Botines" ? (
                  <select
                    id="sub_cat"
                    name="sub_cat"
                    value={form.sub_cat}
                    autoComplete="categoria"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled selected>
                      Selecciona una opción
                    </option>
                    <option>Futbol 5</option>
                    <option>Futbol 11</option>
                  </select>
                ) : form.cat === "Camisetas" ? (
                  <select
                    id="sub_cat"
                    name="sub_cat"
                    value={form.sub_cat}
                    autoComplete="categoria"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled selected>
                      Selecciona una opción
                    </option>
                    <option>24/25</option>
                    <option>Retro</option>
                  </select>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div>
              <div
                className="border-[1px] border-gray-200 bg-gray-100 shadow-md cursor-pointer opacity-60 hover:opacity-100"
                onClick={handleCreateVariant}
              >
                + Agregar Variante
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:col-span-6">
              {variants?.map((vari, index) => (
                <div key={index}>
                  <Variant handleChangeVariantImg={handleChangeVariantImg} handleDeleteImage={handleDeleteImage} handleChangeVariantName={handleChangeVariantName} handleDeleteVariant={handleDeleteVariant} cat={form.cat} vari={vari} handleSizes={handleSizes} variants={form.variants} /> 
                </div>
              ))}
    
            </div>


            <div class="sm:col-span-6">
              <label
                for="image"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                image
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="image"
                    id="image"
                    onChange={handleChange}
                    value={form.image}
                    autocomplete="image"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nike Ultimate"
                  />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Descripción
              </label>
              <div class="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                Descripción sobre el producto.
              </p>
            </div>

            <UploadImage handleUploadImage={handleUploadImage} />
          </div>
        </div>
      
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <a
          href="/producttable"
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </a>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductCommissionsForm;
