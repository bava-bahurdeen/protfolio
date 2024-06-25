import React,{useRef, useState} from 'react'
import { Skills} from './projectdata.js';
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { FaCode } from "react-icons/fa6";
import api from "../../assets/projects/api.png"
import auth from "../../assets/projects/auth.png"
import airbnb from "../../assets/projects/airbnb.png"
import ecommerce from "../../assets/projects/ecommerce.png"
import restarunt from "../../assets/projects/restaurant.png"

export default function Project() {
  const [Isopen,setIsopen]=useState(false)
  const scrollref=useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,

    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
       
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
   <section className='container mx-auto'>
    <motion.h3
      initial={{ rotate: 180, opacity: 0 }}
      whileInView={{ rotate: 360, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ root: scrollref }}
    className= "text-xl mt-10 flex justify-center md:text-5xl text-white font-bold font-sans">My <span className="text-green-400">Skills</span> </motion.h3>
    <div className='mt-5 lg:mt-10'>
<Slider {...settings}>

  {Skills.map((item)=>{
    return(
      <div  key={item.id} className='flex items-center align-middle'>
 
      <div  className='cursor-pointer text-center w-28'>
        <img className='size-40 object-contain' src={item.icon} alt="icon"  />
      
        </div>
      </div>
    )
  })}



</Slider>
    </div>
    <div className='mt-10' ref={scrollref}>
    <motion.h3
      initial={{ rotate: 180, opacity: 0 }}
      whileInView={{ rotate: 360, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ root: scrollref }}
    className= "text-xl mt-10 text-center md:text-5xl text-white font-bold font-sans">My <span className="text-green-400">Projects</span> </motion.h3>

    {/* projets card */}
    <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollref }}
    className=' md:mt-14 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  gap-x-6 gap-y-10 cursor-pointer text-white text-center place-items-center'>

    <motion.div   variants={item} className='relative circle !border-[3px] flex-row  p-3  rounded-2xl w-60  md:w-9/12'>
      <img src={api} alt="api project" className='lg:w-[18rem] mx-auto' />
      <p className='text-xs md:text-base font-semibold'>Movie Api Project</p>
      <FaCode className='hover:text-green-400 text-lg'/>

      <motion.div
      className="bg-white w-9/12 hidden h-48 top-8 left-10 absolute" >

      </motion.div>
</motion.div>
    <motion.div variants={item} className='circle !border-[3px]  flex-row   p-3  rounded-2xl w-60 md:w-9/12 '>
    <img src={auth} alt="auth project" className='md:w-[11.5rem] lg:w-[16rem] mx-auto' />
    <p className='text-xs md:text-base font-semibold'>Authentication Project</p>
    <FaCode className='hover:text-green-400 text-lg'/>
</motion.div>
    <motion.div variants={item} className='circle !border-[3px]  flex-row  p-3  rounded-2xl w-60 md:w-9/12'>
    <img src={ecommerce} alt="ecommerce"  className='lg:w-[19rem] mx-auto' />
    <p className='text-xs md:text-base font-semibold'>Nosra Ecommerce Project</p>
    <FaCode className='hover:text-green-400 text-lg'/>
</motion.div>
    <motion.div variants={item} className='circle !border-[3px]  flex-row  p-3  rounded-2xl w-60 md:w-9/12 '>
    <img src={airbnb} alt="api project" className='md:w-[9rem] lg:w-[13rem] mx-auto' />
    <p className='text-xs md:text-base font-semibold'>Airbnb clone Project</p>
    <FaCode className='hover:text-green-400 text-lg'/>

  </motion.div>
    <motion.div variants={item} className='circle !border-[3px]  flex-row  p-3  rounded-2xl w-60 md:w-9/12'>
    <img src={restarunt} alt="api project" className='md:w-[11rem] lg:w-[15rem] mx-auto' />
    <p className='text-xs md:text-base font-semibold'>Restarunt ui design Project</p>
    <FaCode className='hover:text-green-400 text-lg'/>

  </motion.div>
    <motion.div variants={item} className='  circle !border-[3px] w-60  p-3  rounded-2xl md:w-9/12 '>
    <img src={api} alt="api project" className='lg:w-[18rem] mx-auto' />
    <p className='text-xs md:text-base font-semibold'>Movie Api Project</p>
    <FaCode className='hover:text-green-400 text-lg'/>

    </motion.div>
    </motion.div>
    </div>
   </section>
  )
}
