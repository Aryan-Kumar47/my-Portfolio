import React, {  useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectList from './ProjectList'
import SeactionWrapper from '../HOC/SectionWrapper';


const Project = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {

  })

  return (
    <section className=' h-full px-[5%] py-[4rem]'>
      <div className=' flex justify-center items-center w-full'>
        <div className=' w-full'>
          <div className=' margin-bottom'>
            <p className='mb-[30px] project-heading'>what i made</p>
          </div>
          <ProjectList/>
        </div>
      </div>
    </section>
  )
}

export default SeactionWrapper( Project  , 'project')