import React from "react";
import gg from "../assets/gg.png";

const Hero = () => {
  return (
    <header
      className="w-full flex justify-center 
    items-center flex-col"
    >
      <nav
        className="flex justify-between 
        items-center w-full mb-10 pt-3"
      >
        <img src={gg} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/")}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Artificial Intelligence</span>
      </h1>
      <h2 className="desc">
        Unlock the power of AI with <b>Sumz</b>, an open-source article
        summarizer that can effortlessly transform lengthy and complex articles
        into clear & concise summaries!
      </h2>
    </header>
  );
};

export default Hero;
