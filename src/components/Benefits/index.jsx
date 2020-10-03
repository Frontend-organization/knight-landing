import React from "react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    heading: "Create once. Share everywhere.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-edit-3"
      >
        <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
        <line x1="3" y1="22" x2="21" y2="22"></line>
      </svg>
    ),
    primaryColor: "#1de9b6",
    secondaryColor: "rgba(29, 233, 182, 0.1)",
  },
  {
    heading: "Unlimited devices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-monitor"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    primaryColor: "#00e676",
    secondaryColor: "rgba(0, 230, 118, 0.1)",
  },
  {
    heading: "Beautiful Templates & layouts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-layout"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    primaryColor: "#ff1744",
    secondaryColor: "rgba(255, 23, 68, 0.1)",
  },
  {
    heading: "Available Globally",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-globe"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    primaryColor: "#00e5ff",
    secondaryColor: "rgba(0, 229, 255, 0.1)",
  },
];

function Benefits() {
  return (
    <section className={styles.Benefits}>
      <header className={styles.BenefitsHeader}>
        <h2>Knight offers everything you need.</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          nisi commodo, tempus odio a, vestibulum nibh.
        </h4>
      </header>
      <main className={styles.BenefitsMain}>
        {benefits.map((benefit, key) => (
          <div key={key} className={styles.Benefit}>
            <div
              className={styles.BenefitIcon}
              style={{
                color: benefit.primaryColor,
                backgroundColor: benefit.secondaryColor,
              }}
            >
              {benefit.icon}
            </div>
            <h2 className={styles.BenefitTitle}>{benefit.heading}</h2>
            <p className={styles.BenefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Benefits;
