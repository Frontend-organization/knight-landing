import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <React.Fragment>
      <svg className={styles.FooterThumb} width="100%" viewBox="0 0 960 30">
        <polygon points="0,30 960,30 960,0 0,30" preserveAspectRatio="none" />
      </svg>
      <section className={styles.Footer}>
        <div className={styles.FooterContent}>
          <div className={styles.FooterAbout}>
            <h2>ABOUT KNIGHT</h2>
            <p>
              Magnis modipsae que voloratati andigen daepeditem quiate conecus
              aut labore. Laceaque quiae sitiorem rest non restibusaes maio es
              dem tumquam explabo.
            </p>
            <div className={styles.NetworkIcons}>
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-google-plus-g" />
              <i className="fas fa-globe" />
            </div>
          </div>
          <div className={styles.FooterLinksWrapper}>
            <ul className={styles.FooterLinks}>
              <h2>LEGAL</h2>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Refund policy</li>
            </ul>
            <ul className={styles.FooterLinks}>
              <h2>PARTNER</h2>
              <li>Refer a friend</li>
              <li>Affiliates</li>
            </ul>
            <ul className={styles.FooterLinks}>
              <h2>HELP</h2>
              <li>Support</li>
              <li>Log In</li>
            </ul>
          </div>
        </div>
        <p className={styles.FooterCredits}>
          &copy; 2020 - Frontend-Organization's people & SnackCoder
        </p>
      </section>
    </React.Fragment>
  );
}

export default Footer;
