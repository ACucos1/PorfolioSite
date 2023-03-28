import React from "react";
import Project from "./Project";
import styles from "../styles/showcase.module.css";

export default function showCase() {
  let projects = [
    {
      title: "Point Cloud Creative",
      desc: "Point Cloud Creative is a digital agency specializing in Augmented Reality. Working closely with the founder, I designed & implemented the website and hooked it up to Sanity CMS, offering complete control over the content served on the website",
      image: "/images/pcc.png",
      link: "",
      stack: ["NextJS", "Sanity CMS", "GSAP"],
    },
    {
      title: "Charisma",
      desc: "ETH Global NFTHack 2022 Winner. A wallet analysis platform which aggregates and analyzes user NFT trading activity and assigns a 'Wallet Personality Indicator' similar to the Meyers-Briggs 16 Personalities test.",
      image: "/images/charisma screenshot.png",
      link: "https://charismasocial.xyz",
      stack: ["React", "Solidity", "Truffle", "NextJS"],
    },
    {
      title: "3D NFT Visualizer",
      desc: "A wallet explorer which visualizes a user's NFTs each in an interactive 3D Mini-environment.",
      image: "/images/3dnftvisualizer.png",
      link: "https://3-d-nf-t-visualizer.vercel.app/",
      stack: ["Vite", "React", "ThreeJS", "Alchemy SDK"],
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
