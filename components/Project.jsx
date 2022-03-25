import React from 'react'
import Image from 'next/image'
import styles from '../styles/project.module.css'
//title, desc, image, stack
export default function Project({flip, data}) {
    console.log(data.image);
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
                <div className={flip ? styles.image + " showCaseImageRight" : styles.image + " showCaseImage " + styles.rightImage} >
                    <Image src={data.image} 
                        alt="project" 
                        width="500"
                        height="300"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
  )
}
