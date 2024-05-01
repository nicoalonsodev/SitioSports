import React, { useState } from "react";
import axios from "axios";
import UploadImage from "../../components/UploadImage/UploadImage";
import SizesForm from "./SizesFormBotines";
import SizesFormCamisetas from "./SizesFormCamisetas";
import SizesFormMedias from "./SizesFormMedias";

const ProductForm = () => {
  // const [selectedSizes, setSelectedSizes] = useState([]);
  const [form, setForm] = useState({
    productName: "",
    price: 0,
    stock: "",
    brand: "",
    cat: "",
    sizes: [],
    color: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cat") {
      // Limpiar el estado de sizes si cambia la categoría
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        sizes: [], // Limpiar a un array vacío
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSizes = (size) => {
    if (form.sizes.includes(size)) {
      setForm((prevForm) => ({
        ...prevForm,
        sizes: prevForm.sizes.filter((selectedSize) => selectedSize !== size),
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        sizes: [...prevForm.sizes, size],
      }));
    }
  };

  const handleUploadImage = (url) => {
    setForm((prevRegistro) => ({
      ...prevRegistro,
      image: url,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/products", form);

      // Verifica si la solicitud fue exitosa
      if (response.status === 200 || response.status === 201) {
        alert("Producto Agregado Exitosamente");
        setForm({
          productName: "",
          price: 0,
          stock: "",
          brand: "",
          cat: "",
          color: "",
          image: "",
          description: "",
        });
        window.location.href = "http://localhost:3000/producttable";
      } else {
        console.error("Error al agregar el producto.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

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
            Nuevo Producto
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
                for="stock"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Stock
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="stock"
                    id="stock"
                    onChange={handleChange}
                    value={form.stock}
                    autocomplete="stock"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nike Ultimate"
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
                  value={form.cat}
                  onChange={handleChange}
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
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
      autoComplete="categoria"
      value={form.sub_cat}
      onChange={handleChange}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>Futbol 5</option>
      <option>Futbol 11</option>
    </select>
  ) : form.cat === "Camisetas" ? (
    <select
      id="sub_cat"
      name="sub_cat"
      autoComplete="categoria"
      value={form.sub_cat}
      onChange={handleChange}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>24/25</option>
      <option>Retro</option>
    </select>
  ) :  (
   
    ""
  )}
</div>
            </div>

            <div className="col-span-4">
              {form.cat === "Botines" ? (
                <SizesForm
                  handleSizes={handleSizes}
                  selectedSizes={form.sizes}
                />
              ) : (
                ""
              )}
              {form.cat === "Camisetas" ? (
                <SizesFormCamisetas
                  handleSizes={handleSizes}
                  selectedSizes={form.sizes}
                />
              ) : (
                ""
              )}
              {form.cat === "Medias" ? (
                <SizesFormMedias
                  handleSizes={handleSizes}
                  selectedSizes={form.sizes}
                />
              ) : (
                ""
              )}
            </div>

            {/* <div class="sm:col-span-4">
              <label
                for="cat"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Categoría
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
            {/* <input
                    type="text"
                    name="cat"
                    id="cat"
                    onChange={handleChange}
                    value={form.cat}
                    autocomplete="cat"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nike Ultimate"
                  />
                </div>
              </div>
            </div> */}

            <div class="sm:col-span-4">
              <label
                for="color"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Color
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="color"
                    id="color"
                    onChange={handleChange}
                    value={form.color}
                    autocomplete="color"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nike Ultimate"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
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
            {/* 
        <div class="col-span-full">
          <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
          <div class="mt-2 flex items-center gap-x-3">
            <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd" />
            </svg>
            <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
          </div>
        </div> */}
            <UploadImage handleUploadImage={handleUploadImage} />
          </div>
        </div>
        {/* Info Personal */}
        {/* <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

        {/* <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

        {/* <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

        {/* <div class="sm:col-span-2">
              <label
                for="region"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Notificaciones */}
        {/* <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">
                By Email
              </legend>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900">
                      Comments
                    </label>
                    <p class="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="candidates" class="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p class="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="offers" class="font-medium text-gray-900">
                      Offers
                    </label>
                    <p class="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </legend>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
              <div class="mt-6 space-y-6">
                <div class="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    for="push-everything"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Everything
                  </label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    for="push-email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Same as email
                  </label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    for="push-nothing"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
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

export default ProductForm;
