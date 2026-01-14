import React from "react";
import styles from "./hero.module.css";

type Props = {
  title: string;
  breadcrumbs?: string[];
  imageSrc?: string;
};

export default function Hero({
  title,
  breadcrumbs = ["Home", "Articles"],
  imageSrc = "/hero.png",
}: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.breadcrumbs}>
          {breadcrumbs.map((b, i) => (
            <span key={i} className={styles.breadcrumbItem}>
              {b}
              {i < breadcrumbs.length - 1 ? " / " : ""}
            </span>
          ))}
        </div>

        <h1 className={styles.title}>{title}</h1>
      </div>

      {imageSrc && (
        <img className={styles.image} src={imageSrc} alt="hero" />
      )}
    </section>
  );
}
