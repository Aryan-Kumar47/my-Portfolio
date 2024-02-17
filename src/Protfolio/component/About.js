
import React, { useRef , useEffect} from 'react'
import {gsap , Power3} from 'gsap'
import SectionWrapper from '../HOC/SectionWrapper'

const About = () => {
  let square = useRef()
  let squareViewport = useRef()
  let text = useRef()
  let whatimake = useRef()
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: squareViewport,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin : squareViewport,
        pinSpacing : true,
      }
    });
    tl.to(text.children[0] , {
      x:'100vw',
      delay : 1,
      duration : 2,
      ease: Power3.easeIn
    })
    .to(text.children[1], {
      x:'-100vw',
      delay : 1,
      duration : 2,
      ease: Power3.easeIn
    },.1)
    .to(text.children[2], {
      x:'100vw',
      delay : 1,
      duration : 2,
      ease: Power3.easeIn
    },.2)
    .to(whatimake , {
      y : -300,
      duration : 2,
    },)
    // changing size
    .to(square.children,{
      width : '50%',
      height : '100vh',
      duration : 4,
      ease: Power3.easeIn
    },1)
    .to(square.children, {
      width : '120vw',
      duration : 4,
      ease: Power3.easeIn
    })
    // changing color
    .to(`body`,{
      backgroundColor : '#E8E2DA',
      color : '#2E2A27',
      ease : Power3.easeIn
    })
    .to(`.nav `,{
      color : '#2E2A27',
      ease : Power3.easeIn,
      duration : 1
    },"<")
    .to('.line' ,{
      background : "#2E2A27",
      ease : Power3.easeIn,
      duration : 1
    }, "<")
    .from(square.children[0].children[0] , {
      opacity: 0,
      y : '100%',
      ease : Power3.easeIn
    });
    })
  
  return (
    <section className=' h-screen circle1 relative' ref={el => squareViewport = el}>
      <div className=' h-full'>
        <div className=' py-[4rem] px-[5%] h-full'>
          <div className=' flex justify-center items-center flex-col h-full w-full' >
          <div className=' margin-bottom'>
            <p className='mb-[30px] project-heading' ref={el => whatimake = el}>what i make</p>
          </div>
            <div ref={el => text = el} className='z-[1]'>
              <div className='headline'>Responsive</div>
              <div className='headline'>Interactive</div>
              <div className='headline'>Stylish</div>
            </div>
            <div className='z-0 flex justify-center items-center h-screen w-screen absolute left-0 top-0' ref={el => square = el}>
              <div className='flex justify-center items-center h-0 w-0 bg-[#E8E2DA]'>
                <p className='headline text-[#2E2A27] uppercase whitespace-nowrap tracking-tight'>
                  technologies i know
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper( About , "skills")