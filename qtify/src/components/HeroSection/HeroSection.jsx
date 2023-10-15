import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as HeadphoneIcon } from "../../assets/vibrating-headphone 1.svg";

const HeroSection = () => {
  return (
    <div className={styles.heroSectionWrapper}>
      <div className={styles.heroText}>
        <h1>
          100 Thousand Songs, ad-free <br />
          Over thousands podcast episodes
        </h1>
      </div>
      <HeadphoneIcon />
    </div>
  );
};

export default HeroSection;
