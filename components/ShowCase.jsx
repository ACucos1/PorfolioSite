import React from 'react'
import Project from './Project'
import styles from '../styles/showcase.module.css'

export default function showCase() {
  return (
    <div className={styles.showCase + " showCase section container center"} id="showcase">
        <h3><span className="red">03.</span>Some of My Projects</h3>
        <Project flip={true}/>
        <Project />
        <Project flip={true}/>
        
    </div>
  )
}
