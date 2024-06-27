import React,{useRef, useState} from 'react'
import { Skills} from './projectdata.js';
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { FaCode } from "react-icons/fa6";
import api from "../../assets/projects/api.png"
import auth from "../../assets/projects/auth.png"
import airbnb from "../../assets/projects/airbnb.png"
import ecommerce from "../../assets/projects/ecommerce.png"
import weather from "../../assets/projects/weather.png"
import emi from "../../assets/projects/emi.png"
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
   <section className='container mx-auto mt-20 md:mt-44'>
    <motion.h3
      initial={{ rotate: 180, opacity: 0 }}
      whileInView={{ rotate: 360, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ root: scrollref }}
    className= "text-xl mt-10 flex justify-center md:text-5xl text-white font-bold ">My <span className="text-green-400">Skills</span> </motion.h3>
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
    <div className='mt-20 md:mt-44' ref={scrollref} >
    <motion.h3
      initial={{ rotate: 180, opacity: 0 }}
      whileInView={{ rotate: 360, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ root: scrollref }}
    className= "text-xl mt-10 text-center md:text-5xl text-white font-bold ">My <span className="text-green-400">Projects</span> </motion.h3>

    {/* projets card */}
    <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollref }}
    className=' md:mt-14 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  gap-x-6 gap-y-10 cursor-pointer text-white text-center place-items-center'>

<motion.div class="parent" variants={item}>
        <div class="card">
            <div class="glass"></div>
            <div class="content">
            <img src={api} alt="api project" className='lg:w-[18rem] mx-auto' />
            </div>
            <div class="bottom">
                
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                    <a href="https://github.com/bava-bahurdeen/Single-api-creation" target="_blank">
                    <FaCode className='svg'/></a>
                       </button>
                       <span className='title'>Api Project</span>
 
                </div>
             
            </div>
        </div>
    </motion.div>
    <motion.div class="parent" variants={item}>
        <div class="card">
            <div class="glass"></div>
            <div class="content">
            <img src={auth} alt="auth project" className='md:w-[11.5rem] lg:w-[16rem] mx-auto' />
            </div>
            <div class="bottom">
                
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                    <a href="https://github.com/bava-bahurdeen/Authentication-mern-app" target="_blank">
                    <FaCode className='svg'/></a>
                       </button>
                       <span className='title'>Authentication Project</span>

                </div>
             
            </div>
        </div>
    </motion.div>

    <motion.div class="parent" variants={item}>
        <div class="card">
            <div class="glass"></div>
            <div class="content">
            <img src={ecommerce} alt="ecommerce"  className='lg:w-[19rem] mx-auto' />
            </div>
            <div class="bottom">
                
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                    <a href="https://github.com/bava-bahurdeen/nostra-ecommerce-webapp" target="_blank">
                    <FaCode className='svg'/></a>
                       </button>
                     
                       <span className='title'>Ecommerce Project</span>

                </div>
             
            </div>
        </div>
    </motion.div>

    <motion.div class="parent" variants={item}>
        <div class="card">
            <div class="glass"></div>
            <div class="content">
            <img src={airbnb} alt="api project" className='md:w-[9rem] lg:w-[13rem] mx-auto' />
            </div>
            <div class="bottom">
                
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                      <a href="https://github.com/bava-bahurdeen/Bootstrap-airbnb-webapp" target="_blank">
                       <FaCode className='svg'/></a>
                       </button>
                       <span className='title'>Airbnb Clone Project</span>

                     
                </div>
             
            </div>
        </div>
    </motion.div>

    <motion.div class="parent" variants={item}>
        <div class="card">
            <div class="glass"></div>
            <div class="content">
            <img src={emi} alt="emi calculator" className='md:w-[11rem] lg:w-[15rem] mx-auto' />
            </div>
            <div class="bottom">
                
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                    <a href="https://github.com/bava-bahurdeen/EMI-calculator" target="_blank">
                    <FaCode className='svg'/></a>
                       </button>
                       <span className='title'>Emi Calculator</span>

                     
                </div>
             
            </div>
        </div>
    </motion.div>

    <motion.div class="parent" variants={item}>
        <div class="card">
            <div class="glass"></div>
            <div class="content">
            <img src={weather} alt="emi project" className='md:w-[11rem] lg:w-[15rem] mx-auto' />
               
            </div>
            <div class="bottom">
                
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                    <a href="https://github.com/bava-bahurdeen/React-Weather-web-app "target="_blank">
                    <FaCode className='svg'/></a>
                       </button>
                       <span className='title'>Weather App Project</span>
                     
                </div>
             
            </div>
        </div>
    </motion.div>

    

  </motion.div>
  
    </div>

   </section>
  )
}
