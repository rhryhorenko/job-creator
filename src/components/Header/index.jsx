import React from "react";
import styles from "./index.module.scss";
import paths from "../../paths";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to={paths.jobsList}>Jobs</Link>
        <Link to={paths.postJob}>Post a job</Link>
      </nav>
    </header>
  );
};

export default Header;
