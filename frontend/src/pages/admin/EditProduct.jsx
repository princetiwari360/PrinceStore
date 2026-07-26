import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";

import { getSingleProduct, updateProduct } from "../../services/productService";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    stock: "",
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const data = await getSingleProduct(id);

      if (data.success) {
        setProduct({
          name: data.product.name || "",

          category: data.product.category || "",

          price: data.product.price || "",

          image: data.product.image || "",

          description: data.product.description || "",

          stock: data.product.stock || "",
        });
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed To Load Product");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateProduct(id, product);

      if (response.success) {
        toast.success("Product Updated Successfully");

        setTimeout(() => {
          navigate("/admin/products");
        }, 1000);
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed To Update Product");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <h3>Loading...</h3>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="admin-page">
        <div className="container">
          <div className="admin-form">
            <h1 className="mb-4">Edit Product</h1>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={product.name}
                placeholder="Product Name"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <select
                name="category"
                value={product.category}
                className="form-select mb-3"
                onChange={handleChange}
              >
                <option value="">Select Category</option>

                <option value="electronics">Electronics</option>

                <option value="fashion">Fashion</option>

                <option value="gaming">Gaming</option>

                <option value="sports">Sports</option>
              </select>

              <input
                type="number"
                name="price"
                value={product.price}
                placeholder="Price"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="text"
                name="image"
                value={product.image}
                placeholder="Image URL"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="number"
                name="stock"
                value={product.stock}
                placeholder="Stock"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <textarea
                rows="5"
                name="description"
                value={product.description}
                placeholder="Description"
                className="form-control mb-3"
                onChange={handleChange}
              ></textarea>

              <button
                className="
                btn
                btn-warning
                w-100
                "
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default EditProduct;
