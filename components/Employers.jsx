import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/employers.module.css";

export default function Employers() {
  const [tab, setTab] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState(0);

  const jobData = [
    {
      name: "ReelData.ai",
      title: "Full-Stack Dev",
      date: "May 2022 - Sept 2022",
      description: [
        "Delivered clean, test-driven and maintainable code for ReelData's newest product, ReelBiomass.",
        "Implemented new features from a spec, from back-end integration to implementing new pages/components on the front-end",
        "Typescript, React, Java, Springboot, PostgreSQL, GraphQL",
      ],
    },
    {
      name: "Ceridian",
      title: "Full-Stack Dev",
      date: "Sept 2020 - Sept 2021",
      description: [
        "Developed algorithms and implemented new data models to modify and enhance performance of the Dayforce payroll module.",
        "Maintained business logic to stay up to date with the latest standards & best practices",
        ".NET MVC 5, C#, SQL, SSMS, DOJO js",
        "Operated in close collaboration with senior devs, business analysts and database analysts on a daily basis",
      ],
    },
    {
      name: "RP4K",
      title: "Instructor",
      date: "May 2018 - March 2019",
      description: [
        "Taught kids aged 8-18 how to program classic arcade games in a variety of programming lanuages",
        "Broke down fundamental concepts of math & programming so that even a child could understand them",
        "Developed a keen eye for debugging after scouring tens of thousands of lines of children's code",
        "Python, Java, Javascript, C++, C#, Visual Basic, Unity",
      ],
    },
  ];
  const infoRef = useRef();

  const handleTabChange = (tabNum) => {
    if (tabNum !== tab) {
      infoRef.current.className = `${styles.information} ${styles.exit}`;
      setSelectedBtn(tabNum);
      setTimeout(() => {
        infoRef.current.className = `${styles.information} ${styles.enter}`;
        setTab(tabNum);
      }, 200);
    }
  };

  return (
    <div className={styles.employers + " container center"} id='employers'>
      <div className={styles.tabList}>
        {jobData.map((job, idx) => (
          <button
            key={idx}
            className={selectedBtn === idx ? "btn red selected" : "btn red"}
            onClick={() => handleTabChange(idx)}>
            {job.name}
          </button>
        ))}
      </div>

      <div className={styles.information} ref={infoRef}>
        <h4>
          {jobData[tab].title}
          <span className='red'>
            @
            <a className='red' href=''>
              {jobData[tab].name}
            </a>
          </span>
        </h4>
        <p className={styles.date}>{jobData[tab].date}</p>
        <ul>
          {jobData[tab].description.map((desc, k) => (
            <li key={k} className='bullet'>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
