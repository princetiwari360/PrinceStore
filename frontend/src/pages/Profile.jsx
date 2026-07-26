import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useOrders } from "../context/OrderContext";
import { Link } from "react-router-dom";
function Profile() {
  const { user, logout } = useAuth();

  const { cartItems } = useCart();

  const { wishlistItems } = useWishlist();

  const { orders } = useOrders();

  if (!user) {
    return (
      <>
        <Navbar />

        <div className="container py-5 text-center">
          <h2>Please Login First</h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="profile-page">
        <div className="container">
          <div className="profile-card">
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="user"
                className="profile-img"
              />

              <h2>{user.name}</h2>

              <p>{user.email}</p>
            </div>

            <hr />

            <div className="row text-center">
              <div className="col-md-4">
                <h3>{orders.length}</h3>

                <p>Orders</p>
              </div>

              <div className="col-md-4">
                <h3>{wishlistItems.length}</h3>

                <p>Wishlist</p>
              </div>

              <div className="col-md-4">
                <h3>{cartItems.length}</h3>

                <p>Cart Items</p>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link
                to="/saved-address"
                className="
  btn
  btn-primary
  me-2
  "
              >
                Manage Address
              </Link>
              <button
                className="
                btn
                btn-danger
                "
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;
