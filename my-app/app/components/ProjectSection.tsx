"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Vortex } from "./ui/vortex";
const ProjectSection = () => {
  return (
    <Vortex
      particleCount={500}
      baseHue={200}
      baseSpeed={0.3}
      rangeY={300}
      baseRadius={1}
      backgroundColor="black"
      className="flex items-center flex-col justify-center px-2 md:px-10  w-full h-full"
    >
      <div className="flex flex-wrap w-full h-screen overflow-hidden justify-center">
        {/* <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Bloggy
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iure expedita beatae voluptatum ipsa fugit numquam
                reprehenderit quos voluptatem quis.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer> */}
      </div>
    </Vortex>
  );
};

export default ProjectSection;
