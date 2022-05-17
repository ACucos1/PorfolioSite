import { useEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import ShowCase from '../components/ShowCase'
import Contact from '../components/Contact'
import showCase from '../components/ShowCase'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const el =  useRef()
  const q = gsap.utils.selector(el)
  const heroTimeline = useRef()
  const aboutTl = useRef()
  const employersTl = useRef()
  const projectTl = useRef()
  const contactTl = useRef()
  //Animations
  useEffect(() => {
    
    const headers = gsap.utils.toArray("h3")
    headers.forEach((header, i) => {
      const anim = gsap.from(header, {
        opacity: 0,
        x: -300,
      })
      ScrollTrigger.create({
        trigger: header,
        animation: anim,
        toggleActions: "restart",
        once: false,
        label: "header"
      })
    })
    heroTimeline.current = gsap.timeline()
    .from("#hero p.red", {
      opacity: 0,
      x: -50,
      duration: .7,
    })
    .addLabel("hero").from("#hero h1", {
      opacity: 0,
      y: 10,
    })
    .from("#hero h2, #hero h2 + p", {
      opacity: 0,
      y: 10
    }, "hero+=.1")

    aboutTl.current = gsap.timeline({
      scrollTrigger: {
      trigger: "#about h3",
      
    }}
    ).addLabel("aboutLoad").from("#about div div", {
      opacity: 0,
      y: 100
    }).from("#about img", {
      opacity: 0,
      y: 100
    }, "aboutLoad+=.2")

    employersTl.current = gsap.timeline({
      scrollTrigger: {
      trigger: "#employers",
      }
    })
    .addLabel("employersLoad").from("#employers div", {
      opacity: 0,
      y: 100,
      stagger: .2
    })

    projectTl.current = gsap.timeline({
      scrollTrigger : {
        trigger: "#ShowCase",
        
      }
    })
    .addLabel("projectLoad").from(".projectRightAnimWrap", {
      opacity: 0,
      x: 300,
    })
    .from(".projectAnimWrap", {
      opacity: 0,
      x: -300,
    }, "projectLoad+=.5")
    .from(".showCaseImageRight", {
      opacity: 0,
      x: -300,
    }, "projectLoad+=.5")
    .from(".showCaseImage" , {
      opacity: 0,
      x: 300,
    }, "projectLoad+=.5")

    contactTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#Contact",
      }
    })
    .addLabel("loadContact").from("#Contact h5", {
      opacity: 0,
      x: -300,
    })
    .from("#Contact h1, #Contact p", {
      opacity: 0,
      y: 50,
      stagger: 0.1
    },)
    .from("#Contact button", {
      opacity: 0,
      scale: 0.5,
    },)
    .from('#twitter', {
      opacity: 0,
      y: 30
    })
    .from('#github', {
      opacity: 0,
      y: 30
    })
    .from('#linkedin', {
      opacity: 0,
      y: 30
    })
  }, [])

  return (
    <div className="App">
      <Head >
        <title>Alex Cucos</title>
        <meta name="description" content="Full-Stack Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="main" >
        <Hero />
        <About />
        <WorkExperience />
        <ShowCase />
        <Contact />
      </main>

      <footer className="footer">
        Built from scratch with NextJS by <span className="red">Alex Cucos</span> 
        <br />
        Original design by <span className="revred"><a href="https://github.com/bchiang7" target ="blank" rel="noreferrer">Brittany Chiang</a></span>
      </footer>
    </div>
  )
}
