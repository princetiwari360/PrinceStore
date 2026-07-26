import { FaShippingFast, FaLock, FaUndo, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      desc: "Delivery across India in 2-5 days",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "100% secure payment gateway",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      desc: "7 day hassle-free return policy",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Customer support anytime",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="section-title">Why Choose PrinceStore?</h2>

        <div className="row">
          {features.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="why-card">
                <div className="why-icon">{item.icon}</div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
