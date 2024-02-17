import React from 'react'
import {tech} from '../constant/index'
import SectionWrapper from '../HOC/SectionWrapper'

const Tech = () => {

  return (
    <section className=' h-full px-[5%] py-[4rem]'>
          <div className=''>
            <div className=' flex flex-col  py-[6.18em]'>
              <div className=' flex flex-wrap justify-center items-center w-[82em] max-w-full'>
                {
                  tech.map((item , index) => (
                    <div key={index} className={`m-[0.4em] py-[0.6em] px-[1.82em] border border-[#BCB7B0] rounded-2xl transition-colors duration-200 ${item.important ? 'text-[#E8E2DA] bg-[#2E2A27]' : 'text-[#2E2A27] bg-[#E8E2DA]'}`}>
                      <p className='techicon'>{item.title}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
    </section>
  )
}

export default SectionWrapper( Tech , "tech")
