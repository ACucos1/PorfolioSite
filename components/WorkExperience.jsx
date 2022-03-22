import React from 'react'
import Employers from './Employers'
import styles from '../styles/workexperience.module.css'

export default function WorkExperience() {
  return (
    <div className="workExperience section container center" id="WorkExperience">
        <h3><span className="red">02.</span>Where I&apos;ve Worked</h3>
        <Employers />
    </div>
  )
}
