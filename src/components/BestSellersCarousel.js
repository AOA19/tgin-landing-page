import React, { useState } from "react";
import "./BestSellersCarousel.scss";
import { bestCarousel } from "../data/productsData";
import Button from "react-bootstrap/Button";

const BestSellersCarousel = ({ item }) => {
  const [carousel, setCarousel] = useState(0);

  const nextImg = () => {
    setCarousel(carousel === item.length - 1 ? 0 : carousel + 1);
  };
  const prevImg = () => {
    setCarousel(carousel === 0 ? item.length - 1 : carousel - 1);
  };

  return (
    <div className="d-flex justify-content-center">
      {bestCarousel.map((item, index) => (
        // Best Sellers Image
        <div
          key={index}
          className={
            carousel === index
              ? "bestsellers__carousel"
              : "bestsellers__carousel bestsellers__carousel--hidden"
          }
        >
          <div>
            <img src={item.src} alt={item.name} className="bestsellers__img" />
          </div>
          <div className="text-center">
            {/* Product description */}
            <p className="bestsellers__name">{item.name}</p>
            <span className="bestsellers__rating">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <p className="bestsellers__price">${item.price}</p>
            {/* Add to cart button */}
            <Button
              variant="dark"
              href="/#"
              type="button"
              size="lg"
              className="addToCartBtn"
            >
              Add To Cart
            </Button>{" "}
          </div>
        </div>
      ))}
      {/*  Carousel Indicators */}
      <span className="bestseller__indicators">
        {bestCarousel.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setCarousel(index)}
              className={
                carousel === index
                  ? "indicator"
                  : "indicator indicator--inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default BestSellersCarousel;
