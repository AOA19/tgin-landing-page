import "./App.scss";
import Navbar from "./components/Header Section/Navbar.js";
import HeroContent from "./components/Header Section/HeroContent.js";
import BestSellersCarousel from "./components/Best Sellers Section/BestSellersCarousel.js";
import Collections from "./components/Collections Section/Collections";
import Products from "./components/Products Section/Products";
import About from "./components/About Section/About"
import Ingredients from "./components/About Section/Ingredients";
import Testimonials from "./components/Testimonials Section/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
        <HeroContent />
      </div>
      <div className="bestsellers-section">
        <h2 className="section-header">Best Sellers</h2>
        <BestSellersCarousel />
      </div>
      <div className="collections-section">
        <h2 className="section-header">Our Collections</h2>
        <Collections />
      </div>
      <div className="products-section">
        <h2 className="section-header">Shop Our Products</h2>
        <Products />
      </div>
      <div className="about-section">
        <h2 className="section-header">About TGIN</h2>
        <About />
        <Ingredients/>
      </div>
      <div className="testimonials-section">
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;
