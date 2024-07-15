"use client";
import React, { useState } from "react";
import { Vortex } from "./ui/vortex";
import { ArrowRight } from "lucide-react";
import WordRotate from "./magicui/word-rotate";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { color } from "framer-motion";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("sticky top-0 z-50 border-2 border-purple-500", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="#about">About </HoveredLink>
        <HoveredLink href="#skills">Skills </HoveredLink>
        <HoveredLink href="#projects">Projects </HoveredLink>
        <HoveredLink href="#experience">Experience </HoveredLink>
        <HoveredLink href="#contact">Contact </HoveredLink>
      </Menu>
    </div>
  );
}

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
        className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full relative"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Navbar className="absolute sm:text-sm text-md lg:max-w-2xl mx-auto mt-4 mb-4 rounded-full shadow-md " />
          <div className="text-center md:text-left">
            <div className="mt-20 flex justify-center items-center mb-4">
              {" "}
              {/* Adjusted margin top here */}
              <WordRotate
                className="text-xl md:text-3xl lg:text-4xl font-bold text-purple-500 dark:text-purple-500"
                words={["Hello! 👋🏼", "Namaste! 🙏🏼"]}
              />
            </div>
            <div className="flex justify-center">
              <h2 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold ">
                Sahil Mukesh Ambre
              </h2>
            </div>
            <div className="flex justify-center pt-8">
              <p className="text-white text-lg md:text-2xl">
                Software Developer
              </p>
            </div>
            <div className="flex justify-center">
              <button className="mt-5 px-4 py-2 rounded-md border border-white bg-black text-white text-sm md:text-base hover:shadow-2xl transition duration-200 flex items-center">
                Checkout my CV
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default LandingBg;
