import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { toast } from "react-toastify";

import { getProducts, deleteProduct } from "../../services/productService";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data.products || []);
    } catch (error) {
      console.log(error);

      toast.error("Failed To Load Products");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteProduct(id);

      if (response.success) {
        toast.success("Product Deleted Successfully");

        loadProducts();
      }
    } catch (error) {
      toast.error("Failed To Delete Product");
    }
  };

  return (
    <>
      <Navbar />

      <section className="admin-page py-5">
        <div className="container">
          <div
            className="
            d-flex
            justify-content-between
            align-items-center
            mb-4
            "
          >
            <h1>Manage Products</h1>

            <Link to="/admin/add-product" className="btn btn-success">
              Add Product
            </Link>
          </div>

          {loading ? (
            <div className="text-center">
              <h3>Loading...</h3>
            </div>
          ) : (
            <div className="table-responsive">
              <table
                className="
                table
                table-bordered
                table-hover
                align-middle
                "
              >
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>

                    <th>Image</th>

                    <th>Name</th>

                    <th>Category</th>

                    <th>Price</th>

                    <th>Stock</th>

                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">
                        No Products Found
                      </td>
                    </tr>
                  ) : (
                    products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>

                        <td>
                          <img
                            src={
                              product.image || "https://via.placeholder.com/60"
                            }
                            alt={product.name}
                            width="60"
                            height="60"
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </td>

                        <td>{product.name}</td>

                        <td>{product.category}</td>

                        <td>
                          ₹{Number(product.price).toLocaleString("en-IN")}
                        </td>

                        <td>{product.stock}</td>

                        <td>
                          <Link
                            to={`/admin/edit-product/${product.id}`}
                            className="
                            btn
                            btn-warning
                            btn-sm
                            me-2
                            "
                          >
                            Edit
                          </Link>

                          <button
                            className="
                            btn
                            btn-danger
                            btn-sm
                            "
                            onClick={() => handleDelete(product.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AdminProducts;
