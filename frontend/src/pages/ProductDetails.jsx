import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar />

      <section className="product-details-page">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="product-image-box">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000"
                  alt="iPhone"
                  className="main-product-image"
                />
              </div>
            </div>


            <div className="col-lg-6">
              <span className="product-category">Electronics</span>

              <h1 className="product-title">iPhone 16 Pro Max</h1>

              <div className="rating-box">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span>(4.9 Reviews)</span>
              </div>

              <h2 className="product-price">₹1,29,999</h2>

              <p className="product-description">
                Experience next generation performance, professional camera
                system and premium titanium design with iPhone 16 Pro Max.
              </p>


              <div className="product-features">
                <h4>Key Features</h4>

                <ul>
                  <li>✅ Titanium Premium Design</li>
                  <li>✅ 48MP Professional Camera</li>
                  <li>✅ A18 Pro Chip</li>
                  <li>✅ All Day Battery Life</li>
                  <li>✅ 5G Connectivity</li>
                </ul>
              </div>


              <div className="quantity-box">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>

                <span>{quantity}</span>

                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <div className="product-buttons">
                <button className="btn btn-info btn-lg">Add To Cart</button>

                <button className="btn btn-dark btn-lg">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="reviews-section">
        <div className="container">
          <h2 className="text-center mb-5">Customer Reviews</h2>

          <div className="review-card">
            <h5>Rahul Kumar</h5>

            <p>Amazing product quality. Delivery was very fast.</p>
          </div>

          <div className="review-card">
            <h5>Ankita Sharma</h5>

            <p>Camera quality is excellent. Totally worth buying.</p>
          </div>
        </div>
      </section>
      <RelatedProducts />
      <Footer />
    </>
  );
}

export default ProductDetails;
