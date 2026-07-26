import axios from "axios";

const API =
  "http://localhost:8000/api/products";

export const getProducts =
  async () => {
    const response =
      await axios.get(API);

    return response.data;
  };
export const getSingleProduct =
  async (id) => {
    const response =
      await axios.get(
        `${API}/${id}`
      );

    return response.data;
  };

// Add Product
export const addProduct =
  async (productData) => {
    const response =
      await axios.post(
        `${API}/add`,
        productData
      );

    return response.data;
  };

// Update Product
export const updateProduct =
  async (
    id,
    productData
  ) => {
    const response =
      await axios.put(
        `${API}/${id}`,
        productData
      );

    return response.data;
  };

export const deleteProduct =
  async (id) => {
    const response =
      await axios.delete(
        `${API}/${id}`
      );

    return response.data;
  };