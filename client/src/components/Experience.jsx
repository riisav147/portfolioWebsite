import React from 'react';
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import python from "../assets/python.png";


function Experience() {

  const techs =[
    {
      id:1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'    
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-green-500'    
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-sky-300'    
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-cyan-500'    
    },
    {
      id: 6,
      src: nodejs,
      title: 'NodeJS',
      style: 'shadow-green-600'    
    },
    {
      id: 7,
      src: mysql,
      title: 'MySql',
      style: 'shadow-blue-800'    
    },
    {
      id: 8,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500'    
    },
    {
      id: 9,
      src: java,
      title: 'Java',
      style: 'shadow-red-500'    
    }
  ]
  return (
    <div name="experience" className=" to black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-centre w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">


          {techs.map(({id,src,title,style})=>(
            <div 
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 bg-gray-50 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto"/>
            <p className="mt-4">{title}</p>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Experience