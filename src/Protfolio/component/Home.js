import React, { useEffect ,useRef} from 'react';
import SeactionWrapper from '../HOC/SectionWrapper';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { scrolling } from '../HOC/Scrollto';


const Home = () => {
  gsap.registerPlugin(ScrollTrigger)
  let headline1 = useRef()
  let headline2 = useRef()
  let button = useRef()

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger : {
        trigger : headline1,
        start : 'top 80px',
        scrub : 1,
      }
    })

    tl.to('.nav' ,
    {
      backdropFilter: 'blur(10px)',
    },0)
    .fromTo(headline1  ,{
      xPercent : 0
    } ,{
      xPercent: 150,
      duration : 5,
    }, '<')
    .fromTo(headline2  ,{
      xPercent : 0
    } ,{
      xPercent : -200,
      duration : 5,
    }, '<')
    .fromTo(button ,{
      xPercent : 0
    } ,{
      y : -300,
      duration : 5,
    }, '<')
  })




  return (
    <section className={`h-screen pt-[8rem] `}>
      <div className=' h-full px-[5%]'>
        <div className=' w-full max-w-[80rem] mx-auto h-full'>
          <div className=' h-full flex justify-center items-center flex-col mx-auto'>
            <div className='tracking-tight headline my-0  whitespace-nowrap' ref={el => headline1 = el}>
              Full Stack Developer
            </div>
            <div className='tracking-tight underline headline my-0  whitespace-nowrap' ref={el => headline2 = el}>
              & Designer
            </div>
            <div className=' cursor-pointer self-center mt-[9rem] inline-block py-4 px-5' ref={el => button = el}>
              <button className='button' onClick={() => scrolling('project')}>
                  <p className=' whitespace-nowrap'>Project</p>
              </button>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default SeactionWrapper(Home , "home")