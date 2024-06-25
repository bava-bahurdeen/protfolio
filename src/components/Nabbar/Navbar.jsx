import React, { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import {Menulinks} from "./menu.js"
import { AiOutlineClose } from "react-icons/ai";
import { motion,AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [Isopen,Setisopen]=useState(false)
  const headref=useRef(null)
  const toggleMenu=()=>{
    Setisopen(!Isopen)
  }
  const menuVariants = {
    open: {
      x: 0,
   
      opcity:1,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.5
      }
    },
    closed: {
      x: '-100%',
 
      opcity:0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.5
      }
    }
  };
useEffect(()=>{
const handlescroll=()=>{
  if(headref.current){
  if(window.scrollY>80){
    headref.current.setAttribute('data-sticked', 'true')
  }
  else{
    headref.current.setAttribute('data-sticked', 'false')
  }
  }
}
  window.addEventListener("scroll",handlescroll)

  return () => {
    window.removeEventListener('scroll', handlescroll)
  }
})
  return (
  
      <div    data-sticked="false" className="p-8  bg-black text-white shadow-white   sticky top-0 data-[sticked='true']:shadow z-50 lg:shadow">
       <nav className="flex items-center justify-between" ref={headref}>
<div className="w-fit relative overflow-hidden ">
  <h1 className="text-2xl font-bold overflow-hidden  z-50">Bava Bahurdeen</h1>

</div> 
        {/* menu links */}
        <div className="hidden lg:block">

          <ul className="flex  gap-32 " >
            {Menulinks.map((item)=>{
              return(
                <li key={item.id}><a href={item.link} className="text-white   hover:scale-125 cursor-pointer   hover:text-green-400 duration-300">{item.name}</a></li>
              )
            })}
            </ul>
        </div>
        {/* dark mode */}

          <div>

          <CiMenuBurger className={`block lg:hidden cursor-pointer text-2xl ${Isopen?"opacity-0":"opacity-10i"}`} onClick={()=>toggleMenu()}/>
          </div>
       
      
       </nav>
       {/* mobile menu */}
       <AnimatePresence>

<motion.div 
 initial={false}
 animate={Isopen ? 'open' : 'closed'}
 variants={menuVariants}
 exit={Isopen?'closed':'open'}
className="w-full h-svh    block lg:hidden z-50  dark:bg-gray-900  dark:text-white bg-gray-400 duration-200 absolute top-0 left-0 text-center pt-40">
  <ul >
    {Menulinks.map((item)=>{
      return(
        <li className="mt-10 cursor-pointer  font-semibold text-white dark:text-gray-400 hover:text-gray-900 duration-300 dark:hover:text-white" key={item.id}>{item.name}</li>
      )
    })}
   
    <AiOutlineClose onClick={()=>toggleMenu()} className="absolute top-10 right-10 text-white text-2xl cursor-pointer hover:text-gray-900  dark:text-gray-400 dark:hover:text-white"/>
  </ul>
</motion.div>
       </AnimatePresence>

     
    </div>
  );
}
// 04322221635
