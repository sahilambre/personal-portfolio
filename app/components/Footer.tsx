import React from "react";
import { TypewriterEffectSmooth } from "./magicui/typewriter-effect";
import { Send } from "lucide-react";
import GithubLogo from "@/public/github-icon.webp";
import LinkedInLogo from "@/public/linkedin-icon.webp";
import Image from "next/image";

const Footer = () => {
  const words = [
    { text: "Let's" },
    { text: "get" },
    { text: "in" },
    { text: "touch." },
    { text: "Contact Me.", className: "text-purple-500 dark:text-purple-500" },
  ];

  return (
    <div className="bg-black mt-0" id="contact">
      <div className="flex flex-col items-center justify-center h-[20rem]">
        <TypewriterEffectSmooth className="sm:text-4xl md" words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
          <button className="w-40 h-10 flex items-center justify-center rounded-xl bg-white text-black border border-black text-sm">
            <div className="flex items-center">
              <Image
                src={GithubLogo}
                alt="GitHub"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="hidden md:inline-block">
                <a
                  href="https://github.com/sahilambre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </span>
            </div>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm flex items-center justify-center">
            <div className="flex items-center">
              <Image
                src={LinkedInLogo}
                alt="LinkedIn"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="hidden md:inline-block">
                <a
                  href="https://www.linkedin.com/in/sahilambre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </button>
          <a
            href="mailto:sahil01ambre@gmail.com"
            className="w-40 h-10 flex items-center justify-center rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
          >
            Let's Connect <Send className="ml-2" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4 border-gray-700">
        <p className="text-white text-sm mb-2">
          Copyright © Sahil Mukesh Ambre 2024 ✨
        </p>
      </div>
    </div>
  );
};

export default Footer;
