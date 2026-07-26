import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function RelatedProducts() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "₹79,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹7,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },
    {
      id: 3,
      name: "Gaming Headset",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      id: 4,
      name: "Nike Air Max",
      price: "₹12,999",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
  ];

  return (
    <section className="related-section">
      <div className="container">
        <h2 className="section-title">Related Products</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="related-card">
                <img src={product.image} alt={product.name} />

                <div className="related-info">
                  <h5>{product.name}</h5>

                  <h4>{product.price}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default RelatedProducts;
