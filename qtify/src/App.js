import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { fetchTopAlbum } from "./api/api";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbum();
    setTopAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="cardContainer">
        {topAlbumData.map((item) => {
          return <Card data={item} type="album" />;
        })}
      </div>
    </div>
  );
}

export default App;
