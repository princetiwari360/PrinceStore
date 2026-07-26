import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row">

          <div className="col-lg-4 mb-4">

            <h3>PrinceStore</h3>

            <p>
              Premium E-Commerce Platform
              for Electronics, Fashion,
              Sports and More.
            </p>

          </div>

          <div className="col-lg-2 mb-4">

            <h5>Quick Links</h5>

            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
            </ul>

          </div>

          <div className="col-lg-2 mb-4">

            <h5>Support</h5>

            <ul>
              <li>Help Center</li>
              <li>Returns</li>
              <li>Contact</li>
            </ul>

          </div>

          <div className="col-lg-4 mb-4">

            <h5>Follow Us</h5>

            <div className="social-icons">

              <a
                href="https://www.instagram.com/maiprrincehoon/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/prince-tiwari-662084233/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/PrinceTiwariBR"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100018404438643"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 PrinceStore. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;