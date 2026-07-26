import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaHeart } from "react-icons/fa";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import { getProducts } from "../services/productService";

function Products() {
  const { addToWishlist } = useWishlist();

  const { addToCart } = useCart();

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOption, setSortOption] = useState("latest");

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      console.log("API RESPONSE:", data);

      setProducts(data.products || []);
    } catch (error) {
      console.log("PRODUCT FETCH ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase() === category.toLowerCase(),
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) =>
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (sortOption === "low") {
    filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (sortOption === "high") {
    filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="container-fluid">
          <div className="products-header mb-4">
            <h2 className="m-0">
              {category
                ? category.charAt(0).toUpperCase() + category.slice(1)
                : "All Products"}
            </h2>

            <div className="d-flex gap-2">
              <button
                className="btn btn-dark d-lg-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#filterCanvas"
              >
                Filters
              </button>

              <select
                className="form-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="latest">Latest</option>

                <option value="low">Price Low To High</option>

                <option value="high">Price High To Low</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="filter-box">
                <h4>Categories</h4>

                <ul>
                  <li>
                    <Link to="/products">All Products</Link>
                  </li>

                  <li>
                    <Link to="/products?category=electronics">Electronics</Link>
                  </li>

                  <li>
                    <Link to="/products?category=fashion">Fashion</Link>
                  </li>

                  <li>
                    <Link to="/products?category=gaming">Gaming</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              {loading && (
                <div className="text-center py-5">
                  <h3>Loading...</h3>
                </div>
              )}

              {!loading && filteredProducts.length === 0 && (
                <div className="text-center py-5">
                  <h3>No Products Found</h3>
                </div>
              )}

              <div className="row">
                {filteredProducts.map((product) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 mb-4"
                    key={product.id}
                  >
                    <div className="product-card">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={
                            product.image ||
                            "https://via.placeholder.com/300x250?text=No+Image"
                          }
                          alt={product.name}
                        />
                      </Link>

                      <div className="product-info">
                        <h5>{product.name}</h5>

                        <h4>
                          ₹{Number(product.price).toLocaleString("en-IN")}
                        </h4>

                        <button
                          className="btn btn-outline-danger w-100 mb-2"
                          onClick={() => addToWishlist(product)}
                        >
                          <FaHeart /> Wishlist
                        </button>

                        <button
                          className="btn btn-info w-100"
                          onClick={() => addToCart(product)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="filterCanvas"
      >
        <div className="offcanvas-header">
          <h5>Filters</h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <Link className="d-block mb-3" to="/products">
            All Products
          </Link>

          <Link className="d-block mb-3" to="/products?category=electronics">
            Electronics
          </Link>

          <Link className="d-block mb-3" to="/products?category=fashion">
            Fashion
          </Link>

          <Link className="d-block mb-3" to="/products?category=gaming">
            Gaming
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
