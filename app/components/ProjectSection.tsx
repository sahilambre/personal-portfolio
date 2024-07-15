"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Vortex } from "./ui/vortex";
import ReactIcon from "@/public/react.webp";
import Firebase from "@/public/firebase.webp";
import Bloggy from "@/public/bloggy.webp";
import Writeit from "@/public/writeit.webp";
import Portfolio from "@/public/portfolio.webp";
import Jobspotlight from "@/public/jobspotlight.webp";
import Sidekick from "@/public/Sidekick.webp";
import Image from "next/image";
const ProjectSection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-16 w-screen bg-black"
      id="projects"
    >
      <div className="text-white text-4xl">
        CHECKOUT SOME OF MY{" "}
        <span className="text-purple-500 font-semibold underline underline-offset-8">
          &nbsp;PROJECTS.
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        <PinContainer
          title="https://github.com/sahilambre/bloggy"
          href="https://github.com/sahilambre/bloggy"
        >
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
            onClick={() => window.open("https://github.com/sahilambre/bloggy")}
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Bloggy
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                React, Firebase, Javascript <br />
                &nbsp;
              </span>
            </div>

            <Image
              src={Bloggy}
              className="flex flex-1 w-full rounded-lg mt-4 "
              alt="bloggy-img"
            />
          </div>
        </PinContainer>
        <PinContainer
          title="https://github.com/sahilambre/Blog-App"
          href="https://github.com/sahilambre/Blog-App"
        >
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
            onClick={() =>
              window.open("https://github.com/sahilambre/Blog-App")
            }
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Write.it
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Nodejs, Expressjs, Ejs, MongoDB <br />
                &nbsp;
              </span>
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <Image
              src={Writeit}
              className="flex flex-1 w-full rounded-lg mt-4 "
              alt="writeit-img"
            />
          </div>
        </PinContainer>
        <PinContainer
          title="https://github.com/sahilambre/CS555-FinalProject"
          href="https://github.com/sahilambre/CS555-FinalProject"
        >
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
            onClick={() =>
              window.open("https://github.com/sahilambre/CS555-FinalProject")
            }
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              SIDEKICK
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                React, MongoDB, Expressjs, Handlebars
              </span>
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <Image
              src={Sidekick}
              className="flex flex-1 w-full rounded-lg mt-4 border border-slate-700"
              alt="bloggy-img"
            />
          </div>
        </PinContainer>
      </div>
      <div className="flex md:flex-row flex-col gap-16">
        <PinContainer
          title="https://github.com/sahilambre/CS546-Group-26-Final-Project"
          href="https://github.com/sahilambre/CS546-Group-26-Final-Project"
        >
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
            onClick={() =>
              window.open(
                "https://github.com/sahilambre/CS546-Group-26-Final-Project"
              )
            }
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Job-spotlight
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Javascript, MongoDB, Expressjs, Handlebars, Bootstrap
              </span>
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <Image
              src={Jobspotlight}
              className="flex flex-1 w-full rounded-lg mt-4 border border-slate-700"
              alt="bloggy-img"
            />
          </div>
        </PinContainer>
        <PinContainer
          title="https://github.com/sahilambre/personal-portfolio"
          href="https://github.com/sahilambre/personal-portfolio"
        >
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
            onClick={() =>
              window.open("https://github.com/sahilambre/personal-portfolio")
            }
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Portfolio Website
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                React, Next.js, Typescript <br />
                &nbsp;
              </span>
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <Image
              src={Portfolio}
              className="flex flex-1 w-full rounded-lg mt-4 border border-slate-700"
              alt="bloggy-img"
            />
          </div>
        </PinContainer>
      </div>
    </div>
    // </Vortex>
  );
};

export default ProjectSection;
