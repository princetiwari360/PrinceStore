import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <div className="container py-5 text-center">
        <div className="card shadow-lg p-5 border-0">
          <h1 className="text-success mb-3"> Order Placed Successfully</h1>

          <p className="fs-5">Thank you for shopping with PrinceStore.</p>

          <div className="mt-4">
            <Link to="/products" className="btn btn-primary me-3">
              Continue Shopping
            </Link>

            <Link to="/orders" className="btn btn-success">
              View Orders
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OrderSuccess;
