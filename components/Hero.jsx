import React from "react";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero + " section"} id='hero'>
      <div className={styles.heroWrapper + " container center"}>
        <p className='red'>Hey! I&apos;m</p>
        <h1 className={styles.name}>Alex.</h1>
        <h2>I Build Things for the Web.</h2>
        <p className={styles.desc}>
          As a full-stack web developer, I specialize in transforming your
          business requirements into effective web solutions that drive growth
          in today&apos;s competitive market.
        </p>
      </div>
    </div>
  );
}
