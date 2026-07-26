import { FaBolt, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FlashSale() {
  const navigate = useNavigate();

  return (
    <section className="flash-sale-section">
      <div className="container">
        <div className="flash-sale-card">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="flash-badge">
                <FaBolt /> Flash Sale
              </span>

              <h2>Up To 70% OFF</h2>

              <p>
                Limited Time Offer on Electronics, Fashion and Sports Products.
              </p>

              <button
                className="
                btn
                btn-warning
                btn-lg
                "
                onClick={() => navigate("/products")}
              >
                <FaShoppingCart /> Shop Now
              </button>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
                alt="sale"
                className="flash-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlashSale;
