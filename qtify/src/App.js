import styles from "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { fetchTopAlbum, fetchNewAlbum, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";

function App() {
  const [data, setData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbum();
      setData(res);
      const newAlbum = await fetchNewAlbum();
      setNewAlbumData(newAlbum);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section data={data} type="album" title="Top Albums" />
        <Section data={newAlbumData} type="album" title="New Albums" />
      </div>
    </div>
  );
}

export default App;
