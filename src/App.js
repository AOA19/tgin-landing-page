import "./App.scss";
import Navbar from "./components/Navbar.js";
import HeroContent from "./components/HeroContent.js";
import BestSellersCarousel from "./components/BestSellersCarousel.js";
import Collections from "./components/Collections";

// import { bestCarousel } from "./data/productsData.js";

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
        <Collections/>
      </div>
    </div>
  );
}

export default App;
