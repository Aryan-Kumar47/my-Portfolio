import gsap, { Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'

const Whatido = () => {
  gsap.registerPlugin(ScrollTrigger)
  let para = useRef()
  useEffect(() => {
    const text = new SplitType(para , {types : 'words'})
    gsap.from(text.words , {
      scrollTrigger : {
        trigger : para,
        start : 'top 80%',
      },
      opacity : .2,
      stagger : .02,
      ease : Power3.easeIn,
    })
  })


  return (
    <section className=' h-full px-[5%] py-[4rem]'>
      <div className=' flex justify-center items-center w-full'>
        <div className=' w-full'>
          <div className=' margin-bottom'>
            <p className='mb-[30px] project-heading'>what i do</p>
          </div>
          <div className='whatido'>
            <p ref={el => para = el} className='reveal-type'>
              As a Full stack developer, my role revolves around crafting visual and interactive
              aspects of websites or web applications. I ensure seamless integration of the 
              interface with server-side functionalities. Additionally, my responsibilities
              include optimizing performance, ensuring cross-browser compatibility, and staying
              abreast of industry trends to deliver modern and engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whatido