import React from 'react';
import HeroImage from "../assets/IMG_20240115_114205.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full w-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-full">
            As a full-stack developer with expertise in the MERN stack,
            I have a passion for creating robust and scalable
            web applications that deliver seamless user experiences.
            With a strong foundation in front-end development using React and Redux,
            coupled with extensive experience in back-end development with Node.js and MongoDB,
            I am well-equipped to take on complex projects and deliver high-quality results.<br/><br/>

            If you're looking for a skilled full-stack developer with expertise in MERN stack,
            look no further. Let's connect and discuss how I can help bring your project to the next level.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center h-full w-2/3 md:w-1/2">
          <img src={HeroImage} alt="my profile" className="rounded-2xl w-full ml-16 " />
        </div>
      </div>
    </div>
  )
}

export default Home;
