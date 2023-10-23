import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordian.module.css";

export default function BasicAccordion({ faqs }) {
  return (
    <div className={styles.accordionContainer}>
      <span className={styles.header}>FAQS</span>
      {faqs.map((faq, index) => (
        <Accordion key={index} classes={{ root: styles.customAccordion }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.customExpandIcon} />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
            classes={{ root: styles.customAccordionSummary }}
          >
            <Typography className={styles.customTypography}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails classes={{ root: styles.customAccordionDetails }}>
            <Typography className={styles.customDropdownTypography}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
