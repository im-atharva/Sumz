import React from "react";
import logoImg from "../assets/gg.png";
const FooterWithLogo = () => {
  return (
    <footer className="w-full mt-48 px-4 py-8 font-satoshi dark:bg-slate-50 dark:text-gray-900">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <img src={logoImg} alt="sumz_logo" className="w-28 object-contain" />

          <ul className="flex flex-wrap flex-col items-center space-x-4 sm:space-x-8">
            <li className="font-satoshi">Atharva Meshram</li>
            <li className="font-satoshi">atharva.g.meshram@gmail.com</li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/im_atharvam/?hl=en"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/im-atharva"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterWithLogo;
