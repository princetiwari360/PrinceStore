import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
FaHeart,
FaShoppingCart,
} from "react-icons/fa";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import { getProducts } from "../services/productService";

function FeaturedProducts() {
const [products, setProducts] =
useState([]);

const { addToWishlist } =
useWishlist();

const { addToCart } =
useCart();

useEffect(() => {
loadProducts();
}, []);

const loadProducts =
async () => {
try {
const data =
await getProducts();

    if (data.success) {
      setProducts(
        data.products.slice(
          0,
          4
        )
      );
    }
  } catch (error) {
    console.log(error);
  }
};


return ( <section className="products-section"> <div className="container"> <h2 className="section-title">
Featured Products </h2>

    <div className="row">
      {products.map(
        (product) => (
          <div
            className="col-lg-3 col-md-6 mb-4"
            key={product.id}
          >
            <div className="product-card">

              <button
                className="wishlist-btn"
                onClick={() =>
                  addToWishlist(
                    product
                  )
                }
              >
                <FaHeart />
              </button>

              <Link
                to={`/product/${product.id}`}
              >
                <img
                  src={
                    product.image
                  }
                  alt={
                    product.name
                  }
                />
              </Link>

              <div className="product-info">
                <h5>
                  {product.name}
                </h5>

                <div className="price-section">
                  <span className="new-price">
                    ₹
                    {Number(
                      product.price
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </span>
                </div>

                <button
                  className="
                  btn
                  btn-info
                  w-100
                  mt-3
                  "
                  onClick={() =>
                    addToCart(
                      product
                    )
                  }
                >
                  <FaShoppingCart />
                  {" "}
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </div>
</section>

);
}

export default FeaturedProducts;
