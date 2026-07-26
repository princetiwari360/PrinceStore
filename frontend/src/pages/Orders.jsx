import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useOrders } from "../context/OrderContext";

function Orders() {
  const { orders } = useOrders();

  return (
    <>
      <Navbar />

      <section className="container py-5">
        <h2 className="mb-4 fw-bold">My Orders</h2>

        {orders.length === 0 ? (
          <div className="text-center py-5">
            <h4>No Orders Yet</h4>

            <p>You haven't placed any orders yet.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="
                card
                shadow-sm
                border-0
                mb-4
                "
            >
              <div className="card-body">
                <h5>Order #{index + 1}</h5>

                <p>Date: {order.date}</p>

                <p>Total: ₹{order.total.toLocaleString("en-IN")}</p>

                <hr />

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="
                        d-flex
                        align-items-center
                        mb-3
                        "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      width="80"
                      height="80"
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    <div className="ms-3">
                      <h6>{item.name}</h6>

                      <p className="m-0">Qty: {item.quantity}</p>

                      <p className="m-0">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      <Footer />
    </>
  );
}

export default Orders;
