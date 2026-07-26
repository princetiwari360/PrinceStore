import {
  useEffect,
  useState,
} from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  FaBox,
  FaShoppingCart,
  FaRupeeSign,
} from "react-icons/fa";

import {
  getDashboardStats,
} from "../../services/orderService";

function AdminDashboard() {
  const [stats, setStats] =
    useState({
      totalProducts: 0,
      totalOrders: 0,
      revenue: 0,
    });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats =
    async () => {
      try {
        const data =
          await getDashboardStats();

        if (data.success) {
          setStats(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      <Navbar />

      <section className="admin-page">
        <div className="container">
          <h1 className="mb-5">
            Admin Dashboard
          </h1>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="admin-card">
                <FaBox size={40} />

                <h2>
                  {
                    stats.totalProducts
                  }
                </h2>

                <p>Products</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="admin-card">
                <FaShoppingCart
                  size={40}
                />

                <h2>
                  {
                    stats.totalOrders
                  }
                </h2>

                <p>Orders</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="admin-card">
                <FaRupeeSign
                  size={40}
                />

                <h2>
                  ₹
                  {Number(
                    stats.revenue
                  ).toLocaleString()}
                </h2>

                <p>Revenue</p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 mb-3">
              <a
                href="/admin/products"
                className="
                btn
                btn-info
                w-100
                "
              >
                Manage Products
              </a>
            </div>

            <div className="col-md-6 mb-3">
              <a
                href="/admin/orders"
                className="
                btn
                btn-success
                w-100
                "
              >
                Manage Orders
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AdminDashboard;