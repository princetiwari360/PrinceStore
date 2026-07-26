import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import {
Navigation,
Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { getProducts } from "../services/productService";

function TrendingProducts() {
const [products, setProducts] =
useState([]);

useEffect(() => {
loadProducts();
}, []);

const loadProducts =
async () => {
try {
const data =
await getProducts();


    if (data.success) {
      setProducts(
        data.products
      );
    }
  } catch (error) {
    console.log(error);
  }
};

return ( <section className="trending-section"> <div className="container"> <h2 className="section-title">
 Trending Products </h2>

```
    <Swiper
      modules={[
        Navigation,
        Autoplay,
      ]}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction:
          false,
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
      {products.map(
        (product) => (
          <SwiperSlide
            key={
              product.id
            }
          >
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none"
            >
              <div className="trending-card">
                <img
                  src={
                    product.image
                  }
                  alt={
                    product.name
                  }
                />

                <div className="trending-info">
                  <h5>
                    {
                      product.name
                    }
                  </h5>

                  <h4>
                    ₹
                    {Number(
                      product.price
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        )
      )}
    </Swiper>
  </div>
</section>

);
}

export default TrendingProducts;
