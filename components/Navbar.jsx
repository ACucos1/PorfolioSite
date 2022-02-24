import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'






export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  
  
  const navRef = useRef()


  useEffect(() => {
    let prevY = window.pageYOffset
    const onScroll = () => {
      let currentY = window.pageYOffset
      setIsMenuActive(false)
      if(prevY > currentY){
        navRef.current.style.top = "0px"
      }
      else {
        navRef.current.style.top = "-100px"
      }

      prevY = currentY
    }
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, {passive: true})

    return () => window.removeEventListener('scroll', onScroll)
  })

    
  
  return (//<Image className={styles.logo} src="/images/logo.svg" height="60px" width="70px"/>
    <div className={styles.navbar} ref={navRef}>
        <a className={styles.logo} href=""></a>
        <div className={isMenuActive ? `${styles.menuBtn} ${styles.open}` : styles.menuBtn} onClick={() => setIsMenuActive(!isMenuActive)}>
          <div className={styles.burger}></div>
        </div>
        <div className={isMenuActive ? styles.navItems : styles.navItems + " " + styles.hidden}>
            
            <ul className={styles.navList}>
                
                <li className="nav-item"><span className="red">01.</span><a href="#about">About</a></li>
                <li className="nav-item"><span className="red">02.</span><a href="#WorkExperience">Experience</a></li>
                <li className="nav-item"><span className="red">03.</span><a href="#ShowCase">Work</a></li>
                <li className="nav-item"><span className="red">04.</span><a href="#Contact">Contact</a></li>
            </ul>
            <button className={"red btn"}>Resume</button>
        </div>
    </div>
  )
}
