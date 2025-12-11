"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />

      {/* Glow circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-highlight/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-highlight/5 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-highlight/40 bg-highlight/10 text-highlight text-sm tracking-wide mb-6">
          <span className="block w-2 h-2 rounded-full bg-highlight animate-pulse"></span>
          100+ JavaScript Projects
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-4xl">
          Build Real-World
          <span className="text-highlight"> JavaScript Projects </span>
          and Master Modern Web Development

        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-neutral-300 max-w-2xl">
          Level up your JavaScript skills with beginner to advanced hands-on projects.
          Clean code, real use-cases, interactive examples, and open-source GitHub repository.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <Link
            href="#projects"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-md text-black font-semibold
              bg-highlight hover:bg-highlight/80 
              transition shadow-lg shadow-highlight/20
            "
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-md border border-white/20 
              text-white font-medium hover:bg-white/10
              transition
            "
          >
            GitHub Repository
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
