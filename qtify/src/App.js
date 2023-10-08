import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  //Mock data to show the card created

  const data = {
    image: "card-image.png",
    follow: 100,
    name: "New Bollywood",
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Card data={data} />
    </div>
  );
}

export default App;
