function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container text-center">
        <h2>Get Exclusive Offers</h2>

        <p>Subscribe to receive latest deals and exclusive discounts.</p>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
          />

          <button className="btn btn-info">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
