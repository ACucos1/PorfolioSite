import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Me from "../public/images/me.jpg";
export default function About() {
  return (
    <section className={styles.about + " section container center"} id='about'>
      <h3>
        <span className='red'>01.</span>About Me
      </h3>
      <div className={styles.contentWrapper}>
        <div className={styles.expoWrapper}>
          <p className={styles.exposition}>
            Ever since I created my first Minecraft plugin and figured out how
            to host my own server back in 2012, working with technology has been
            a daily part of my life. A career in technology is a natural
            extension of who I am at heart, and I count myself among the lucky
            few who get to do what they truly love for a living.
            <br />
            <br />
            As I wrap up my degree, I&apos;ve been working at{" "}
            <a href='https://reeldata.ai' target='_blank' rel='noreferrer'>
              Reeldata.Ai
            </a>
            , fulfilling every young person&apos;s dream of working on something
            truly impactful.
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            src={Me}
            alt='me'
            width='100%'
            height='100%'
            objectFit='contain'
            layout='responsive'
          />
        </div>
      </div>
    </section>
  );
}
