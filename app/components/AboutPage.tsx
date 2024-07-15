"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import TextRevealByWord from "./magicui/text-reveal";

const AboutPage = () => {
  return (
    <>
      <div
        className="z-50  min-h-[16rem] items-center justify-center  dark:bg-black"
        id="about"
      >
        <TextRevealByWord text="Welcome to my corner of the web! I'm an enthusiastic and curious individual with a passion for exploring diverse topics and solving complex problems. This site is a reflection of my journey, filled with insights, ideas, and the occasional musing. I'm excited to share my thoughts and connect with like-minded individuals. Thanks for stopping by!" />
      </div>
    </>
  );
};

export default AboutPage;
