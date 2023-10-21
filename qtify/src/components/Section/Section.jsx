import React from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tab/Tab";

const Section = ({
  title,
  data,
  type,
  value = 1,
  handleChange = null,
  filteredDataValues = [],
  filteredData = null,
  toggle = false,
  handleToggle = null,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {toggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((item) => (
                <Card data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
