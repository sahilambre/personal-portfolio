"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Vortex } from "./ui/vortex";
const ProjectSection = () => {
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
            EXPLORE MY LATEST{" "}
            <span className="text-purple-500 font-semibold underline underline-offset-8">
              &nbsp;PROJECTS.
            </span>
          </h1>
        </div>
      </Vortex>
    </div>
  );
};

export default ProjectSection;

{
  /* <PinContainer
title="/ui.aceternity.com"
href="https://twitter.com/mannupaaji"
>
<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-white rounded-lg">
  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  text-red-300">
    Bloggy
  </h3>
  <div className="text-base !m-0 !p-0 font-normal">
    <span className="text-slate-500 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Praesentium iure.
    </span>
  </div>
  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
</div>
</PinContainer> */
}
