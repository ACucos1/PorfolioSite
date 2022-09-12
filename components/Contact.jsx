import React from "react";
import styles from "../styles/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section
      className={styles.contact + " section container center"}
      id='Contact'>
      <h5>
        <span className='red'>04.</span>What&apos;s Next?
      </h5>
      <h1>Contact Me!</h1>
      <p>
        I&apos;m always keen to see how I can contribute to new and exciting
        projects! Drop me a line :)
      </p>
      <a href='mailto:alexcucos1@gmail.com'>
        <button className='btn red'>Say Hi</button>
      </a>
      <div className={styles.socials}>
        <a
          href='https://twitter.com/alexcucos3'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            id='twitter'
            className={`${styles.socialLink} fa-3x`}
            icon={faTwitter}
          />
        </a>
        <a href='https://github.com/acucos1' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon
            id='github'
            className={`${styles.socialLink} fa-3x`}
            icon={faGithub}
          />
        </a>
        <a
          href='https://linkedin.com/in/alex-cucos'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            id='linkedin'
            className={`${styles.socialLink} fa-3x`}
            icon={faLinkedin}
          />
        </a>
      </div>
    </section>
  );
}
