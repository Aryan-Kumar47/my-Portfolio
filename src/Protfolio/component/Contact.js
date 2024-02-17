
import SectionWrapper from '../HOC/SectionWrapper'
import React, { useRef , useEffect} from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap, { Power3 } from 'gsap'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import ClipBoard from './ClipBoard.js'
const Contact = () => {
  let lineRefLeft = useRef()
  let lineRefRight = useRef()
  let infinteTextMove = useRef()
  useEffect(() => {
    ScrollTrigger.create({
      trigger : lineRefLeft,
      start : 'top 90%',
      animation : gsap.fromTo(lineRefLeft , 2 , {
        scaleX : 0,
        ease : Power3.easeOut,
      },
      {
        transformOrigin : "right",
        scaleX : 1,
        ease : Power3.easeOut,
      }),
    })
    ScrollTrigger.create({
      trigger : lineRefRight,
      start : 'top 90%',
      animation : gsap.fromTo(lineRefRight , 2 , {
        width : '0%',
        ease : Power3.easeOut,
      },
      {
        width : '100%',
        ease : Power3.easeOut,
      }),
    })

    gsap.to(infinteTextMove.children[0].children , 
    {
      xPercent : -100,
      repeat : -1,
      duration : 15,
      ease : "linear"
    }).totalProgress(0.5);

    gsap.set(infinteTextMove.children[0]  , {xPercent : -50})
  })



  return (
    <section className=' h-full px-[5%]'>
      <div className='py-[4rem] flex flex-col gap-10'>
        <div className=' h-[2px] bg-[#363536] line origin-left' ref={el => lineRefLeft = el}/>
         {/* marquee */}
        <div className=' relative ' ref={el => infinteTextMove = el}>
          <div className=' flex w-fit flex-auto flex-row'>
            <p className=' headline whitespace-nowrap' >
              LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?
            </p>
            <p className=' headline whitespace-nowrap' >
              LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?
            </p>
            <p className=' headline whitespace-nowrap' >
              LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?
            </p>
          </div>
        </div>
        <div className=' h-[2px] bg-[#363536] line origin-right' ref={el => lineRefRight = el}/>
        <div className=' flex justify-center items-center flex-col'>
          <ClipBoard/>
          <div className='flex flex-row justify-evenly w-full mt-24'>
            <a className=' cursor-pointer' rel="noopener noreferrer" href='https://www.linkedin.com/in/aryan-kumar-baa528245/' target='_blank'>
              <AiOutlineLinkedin size={70} className='hover:scale-[1.05] transition-[scale]'/>
            </a>
            <a className=' cursor-pointer ' rel="noopener noreferrer" href='https://github.com/Aryan-Kumar47' target='_blank'>
              <FaGithub size={70} className='hover:scale-[1.05] transition-[scale]'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper( Contact , "contact")