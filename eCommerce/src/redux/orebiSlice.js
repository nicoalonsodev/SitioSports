import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
  products: [],
  commissions: [],
  cartProducts: [],
  checkedBrands: [],
  checkedSizes: [],
  checkedSubcategorys: [],
  checkedCategorys: [],
  users: [],
  orders: [],
};
export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartProducts.find(
        (item) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartProducts.push(action.payload);
      }
      // Dispatch a success toast
      toast.success("Product added to cart");
    },
    increaseQuantity: (state, action) => {
      const item = state.cartProducts.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
        // Dispatch a success toast
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.cartProducts.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) =>
          item._id !== action.payload._id || item.size !== action.payload.size
      );
      // Dispatch a success toast
      toast.error("Product removed from cart");
    },
    resetCart: (state) => {
      state.cartProducts = [];
      // Dispatch a success toast
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      const isBrandChecked = state.checkedBrands.some(
        (b) => b._id === brand._id
      );

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b._id !== brand._id
        );
      } else {
        state.checkedBrands.push(brand);
      }
    },

    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b._id === category._id
      );

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b._id !== category._id
        );
      } else {
        state.checkedCategorys.push(category);
      }
    },

    toggleSubcategory: (state, action) => {
      const subcategory = action.payload;
      const isSubcategoryChecked = state.checkedSubcategorys.some(
        (b) => b._id === subcategory._id
      );

      if (isSubcategoryChecked) {
        state.checkedSubcategorys = state.checkedSubcategorys.filter(
          (b) => b._id !== subcategory._id
        );
      } else {
        state.checkedSubcategorys.push(subcategory);
      }
    },

    toggleSizes: (state, action) => {
      const size = action.payload;
      const isSizeChecked = state.checkedSizes.some((b) => b._id === size._id);

      if (isSizeChecked) {
        state.checkedSizes = state.checkedSizes.filter(
          (b) => b._id !== size._id
        );
      } else {
        state.checkedSizes.push(size);
      }
    },
    cleanFilters: (state, action) => {
      state.checkedBrands = [];
      state.checkedSizes = [];
      state.checkedSubcategorys = [];
      state.checkedCategorys = [];
    },
    cleanCategories: (state, action) => {
      state.checkedCategorys = [];
    },
    cleanSubcategories: (state, action) => {
      state.checkedSubcategorys = [];
    },
    cleanSizes: (state, action) => {
      state.checkedSizes = [];
    },
    setBackendProducts: (state, action) => {
      state.products = action.payload;
    },
    setBackendCommissions: (state, action) => {
      state.commissions = action.payload;
    },
    setBackendUsers: (state, action) => {
      const usersObject = action.payload;
      const count = usersObject.users?.length;
      state.users = { users: usersObject.users, count: count };
    },
    setBackendOrders: (state, action) => {
      state.orders = action.payload.orders.sort((a, b) => a.order_number - b.order_number);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
  setBackendProducts,
  setBackendUsers,
  toggleSizes,
  toggleSubcategory,
  cleanFilters,
  setBackendOrders,
  setBackendCommissions,
  cleanCategories,
  cleanSizes,
  cleanSubcategories,
} = orebiSlice.actions;
export default orebiSlice.reducer;
