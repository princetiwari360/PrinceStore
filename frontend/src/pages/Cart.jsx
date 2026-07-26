import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      parseInt(item.price.replace("₹", "").replaceAll(",", "")) * item.quantity,
    0,
  );

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <div className="container">
          <h1 className="mb-4">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h3>Your Cart Is Empty</h3>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-card">
                  <img src={item.image} alt={item.name} />

                  <div className="cart-info">
                    <h4>{item.name}</h4>

                    <p>{item.price}</p>

                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-total">
                <h3>Total : ₹{totalPrice.toLocaleString("en-IN")}</h3>

                <Link
                  to="/checkout"
                  className="
  btn
  btn-success
  btn-lg
  "
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cart;
