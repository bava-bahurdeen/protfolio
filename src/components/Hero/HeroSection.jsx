import React, { useState } from "react";
import developer from "../../assets/Hero_images/developer.png";
import seo from "../../assets/Hero_images/SEO.png";
import blockchain from "../../assets/Hero_images/blockchain.png";
import { motion} from "framer-motion";
import { Carousel } from "antd";
export default function HeroSection() {
const [Hover,setHover]=useState(false)
  return (
    <section className="container mx-auto md:h-svh overflow-hidden">
      <Carousel
        autoplay={true}
        fade={"fade"}
        className="text-white lg:mt-10 "
        autoplaySpeed={3000}
      >
        {/* 1st slide */}
        <div>
          {/* text div */}
          <div className="grid place-content-center float-left lg:pt-36 ">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Hey there!
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="text-xl md:text-5xl font-extrabold "
            >
              Im a <span className="text-green-400">Full Stack Developer</span>
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="border w-36 overflow-hidden relative rounded-3xl p-2 mx-auto  duration-300 mt-4 border-green-400 text-green-400 font-semibold"
            >
              Connect With Me
              {Hover && (
                  <motion.div
                    initial={{ x:0, rotate: 45 }} // Set initial rotation to 0 degrees
                    animate={{ x: 200, rotate: 45 }} // Animate to 45 degrees rotation
                    exit={{ x: 0, rotate: 45 }} // Exit with 0 degrees rotation
                    transition={{ duration: 0.5 }}
                    className="bg-white w-4 h-32 absolute -top-10 -left-4 rounded-full"
                  ></motion.div>
                )}
              
            </motion.button>
          </div>
          {/* image div */}
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,}}
            className="float-right inline-block"
          >
            <img src={developer} alt="devloper" />
          </motion.div>
        </div>
        {/* 2nd slide */}
        <div>
          {/* text div */}
          <div className="grid place-content-center float-left lg:pt-36 ">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              Hey there!
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 3 }}
              className="text-xl md:text-5xl font-extrabold "

            >
              Im a{" "}
              <span className="text-green-400">Blockchain Enthusiastic</span>
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="border w-36 overflow-hidden relative rounded-3xl p-2 mx-auto  duration-300 mt-4 border-green-400 text-green-400 font-semibold"
            >
              Connect With Me
              {Hover && (
                  <motion.div
                    initial={{ x:0, rotate: 45 }} // Set initial rotation to 0 degrees
                    animate={{ x: 200, rotate: 45 }} // Animate to 45 degrees rotation
                    exit={{ x: 0, rotate: 45 }} // Exit with 0 degrees rotation
                    transition={{ duration: 0.5 }}
                    className="bg-white w-4 h-32 absolute -top-10 -left-4 rounded-full"
                  ></motion.div>
                )}
              
            </motion.button>
          </div>
          {/* image div */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="float-right inline-block"
          >
            <img src={blockchain} alt="blockchain" />
          </motion.div>
        </div>
        {/* 3rd slide */}

        <div>
          {/* text div */}
          <div className="grid place-content-center float-left lg:pt-36">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 6 }}
            >
              Hey there!
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 6 }}
              className="text-xl md:text-5xl font-extrabold "

            >
              Im a <span className="text-green-400">SEO Analyst</span>
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="border w-36 overflow-hidden relative rounded-3xl p-2 mx-auto  duration-300 mt-4 border-green-400 text-green-400 font-semibold"
            >
              Connect With Me
              {Hover && (
                  <motion.div
                    initial={{ x:0, rotate: 45 }} // Set initial rotation to 0 degrees
                    animate={{ x: 200, rotate: 45 }} // Animate to 45 degrees rotation
                    exit={{ x: 0, rotate: 45 }} // Exit with 0 degrees rotation
                    transition={{ duration: 0.5 }}
                    className="bg-white w-4 h-32 absolute -top-10 -left-4 rounded-full"
                  ></motion.div>
                )}
              
            </motion.button>
          </div>
          {/* image div */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 6 }}
            className="float-right inline-block"
          >
            <img src={seo} alt="seo" />
          </motion.div>
        </div>
      </Carousel>
    </section>
  );
}
