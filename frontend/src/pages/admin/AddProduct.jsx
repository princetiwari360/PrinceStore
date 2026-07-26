import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { toast } from "react-toastify";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    toast.success("Product Added Successfully");
  };

  return (
    <>
      <Navbar />

      <section className="admin-page">
        <div className="container">
          <div className="admin-form">
            <h1 className="mb-4">Add Product</h1>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <select
                name="category"
                className="form-select mb-3"
                onChange={handleChange}
              >
                <option>Select Category</option>

                <option value="electronics">Electronics</option>

                <option value="fashion">Fashion</option>

                <option value="gaming">Gaming</option>

                <option value="sports">Sports</option>
              </select>

              <input
                type="text"
                name="price"
                placeholder="Price"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <textarea
                rows="5"
                name="description"
                placeholder="Description"
                className="form-control mb-3"
                onChange={handleChange}
              ></textarea>

              <button
                className="
                btn
                btn-success
                "
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AddProduct;
