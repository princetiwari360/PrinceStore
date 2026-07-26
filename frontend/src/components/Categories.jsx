import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      name: "Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Shop By Category</h2>

        <div className="row">
          {categories.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <Link
                to={`/products?category=${item.name.toLowerCase()}`}
                className="text-decoration-none"
              >
                <div className="category-card">
                  <img src={item.image} alt={item.name} />

                  <h4>{item.name}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
