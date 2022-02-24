import React from 'react'
import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact + " section container center"} id="contact">
        <h5><span className="red">04.</span>What&apos;s Next?</h5>
        <h1>Contact Me!</h1>
        <p>
            I&apos;m always keen to see how I can contribute to new and exciting projects!
            Drop me a line :)  
        </p>
        <button className="btn red">Say Hi</button>
    </div>
  )
}
