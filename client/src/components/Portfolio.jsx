import React from 'react'
import estateMate from "../assets/estateMate.jpg";
import resumeBuilder from "../assets/resumeBuilder.jpeg";
import placementAssister from "../assets/placement-assistance745.png";
import chatBot from "../assets/chatbot.png";
import pawnShop from "../assets/pawnshop.jpg";

function Portfolio() {

  const Portfolios = [
      {
        id:1,
        src: estateMate
      },
      {
        id:2,
        src: resumeBuilder
      },
      {
        id:3,
        src: placementAssister
      },
      {
        id:4,
        src: chatBot
      },
      {
        id:5,
        src: pawnShop
      },
      {
        id:6,
        src: pawnShop
      },


  ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-centre w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            Portfolios.map(({id, src})=>(
              <div className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 h-44 w-full"/>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hower:scale-105">Demo</button>
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hower:scale-105">Code</button>
              </div>
            </div>
            ))
          }         
        </div>
      </div>
    </div>
  )
}

export default Portfolio