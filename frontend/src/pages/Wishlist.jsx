import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <section className="wishlist-page py-5">
        <div className="container">
          <h1 className="mb-5 fw-bold">❤️ My Wishlist</h1>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-5">
              <h3>No Products In Wishlist</h3>
            </div>
          ) : (
            <div className="row">
              {wishlistItems.map((item) => (
                <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                  <div className="product-card">
                    <img src={item.image} alt={item.name} />

                    <div className="product-info">
                      <h5>{item.name}</h5>

                      <h4>{item.price}</h4>

                      <button
                        className="btn btn-info w-100 mb-2"
                        onClick={() => addToCart(item)}
                      >
                        <FaShoppingCart /> Move To Cart
                      </button>

                      <button
                        className="btn btn-danger w-100"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <FaHeart /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Wishlist;
