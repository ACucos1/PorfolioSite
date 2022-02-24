import React from 'react'
import styles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero + " section"} id="hero">
        <div className={styles.heroWrapper + " container center"}>
            <p className="red">Hello World! my name is</p>
            <h1 className={styles.name}>Alex Cucos.</h1>
            <h2>I Build Things for the Web.</h2>
            <p className={styles.desc}>
                I&apos;m a full-stack software engineer 
                specializing in connecting you to the metaverse.
                Currently, I&apos;m focused on building accessible web3 applications
                to aid in the mass adoption of blockchain tech.
            </p>
        </div>
    </div>
  )
}
