import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { getOrders, updateOrderStatus } from "../../services/orderService";

import { toast } from "react-toastify";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getOrders();

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await updateOrderStatus(id, status);

      if (response.success) {
        toast.success("Order Status Updated");

        loadOrders();
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed To Update Status");
    }
  };

  return (
    <>
      <Navbar />

      <section className="admin-page">
        <div className="container">
          <h1 className="mb-4">Manage Orders</h1>

          <div className="table-responsive">
            <table
              className="
              table
              table-bordered
              table-hover
              "
            >
              <thead
                className="
                table-dark
                "
              >
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>

                    <td>{order.customer_name}</td>

                    <td>{order.phone}</td>

                    <td>{order.city}</td>

                    <td>₹{order.total_amount}</td>

                    <td>
                      <select
                        className="
                          form-select
                          "
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>

                        <option value="Processing">Processing</option>

                        <option value="Shipped">Shipped</option>

                        <option value="Delivered">Delivered</option>

                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AdminOrders;
