import React, {useRef , useEffect } from 'react';
import './App.css';
import Home from './Protfolio/component/Home';
import Navbar from './Protfolio/component/Navbar';
import About from './Protfolio/component/About';
import Contact from './Protfolio/component/Contact';
import Tech from './Protfolio/component/Tech';
import Project from './Protfolio/component/Project';
import { ScrollTrigger } from 'gsap/all';
import gsap, { Power3 } from 'gsap'
import Whatido from './Protfolio/component/Whatido';
import Lenis from '@studio-freight/lenis';


function App() {
  let lineRef = useRef()
  let viewPort = useRef()

  useEffect(()=>{
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
    ScrollTrigger.create({
      trigger : viewPort,
      start : 'top top',
      end : 'bottom bottom',
      scrub : 1,
      animation : gsap.fromTo(lineRef , 2 , {
        width : '0%',
        ease : Power3.easeOut
      },
      {
        width : '99%',
        ease : 'linear'
      }),
      })
    })

  return (
      <div  className='relative p-1 bg-white/10' ref={el => viewPort = el}>
        <div className=' h-[1px] bg-[#ffffff] line fixed sm:top-[80px] top-[72px] z-20' ref={el => lineRef = el}/>
        <div className=' h-[1px] bg-[#ffffff] w-[99%] line fixed sm:top-[80px] top-[72px] z-20 opacity-40'/>
        <Navbar/>
        <Home/>
        <Whatido/>
        <Project/>
        <About/>
        <Tech/>
        <Contact/>
      </div>
  );
}
export default App;
