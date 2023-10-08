import React from "react";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  //Destructing the data
  const { image, follow, name } = data;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={require(`../../assets/${image}`)}
          alt="card"
          className={styles.cardImage}
        />
        <div className={styles.followContainer}>
          <p className={styles.follow}>{follow}M Follows</p>
        </div>
      </div>
      <span>{name}</span>
    </div>
  );
};

export default Card;
