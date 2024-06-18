import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getItems = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};

export const createItem = async (formData) => {
  const response = await axios.post(`${API_URL}/items`, formData);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await axios.delete(`${API_URL}/items/${id}`);
  return response.data;
};


