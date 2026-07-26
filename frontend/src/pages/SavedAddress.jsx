import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useAddress } from "../context/AddressContext";

import { toast } from "react-toastify";

function SavedAddress() {
  const { address, setAddress } = useAddress();

  const [formData, setFormData] = useState(address);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveAddress = () => {
    setAddress(formData);

    toast.success("Address Saved Successfully");
  };

  return (
    <>
      <Navbar />

      <section className="profile-page">
        <div className="container">
          <div className="profile-card">
            <h2 className="mb-4">Saved Address</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control mb-3"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control mb-3"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="address"
              rows="4"
              placeholder="Address"
              className="form-control mb-3"
              value={formData.address}
              onChange={handleChange}
            ></textarea>

            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-control mb-3"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              className="form-control mb-4"
              value={formData.pincode}
              onChange={handleChange}
            />

            <button
              className="
              btn
              btn-success
              "
              onClick={saveAddress}
            >
              Save Address
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SavedAddress;
