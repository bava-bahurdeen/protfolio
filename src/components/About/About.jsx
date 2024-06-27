import React, { useRef, useState } from "react";
import bava from "../../assets/About_image/bava.png";
import school from "../../assets/About_image/school-building.png";
import clg from "../../assets/About_image/college.png";
import mern from "../../assets/About_image/mern.png";
import Developer from "../../lottie/developer.json";
import education from "../../lottie/Animation - 1719290551866.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
export default function About() {
  const scrollref = useRef(null);
  const scrollref2 = useRef(null);
  const scrollref3 = useRef(null);
  const [Hover,setHover]=useState(false)

  return (
    <section className="container mx-auto  ">
      <div
        ref={scrollref}
        className=" text-white flex lg:justify-around justify-center flex-col  lg:flex-row items-center mt-20 md:mt-44"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ root: scrollref }}
          className=" circle w-fit shadow-2xl shadow-slate-500  rounded-full "
        >
          {/* my image */}
          <img
            src={bava}
            alt="my image"
            className="rounded-full w-40 md:w-80 "
          />
        </motion.div>
        {/* about details */}
        <div className=" text-center lg:text-start lg:w-6/12">
          <motion.h2
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ root: scrollref }}
            className=" text-xl md:text-5xl font-bold"
          >
            About <span className="text-green-400">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ root: scrollref }}
            className="font-semibold text-xs md:text-base text-gray-400 mt-4"
          >
            Hello! I'm a dedicated and passionate MERN Stack Developer with a
            Bachelor's degree in Information Technology. My expertise lies in
            building robust and scalable web applications using MongoDB,
            Express.js, React, and Node.js. I have a strong foundation in
            software development principles and a keen interest in emerging
            technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ root: scrollref }}
            className="font-semibold text-xs md:text-base text-gray-400 mt-4"
          >
            Currently diving into the world of blockchain, I am exploring its
            potential to revolutionize industries through decentralized
            applications and smart contracts. My learning journey includes
            understanding blockchain fundamentals, developing smart contracts,
            and experimenting with various blockchain platforms like Ethereum.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ root: scrollref }}
            className="font-semibold text-xs md:text-base text-gray-400 mt-4"
          >
            In addition to my development skills, I have a solid grasp of Search
            Engine Optimization (SEO) principles. This enables me to ensure that
            the websites and applications I develop are optimized for search
            engines, enhancing their visibility and reach.
          </motion.p>
          <div className="mt-3 flex items-center gap-2 justify-center md:justify-start  ">
            <a href="https://in.linkedin.com/in/bavabahurdeen" target="_blank">
              <LiaLinkedin className="size-10 cursor-pointer  hover:text-green-400" />
            </a>
            <a href="https://github.com/bava-bahurdeen" target="_blank">
              <FaGithub className="size-7 cursor-pointer hover:text-green-400" />
            </a>
          </div>
          <button
            htmlType="submit"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className=" !relative !overflow-hidden w-40 mt-5 !border !bg-transparent  !rounded-xl p-2 !duration-300    !border-green-400 !text-green-400 !font-semibold  "
            
            >
            Download CV
       
                {Hover && (
                  <motion.div
                    initial={{ x:0, rotate: 45 }} // Set initial rotation to 0 degrees
                    animate={{ x: 200, rotate: 45 }} // Animate to 45 degrees rotation
                    exit={{ x: 0, rotate: 45 }} // Exit with 0 degrees rotation
                    transition={{ duration: 0.5 }}
                    className="bg-white w-4 h-32 absolute -top-10 -left-4 rounded-full"
                  ></motion.div>
                )}
              
            </button>
        </div>
      </div>
      {/* education */}
      <div ref={scrollref2} className="mt-20 md:mt-44">
        <motion.h2
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          viewport={{ root: scrollref2 }}
          className=" text-xl mt-10 flex justify-center md:text-5xl text-white font-bold"
        >
          Educ<span className="text-green-400">aion</span>
        </motion.h2>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 mt-10 ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={scrollref2}
            className="w-80 "
          >
            <Lottie animationData={education} />
          </motion.div>
          <div className="text-white space-y-6">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={scrollref2}
              className="flex items-center mt-10 gap-x-4 rounded-lg !border-2 shadow-sm shadow-slate-100 circle lg:h-24 lg:w-10/12 p-3"
            >
              <img src={school} className="max-w-10 lg:w-28" alt="school" />
              <div>
                <p className="text-xs md:text-xl font-semibold">
                  Sri Meenakshi Sundhreswarar Higher Sec School
                </p>
                <p className=" ">2016-2020</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={scrollref2}
              className="flex items-center gap-x-4 rounded-lg !border-2 shadow-sm shadow-slate-100 circle lg:h-24 lg:w-10/12 p-3"
            >
              <img src={clg} className="max-w-10 lg:w-28" alt="school" />
              <div>
                <p>2020-2023</p>
                <p className="text-xs md:text-xl font-semibold">
                  JJ College of Arts and Science
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={scrollref2}
              className="flex items-center gap-x-4 rounded-lg !border-2 shadow-sm shadow-slate-100 circle lg:h-24 lg:w-10/12 p-3"
            >
              <img src={mern} className="w-20" alt="school" />
              <div>
                <p>3 Months </p>
                <p className="text-xs md:text-xl font-semibold">
                  Mern Stack Development Course
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* experience */}
      <div ref={scrollref3} className="text-white mt-20 md:mt-44">
        <motion.h2
          initial={{ rotate: 180, opacity: 0 }}
          whileInView={{ rotate: 360, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ root: scrollref3 }}
          className=" text-xl mt-10 flex justify-center md:text-5xl text-white font-bold"
        >
          Exper<span className="text-green-400">ience</span>
        </motion.h2>
        <div className="grid place-items-center gap-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            ref={scrollref3}
            className="lg:w-6/12 mt-5 mx-auto"
          >
            <Lottie animationData={Developer} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            ref={scrollref3}
            className="w-fit flex  text-center p-4  shadow-md shadow-slate-200"
          >
            <div>
              <BsPersonWorkspace className="text-3xl" />
            </div>
            <div>
              <p className="text-xs md:text-base">Feb 2024 to present</p>
              <h2 className="md:text-2xl">
                Software<span className="text-green-400">Developer</span>
              </h2>
              <p className="text-xs md:text-base">Error Makes Clever</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
