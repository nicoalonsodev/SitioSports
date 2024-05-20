import axios from "axios";

export const fetchProductsFromBackend = async () => {
  try {
    const response = await axios.get("https://sitiosports-production.up.railway.app//products");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchUsersFromBackend = async () => {
  try {
    const response = await axios.get("https://sitiosports-production.up.railway.app//users");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchOrdersFromBackend = async () => {
  try {
    const response = await axios.get("https://sitiosports-production.up.railway.app//orders");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchCommissionsFromBackend = async () => {
  try {
    const response = await axios.get("https://sitiosports-production.up.railway.app//commissions");
    return response.data; 
  } catch (error) {
    throw error;
  }
};