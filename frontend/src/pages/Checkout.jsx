import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useAddress } from "../context/AddressContext";
import { createOrder } from "../services/orderService";

function Checkout() {
  const { address } = useAddress();

  const { cartItems, clearCart } = useCart();

  const { addOrder } = useOrders();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(address);

  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0 && !orderPlaced) {
      toast.error("Cart is Empty");

      navigate("/cart");
    }
  }, [cartItems, navigate, orderPlaced]);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      parseInt(item.price.replace("₹", "").replaceAll(",", "")) * item.quantity,
    0,
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total: totalPrice,
      shipping: formData,
      status: "Placed",
    };

    try {
      const response = await createOrder({
        customer_name: formData.name,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        total_amount: totalPrice,
      });

      if (response.success) {
        setOrderPlaced(true);

        addOrder(newOrder);

        clearCart();

        toast.success("Order Placed Successfully");

        setTimeout(() => {
          navigate("/order-success");
        }, 1500);
      }
    } catch (error) {
      console.log(error);

      alert(error?.response?.data?.message || error?.message || "Order Failed");

      toast.error("Order Failed");
    }
  };

  return (
    <>
      <Navbar />

      <section className="checkout-page py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="checkout-card p-4 shadow rounded bg-white">
                <h3 className="mb-4">Shipping Address</h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-control mb-3"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-control mb-3"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <textarea
                  name="address"
                  placeholder="Address"
                  rows="4"
                  className="form-control mb-3"
                  value={formData.address}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="form-control mb-3"
                  value={formData.city}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  className="form-control"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="checkout-card p-4 shadow rounded bg-white">
                <h3 className="mb-4">Order Summary</h3>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center mb-3"
                  >
                    <div>
                      <strong>{item.name}</strong>
                    </div>

                    <div>x{item.quantity}</div>
                  </div>
                ))}

                <hr />

                <h4 className="mb-4">
                  Total: ₹{totalPrice.toLocaleString("en-IN")}
                </h4>

                <button
                  className="btn btn-success w-100 btn-lg"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;
