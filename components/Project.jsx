import React from 'react'
import styles from '../styles/project.module.css'

export default function Project({flip}) {
  return (
    <div className={styles.project}>
            <div className={flip ? styles.projectWrapper + " projectRightAnimWrap " + styles.right : styles.projectWrapper + " projectAnimWrap "}>
                <p className="red">Featured Project</p>
                <h4>Charisma</h4>
                <div className={styles.desc}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                       Aliquid fuga, ipsum vero beatae id quis error.
                       Consequuntur omnis, aperiam et ipsam suscipit quis 
                       reprehenderit sunt veritatis amet dignissimos harum vitae?</p>
                </div> 
                <ul className={styles.stack}>
                    <li>React</li>
                    <li>Solidity</li>
                    <li>Truffle</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className={styles.imageWrapper}>
                <img className={flip ? styles.image + " showCaseImageRight" : styles.image + " showCaseImage " + styles.rightImage} src="" alt="project" />
            </div>
        </div>
  )
}
