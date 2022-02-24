import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/employers.module.css'

export default function Employers() {
    const [tab, setTab] = useState(0)

    const jobData = [
    {
        name: 'Ceridian',
        title: 'Full-Stack Dev',
        date: 'Sept 2020 - Sept 2021',
        description: ['Developed algorithms and implemented new data models to modify and enhanced performance of the Dayforce payroll module.', 'x', 'x'],
    },
    {
        name: 'RP4K',
        title: 'Instructor',
        date: 'May 2018 - March 2019',
        description: ['y', 'y', 'y'],
    }]
    const infoRef = useRef()

    const handleTabChange = (tabNum) => {
        if(tabNum !== tab){
            infoRef.current.className = `${styles.information} ${styles.exit}`

            setTimeout(() => {
                infoRef.current.className = `${styles.information} ${styles.enter}`
                setTab(tabNum)
            }, 200)
        } 
    }


    
    return (
        <div className={styles.employers + " container center"} id="employers">
            <div className={styles.tabList}>
                <button className={tab == 0 ? "btn red selected" : "btn red"} onClick={() => handleTabChange(0)}>Ceridian</button>
                <button className={tab == 1 ? "btn red selected" : "btn red"} onClick={() => handleTabChange(1)}>RP4K</button>
            </div>
            
            <div className={styles.information} ref={infoRef}>
                <h4>{jobData[tab].title}<span className="red">@<a className="red" href="">{jobData[tab].name}</a></span></h4>
                <p className={styles.date}>{jobData[tab].date}</p>
                <ul>
                    {jobData[tab].description.map((desc, k) => (
                        <li key={k} className="bullet">{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
