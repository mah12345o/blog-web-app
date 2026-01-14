import React from "react";
import styles from "./banner.module.css";


export default function BannerSection({ imageSrc = "/hero.png" }: { imageSrc?: string }) {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${imageSrc})` }}
    />
     
  
  );
}
