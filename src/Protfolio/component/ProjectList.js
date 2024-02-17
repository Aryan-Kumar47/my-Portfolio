import React, {useRef, useState} from 'react'
import './project.css'
import {projects} from '../constant/index'
import gsap, { Power3 } from "gsap";
import { scrolling } from '../HOC/Scrollto';

const ProjectList = () => {
  let previewImg = useRef()
  let projectss = useRef()
  let preview = useRef()
  const [currentIndex , setCurrentIndex] = useState()
  const isMobile = !window.matchMedia('only screen and (min-width:1100px)').matches


  const mouseEnter = () => {
    if(!isMobile){
      gsap.to(preview , .1 , {
        opacity:1,
        ease : Power3.easeIn
      })
    }
  }
  
  const mouseLeave = () => {
    if(!isMobile){
      gsap.to(preview , .1 , {
        opacity:0,
        ease : Power3.easeIn
      })
    }
  }
  const mouseMove = (e) => {
    const containerRect = projectss.getBoundingClientRect();
    gsap.fromTo(preview , {
      left : `${e.clientX - containerRect.left -70}px`,
      top : `${e.clientY - containerRect.top +40}px`,
    } , {
      left : `${e.clientX - containerRect.left -70}px`,
      top : `${e.clientY - containerRect.top +40}px`,
      ease : Power3.easeInOut
    })
  }

  const imageChange = (index) => {
    setCurrentIndex(projects[index].image)
    gsap.fromTo(previewImg , .2 , {
      translateY : '-250px'
    }, {
      translateY : '0px'
    })
  }


  return (

    <div className='body' >
      <div className='preview' ref={el => preview = el}>
        <img src={currentIndex} alt='project' className='preview-img' ref={el => previewImg = el}/>
      </div>
      <div className='containerr mb-10' onMouseOver={mouseMove} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseMove}>
        <ul className='projects' ref={el => projectss = el}>
          {
            projects.map((items , index) => (
              <li key={index} className=' hover:z-20 project lg:opacity-20 hover:text-[#fff]' data={items.image} 
                onMouseEnter={() => imageChange(index)} >
                {items.title}
              </li>
            ))
          }
        </ul>
      </div>
      <div className='z-20 cursor-pointer self-center inline-block py-4 px-5'>
          <button className='button' onClick={() => scrolling('project')}>
              <p className=' whitespace-nowrap'>see all project</p>
          </button>
      </div>
    </div>


  )
}

export default ProjectList
