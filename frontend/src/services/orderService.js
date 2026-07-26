import axios from "axios";

const API =
  "http://localhost:8000/api/orders";

export const createOrder =
  async (orderData) => {
    const response =
      await axios.post(
        API,
        orderData
      );

    return response.data;
  };

export const getOrders =
  async () => {
    const response =
      await axios.get(API);

    return response.data;
  };

export const updateOrderStatus =
  async (id, status) => {
    const response =
      await axios.put(
        `${API}/${id}`,
        { status }
      );

    return response.data;
  };
export const getDashboardStats =
  async () => {

    const response =
      await axios.get(
        `${API}/dashboard/stats`
      );

    return response.data;
  };