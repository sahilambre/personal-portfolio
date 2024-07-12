"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { ArrowRight } from "lucide-react";
import WordRotate from "./magicui/word-rotate";

const LandingBg = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        particleCount={500}
        baseHue={200}
        baseSpeed={0.3}
        rangeY={10}
        baseRadius={1}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className=" absolute left-30 md:left-20">
          <WordRotate
            className="text-4xl font-bold text-black dark:text-white"
            words={["Hello! 👋🏼", "Namaste! 🙏🏼"]}
          />
          <h2 className="text-white text-2xl md:text-6xl font-semibold text-left">
            Sahil Mukesh Ambre
          </h2>
          <p className="text-white text-2xl">Software Developer</p>
          <button className="mt-5 px-4 py-2 rounded-md border border-white bg-black text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 flex items-center">
            Checkout my CV
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </Vortex>
    </div>
  );
};

export default LandingBg;
