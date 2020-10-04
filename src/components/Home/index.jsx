import React from "react";
import Button from "../common/Button";
import Header from "../Header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={`${styles.Home} relative`}>
      <Header />
      <h1 className={styles.heading}>
        Quickly Build Landing Pages With Knight
      </h1>
      <h2 className={styles.subheading}>
        Knight is a platform that helps freelancers and companies build
        beautiful landing pages in minutes. Sign up for free
      </h2>
      <Button
        variant="green"
        text="GET STARTED NOW"
        icon="fas fa-arrow-right"
      />
    </section>
  );
};

export default Home;
