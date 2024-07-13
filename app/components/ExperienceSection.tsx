import React from "react";
import { Meteors } from "./magicui/meteors";
import NumberTicker from "./magicui/number-ticker";
// import WordTicker from "./magicui/WordTicker;

const ExperienceSection = () => {
  return (
    <div className="bg-black h-auto pt-28">
      <div className="flex justify-center">
        <h1 className="text-white text-4xl pt-20 sm:pt-8">
          MY{" "}
          <span className="text-purple-500 font-semibold underline underline-offset-8">
            &nbsp;EXPERIENCE.
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:gap-20 justify-center items-center py-20 gap-8">
        {/* first card */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full relative max-w-xs md:max-w-md">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 transform scale-[0.85] rounded-lg blur-2xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-xl text-white mb-2 relative z-50">
                Trivia Softwares <br />
                <span className="font-thin">
                  Dec <NumberTicker value={19} /> - March{" "}
                  <NumberTicker value={20} />{" "}
                </span>
              </h1>

              <h2 className="italic text-lg text-white mb-4 relative z-50">
                Intern
              </h2>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                At Trivia Softwares, Mumbai, India, I led Python application
                projects, integrating GUI and database connectivity. Developed a
                Student Management System using Tkinter, enhancing efficiency by
                20% through intuitive design and functional implementation.
              </p>

              {/* Meaty part - Meteor effect */}
              <Meteors number={50} />
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full relative max-w-xs md:max-w-md">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 transform scale-[0.85] rounded-lg blur-2xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-xl text-white mb-2 relative z-50">
                Dezegnolics Pvt. Ltd. <br />
                <span className="font-thin">
                  Feb <NumberTicker value={21} /> - March{" "}
                  <NumberTicker value={21} />{" "}
                </span>
              </h1>

              <h2 className="italic text-lg text-white mb-4 relative z-50">
                Intern
              </h2>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                At Dezignolics Pvt. Ltd., Mumbai, India, I extensively trained
                in AI/ML concepts using Python. Achieved a 15% accuracy boost in
                house price prediction models through meticulous tuning and a
                35% performance enhancement via advanced data processing and
                feature engineering.
              </p>

              {/* Meaty part - Meteor effect */}
              <Meteors number={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
