import styles from "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { fetchTopAlbum, fetchNewAlbum, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";

function App() {
  const [data, setData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = React.useState(0);
  const [toggle, setToggle] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateSongsData(value);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

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
    generateAllSongsData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section
          data={data}
          type="album"
          title="Top Albums"
          filteredDataValues={data}
          handleToggle={handleToggle}
          toggle={toggle}
        />
        <Section
          data={newAlbumData}
          type="album"
          title="New Albums"
          filteredDataValues={newAlbumData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          handleChange={handleChange}
          filteredDataValues={filteredDataValues}
          filteredData={filteredData}
          value={value}
          handleToggle={handleToggle}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default App;
