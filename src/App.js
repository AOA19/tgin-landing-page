import "./App.scss";
import Navbar from "./components/Navbar.js";
import HeroContent from "./components/HeroContent.js";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
        <HeroContent />
      </div>
    </div>
  );
}

export default App;
