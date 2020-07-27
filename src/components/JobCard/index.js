import React from "react";
import styles from "./index.module.scss";

const JobCard = ({ title, description, isEnabled }) => {
  return (
    <div className={styles.jobCard}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Enabled: {isEnabled ? "Yes" : "No"}</p>
    </div>
  );
};

export default JobCard;
