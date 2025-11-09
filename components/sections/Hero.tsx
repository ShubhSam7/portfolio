"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// Load Google Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const Hero = () => {
  return (
    <div className="pt-20 md:pb-4 md:pt-24 md:pb-8 md:min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-8 gap-2 md:gap-8">
      <div
        className={`flex flex-col gap-y-3 md:gap-y-4 font-bold text-[var(--color-black)] ${playfair.className} text-center md:text-left`}
      >
        <div className="text-3xl md:text-4xl">
          Hi, I am <span className="text-[var(--color-yellow)]">Shubh</span>{" "}
        </div>
        <div className="font-medium text-base md:text-xl hidden md:block">
          I build clean, performant, and meaningful digital experiences.
        </div>
        <div className="font-medium text-base md:text-xl hidden md:block">
          From sleek websites to scalable software — I craft solutions that work
          beautifully.
        </div>
        <div className="flex gap-x-5">
        <div className="hidden md:flex justify-center md:justify-start mt-2 md:mt-0">
          <a
            href="#projects"
            className="inline-flex items-center md:gap-3 px-8 py-5 bg-[var(--color-orange)] text-[var(--color-black)] text-xl font-semibold font-sans rounded-full shadow-md hover:shadow-xl hover:scale-105 hover:bg-[var(--color-yellow)] transition-all duration-300"
          >
            See my work
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10H16M16 10L10 4M16 10L10 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="hidden md:flex justify-center md:justify-start mt-2 md:mt-0">
          <a
            href="#projects"
            className="inline-flex items-center md:gap-3 px-8 py-5 bg-[var(--color-orange)] text-[var(--color-black)] text-xl font-semibold font-sans rounded-full shadow-md hover:shadow-xl hover:scale-105 hover:bg-[var(--color-yellow)] transition-all duration-300"
          >
            Download my Resume
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V16M12 16L8 12M12 16L16 12M4 20H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        </div>
      </div>
      <div className="w-full md:w-auto max-w-sm md:max-w-none">
        <Image
          src="/hero-image.png"
          width={1000}
          height={1000}
          alt="Hero illustration"
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};
