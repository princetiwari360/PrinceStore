import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate =
    useNavigate();

  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-content">
            <span className="sale-badge">
              MEGA SALE 2026
            </span>

            <h1>
              Upgrade Your Lifestyle
              <br />
              With Premium Products
            </h1>

            <p>
              Electronics,
              Fashion, Sports,
              Accessories and
              much more.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-info btn-lg"
                onClick={() =>
                  navigate(
                    "/products"
                  )
                }
              >
                Shop Now
              </button>

              <button
                className="btn btn-outline-light btn-lg"
                onClick={() =>
                  navigate(
                    "/products"
                  )
                }
              >
                Explore
              </button>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
              alt="product"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;