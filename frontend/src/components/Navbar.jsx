import React from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaStore,
  FaSearch,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { totalItems } = useCart();

  const { wishlistItems } = useWishlist();

  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
        >
          <FaStore className="me-2" />
          PrinceStore
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          {/* Search Box */}
          <form className="d-flex mx-auto search-box">
            <input
              className="form-control"
              type="search"
              placeholder="Search Products..."
            />

            <button
              className="btn btn-info ms-2"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>

          {/* Menu */}
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/products"
              >
                Products
              </Link>
            </li>

            {user && (
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/orders"
                >
                  Orders
                </Link>
              </li>
            )}

            {/* Wishlist */}
            <li className="nav-item mx-2">
              <Link
                className="
                nav-link
                position-relative
                "
                to="/wishlist"
              >
                <FaHeart size={20} />

                {wishlistItems.length > 0 && (
                  <span
                    className="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                    "
                  >
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item mx-2">
              <Link
                className="
                nav-link
                position-relative
                "
                to="/cart"
              >
                <FaShoppingCart size={20} />

                {totalItems > 0 && (
                  <span
                    className="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                    "
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>

            {/* User Section */}
            {!user ? (
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/login"
                >
                  <FaUser size={20} />
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link
                    to="/profile"
                    className="
                    nav-link
                    fw-bold
                    text-info
                    "
                  >
                    {user.name}
                  </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link
                    to="/admin"
                    className="
                    btn
                    btn-warning
                    btn-sm
                    "
                  >
                    Admin
                  </Link>
                </li>

                <li className="nav-item mx-2">
                  <button
                    className="
                    btn
                    btn-danger
                    btn-sm
                    "
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;