import "./App.scss";
import Navbar from "./components/Navbar.js";
import HeroContent from "./components/HeroContent.js";
import BestSellersCarousel from "./components/BestSellersCarousel.js";

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
    </div>
  );
}

export default App;
