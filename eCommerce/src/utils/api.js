import axios from "axios";

export const fetchProductsFromBackend = async () => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchUsersFromBackend = async () => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    return response.data; 
  } catch (error) {
    throw error;
  }
};