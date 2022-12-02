import React from "react";
import WorkImg from "../images/riby-app.png";
import WorkImg2 from "../images/resized-ticket-app.png";
import WorkImg3 from "../images/liquid.png";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <div name="Projects" className="w-full ml:h-screen bg-black text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center">
        <Fade right>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              Projects
            </p>
            <p className="py-6">Checkout some of my recent projects</p>
          </div>
        </Fade>

        {/* cards */}
        <div className="grid ml:grid-cols-2 mg:grid-cols-3 gap-4">
          {/* cards container */}
          <div
            style={{
              backgroundImage: `url(${WorkImg})`,
              backgroundSize: "300px 210px",
            }}
            className="shadow-lg shadow-yellow-300 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-xl font-bold text-white p-6 flex ">
                Fintech company Website Revamp
              </span>
              <div className="pt-8 text-center">
                <a href="https://riby.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jayzrael/riby">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${WorkImg2})`,
              backgroundSize: "300px 210px",
            }}
            className="shadow-lg shadow-cyan-300 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex text-xl font-bold text-white p-3">
                CRM Dashboard for a Fintech company
              </span>
              <div className="pt-8 text-center">
                <a href="https://riby-ticketing-app.vercel.app/analytics">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jayzrael/riby-ticketing-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${WorkImg3})`,
              backgroundSize: "300px 210px",
            }}
            className="shadow-lg shadow-yellow-300 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                liquid login page
              </span>
              <div className="pt-8 text-center">
                <a href="https://liquid-login.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jayzrael/liquid-login">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
