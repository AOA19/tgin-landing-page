import React from "react";
import Button from "react-bootstrap/Button";
import { IKImage } from "imagekitio-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestSellersCarousel.scss";

const urlEndpoint = " https://ik.imagekit.io/p6ax2eh8/";

function BestSellersCarousel() {
  const bestCarousel = [
    {
      id: 1,
      name: "Rose Water Hydrating Shampoo & Conditioner DUO",
      src: "https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/rose-water-shampoo-conditioner-best-seller.png",
      price: 24.99,
    },
    {
      id: 2,
      name: "Butter Cream Daily Moisturizer",
      src: "https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/butter-cream-best-seller.png",
      price: 15.99,
    },
    {
      id: 3,
      name: "Miracle RepaiRx Stengthening Conditoner",
      src: "https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/miracle-repairx-condioner-best_seller.png",
      price: 15.99,
    },
  ];

  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const findFirstItem = bestCarousel.find((item) => {
    return item.id === 1;
  });
  const findSecondItem = bestCarousel.find((item) => {
    return item.id === 2;
  });
  const findThirdItem = bestCarousel.find((item) => {
    return item.id === 3;
  });

  return (
    <div>
      <Slider {...settings}>
        {/* Carousel 1 */}
        <div className="bestsellers__carousel d-sm-flex justify-content-center">
          {/* Best Sellers Image */}
          <IKImage
            urlEndpoint={urlEndpoint}
            src={findFirstItem.src}
            alt={findFirstItem.name}
            className="bestsellers__img "
          />
          <div className="bestsellers__content">
            {/* Product description */}
            <p className="bestsellers__name">{findFirstItem.name}</p>
            <span className="bestsellers__rating">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <Button
              variant="dark"
              href="/#"
              type="button"
              size="sm"
              className="addToCartBtn"
            >
              Add To Cart
            </Button>{" "}
          </div>
        </div>
        {/* Carousel 2 */}
        <div className="bestsellers__carousel d-sm-flex justify-content-center ">
          {/* Best Sellers Image */}
          <IKImage
            urlEndpoint={urlEndpoint}
            src={findSecondItem.src}
            alt={findSecondItem.name}
            className="bestsellers__img "
          />
          <div className="bestsellers__content">
            {/* Product description */}
            <p className="bestsellers__name">{findSecondItem.name}</p>
            <span className="bestsellers__rating">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <Button
              variant="dark"
              href="/#"
              type="button"
              size="sm"
              className="addToCartBtn"
            >
              Add To Cart
            </Button>{" "}
          </div>
        </div>
        {/* Carousel 3 */}
        <div className="bestsellers__carousel d-sm-flex justify-content-center ">
          {/* Best Sellers Image */}
          <IKImage
            urlEndpoint={urlEndpoint}
            src={findThirdItem.src}
            alt={findThirdItem.name}
            className="bestsellers__img "
          />
          <div className="bestsellers__content">
            {/* Product description */}
            <p className="bestsellers__name">{findThirdItem.name}</p>
            <span className="bestsellers__rating">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <Button
              variant="dark"
              href="/#"
              type="button"
              size="sm"
              className="addToCartBtn"
            >
              Add To Cart
            </Button>{" "}
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default BestSellersCarousel;



// import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

// const BestSellersCarousel = ({ data }) => {
//   const [carousel, setCarousel] = useState(0);

//   const nextImg = () => {
//     setCarousel(carousel === data.length - 1 ? 0 : carousel + 1);
//   };
//   const prevImg = () => {
//     setCarousel(carousel === 0 ? data.length - 1 : carousel - 1);
//   };

//   return (
//     <div className="d-flex justify-content-center">
//       {/* Left arrow  */}
//       <button className="arrow-btn arrow-btn__left" aria-label="Previous image">
//         <HiArrowLongLeft onClick={prevImg} className="carousel-arrow" />
//       </button>
//       {bestCarousel.map((item, index) => (
//         // Best Sellers Image
//         <div
//           key={index}
//           className={
//             carousel === index
//               ? "bestsellers__carousel"
//               : "bestsellers__carousel bestsellers__carousel--hidden"
//           }
//         >
//           <div>
//             <img src={item.src} alt={item.name} className="bestsellers__img" />
//           </div>
//           <div className="text-center ps-sm-4">
//             {/* Product description */}
//             <p className="bestsellers__name">{item.name}</p>
//             <span className="bestsellers__rating">
//               &#9733; &#9733; &#9733; &#9733; &#9734;
//             </span>
//             <p className="bestsellers__price">${item.price}</p>
//             {/* Add to cart button */}
//             <Button
//               variant="dark"
//               href="/#"
//               type="button"
//               size="sm"
//               className="addToCartBtn"
//             >
//               Add To Cart
//             </Button>{" "}
//           </div>
//         </div>
//       ))}
//       {/* Right Arrow */}
//       <button className="arrow-btn arrow-btn__right" aria-label="Next image">
//         <HiArrowLongRight onClick={nextImg} className="carousel-arrow" />
//       </button>
//       {/*  Carousel Indicators */}
//       <span className="bestseller__indicators">
//         {bestCarousel.map((item, index) => {
//           return (
//             <button
//               key={index}
//               onClick={() => setCarousel(index)}
//               aria-label="Next image"
//               className={
//                 carousel === index
//                   ? "indicator"
//                   : "indicator indicator--inactive"
//               }
//             ></button>
//           );
//         })}
//       </span>
//     </div>
//   );
// };
