import React, { useRef } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { TbMailShare } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiUserLocationLine } from "react-icons/ri";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import contact from "../../assets/contact/graphic-contact.png";
import { useState } from "react";

export default function Contact() {
  const scrollref = useRef(null);
  const [Hover,setHover]=useState(false)
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },

    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div ref={scrollref} className="mt-20 md:mt-44 container">
      <motion.h3
        initial={{ rotate: 180, opacity: 0 }}
        whileInView={{ rotate: 360, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ root: scrollref }}
        className="text-xl mb-10 flex   justify-center md:text-5xl text-white font-bold mt-10"
      >
        Reach<span className="text-green-400">Me</span>{" "}
      </motion.h3>
      <div className="flex  mx-auto lg:flex-row flex-col  lg:items-start justify-center  ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ root: scrollref }}
          className=""
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            layout="vertical"
            className="!max-w-xl "
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              className="!text-white "
            >
              <Input
                className="!p-2 !font-extrabold  placeholder:!text-green-400 !border-4 !border-green-400 focus:!border-green-400 md:!w-96"
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input
                className="!p-2 !text-white !font-extrabold  placeholder:!text-green-400 !border-4 !border-green-400 focus:!border-green-400 md:!w-96"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name={["user", "number"]}
              label="Number"
             
            >
              <InputNumber
                className="!p-1 !text-white !font-extrabold  placeholder:!text-green-400 !border-4 !border-green-400 focus:!border-green-400 md:!w-96"
                placeholder="Phone"
              />
            </Form.Item>

            <Form.Item name={["user", "introduction"]} label="Message">
              <Input.TextArea
                autoSize={{ minRows: 6 }}
                className="!p-2 placeholder:!text-green-400  !font-extrabold !border-4 !border-green-400 focus:!border-green-400 md:!w-[50rem]"
                placeholder="Message"
              />
            </Form.Item>
            <Form.Item>
            <Button
            htmlType="submit"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className=" !relative !overflow-hidden  !border !bg-transparent !w-40  !rounded-xl !p-5  !duration-300 !mt-2   !border-green-400 !text-green-400 !font-semibold  "
            
            >
             Nice send me
       
                {Hover && (
                  <motion.div
                    initial={{ x:0, rotate: 45 }} // Set initial rotation to 0 degrees
                    animate={{ x: 200, rotate: 45 }} // Animate to 45 degrees rotation
                    exit={{ x: 0, rotate: 45 }} // Exit with 0 degrees rotation
                    transition={{ duration: 0.5 }}
                    className="bg-white w-4 h-32 absolute -top-10 -left-4 rounded-full"
                  ></motion.div>
                )}
              
            </Button>
             
            </Form.Item>
          </Form>
        </motion.div>

        <div
         
          className="text-white lg:space-y-6 lg:mt-24 flex lg:flex-col flex-wrap gap-4    "
        >
          <div className="flex  gap-2 items-center cursor-pointer ">
            <TbMailShare className="text-white size-4 md:size-8 hover:text-green-400 " />
            <span className="text-xs md:text-base hover:text-green-400">
              <a href="mailto:bavabahurdeen147@gmail.com">
                bavabahurdeen147@gmail.com
              </a>
            </span>
          </div>

          <div className="flex gap-2 items-center cursor-pointer  ">
            <IoIosPhonePortrait className="text-white size-4 md:size-8 hover:text-green-400" />
            <span className="text-xs md:text-base  hover:text-green-400">
              <a href="tel:+916369239046">+916369239046</a>
            </span>
          </div>

          <div className="flex gap-2 items-center cursor-pointer ">
            <RiUserLocationLine className="text-white size-4 md:size-8 hover:text-green-400" />
            <span className="text-xs md:text-base hover:text-green-400">
              K.pallivasal
            </span>
          </div>
          <div className=" mt-3  flex items-center gap-2 justify-center md:justify-start  ">
            <a href="https://in.linkedin.com/in/bavabahurdeen" target="_blank">
              <LiaLinkedin className="size-10 cursor-pointer  hover:text-green-400" />
            </a>
            <a href="https://github.com/bava-bahurdeen" target="_blank">
              <FaGithub className="size-7 cursor-pointer hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
