import React from "react";
import Project from "./Project";
import styles from "../styles/showcase.module.css";

export default function showCase() {
  let projects = [
    {
      title: "Charisma",
      desc: "ETH Global NFTHack 2022 Winner. A wallet analysis platform which aggregates and analysis user NFT trading activity and assigns a 'Wallet Personality Indicator' similar to the Meyers-Briggs 16 Personalities test.",
      image: "/images/charisma screenshot.png",
      link: "https://charismasocial.xyz",
      stack: ["React", "Solidity", "Truffle", "CSS"],
    },
    {
      title: "Bonkers Stonkers",
      desc: "Developed the website, smart contract, and marketing strategy for a collection of 10,000 NFT degens looking to make their moonshot in the metaverse.",
      image: "/images/stealth.png",
      link: "",
      stack: ["NextJS", "Solidity", "Truffle", "CSS", "Python"],
    },
  ];

  return (
    <section
      className={styles.showCase + " showCase section container center"}
      id='ShowCase'>
      <h3>
        <span className='red'>03.</span>Some of My Projects
      </h3>
      {projects.map((project, idx) => (
        <Project key={idx} flip={idx % 2 == 0 ? true : false} data={project} />
      ))}
    </section>
  );
}
