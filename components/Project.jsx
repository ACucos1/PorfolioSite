import React from 'react'
import styles from '../styles/project.module.css'
//title, desc, image, stack
export default function Project({flip, data}) {
  return (
    <div className={styles.project}>
            <div className={flip ? styles.projectWrapper + " projectRightAnimWrap " + styles.right : styles.projectWrapper + " projectAnimWrap "}>
                <p className="red">Featured Project</p>
                <h4>{data.title}</h4>
                <div className={styles.desc}>
                    <p>
                        {data.desc}
                    </p>
                </div> 
                <ul className={styles.stack}>
                    {data.stack.map((e, idx) => (<li key={idx}>{e}</li>) )}
                </ul>
            </div>
            <div className={styles.imageWrapper}>
                <img className={flip ? styles.image + " showCaseImageRight" : styles.image + " showCaseImage " + styles.rightImage} src="" alt="project" />
            </div>
        </div>
  )
}
