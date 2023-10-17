import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { fetchTopAlbum } from "./api/api";
import Section from "./components/Section/Section";

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
      <div>
        <Section data={topAlbumData} type="album" title="Top Albums" />
      </div>
    </div>
  );
}

export default App;
