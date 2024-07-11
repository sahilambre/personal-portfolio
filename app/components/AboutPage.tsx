"use client";
import React from "react";
import { Vortex } from "./ui/vortex";

const AboutPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        particleCount={500}
        baseHue={200}
        baseSpeed={0.3}
        rangeY={10}
        baseRadius={1}
        backgroundColor="black"
        className=" w-full h-full"
      >
        <div className="flex justify-center pt-8">
          <h1 className="text-white text-4xl">
            ABOUT{" "}
            <span className="text-purple-500 font-semibold underline underline-offset-8">
              &nbsp;ME.
            </span>
          </h1>
        </div>
      </Vortex>
    </div>
  );
};

export default AboutPage;
