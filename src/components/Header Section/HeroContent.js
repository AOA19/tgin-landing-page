import "./Navbar.scss";
import "./HeroContent.scss";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <div id="hero">
      <h1 className="hero__heading">
        Thank <span>God</span> It's Natural
      </h1>
      <p className="hero__description">
        High-quality hair products infused with nourishing natural ingredients
        to help you achieve and maintain healthy, beautiful hair effortlessly.
      </p>
      <Button
        variant="primary"
        href="#products"
        type="button"
        size="lg"
        className="hero__btn"
      >
        Shop Now
      </Button>{" "}
    </div>
  );
}
export default Hero;
