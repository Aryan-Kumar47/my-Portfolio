import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../style'
import { navLinks } from '../constant'
import Menu from '../assets/Menu'
import { scrolling } from '../HOC/Scrollto'

const Navbar = () => {
  const [toggle  , setToggle] = useState(false)

  return (
    <nav 
    className={`${styles.paddingX} nav w-full flex items-center py-5 fixed top-0 z-[99] select-none transition-colors tracking-widest`
     }
    >
      <div
        className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
          onClick={() => {
            scrolling('home')
          }}
          className={`text-2xl md:text-4xl font-[600] cursor-pointer flex`}
          >
          AryanKumar
        </Link>
        <ul className=' list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
                <li 
                key={link.id}
                onClick={() => scrolling(`${link.id}`)}
                className={`
                hover:opacity-20 transition-opacity text-[1rem] font-[800] cursor-pointer py-[5px] px-[12px]
                
                `}
                >
                    {link.title}
                </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
          className=' object-contain cursor-pointer'>
            <Menu setToggle = {setToggle} toggle={toggle}/>
          </div>
          <div
          className={`${!toggle ? " hidden" : 'flex'} flex p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=' list-none flex justify-end items-start flex-col gap-4'>
            {
              navLinks.map((link) => (
                <li key={link.id}
                className={`text-white font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  scrolling(`${link.id}`)
                  setToggle(!toggle)
                }}
                >
                  {link.title}
                </li>
              ))
            }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar