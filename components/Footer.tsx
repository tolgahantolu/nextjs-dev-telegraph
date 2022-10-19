import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaStackOverflow,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-3 flex items-center justify-between w-full h-auto text-headline-color border-t border-gray-600">
      <ul className="m-0 flex items-center gap-x-4">
        <li>
          <Link href="https://www.linkedin.com/in/tolgahant/">
            <a className="text-xl md:text-2xl lg:text-3xl">
              <FaLinkedinIn />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/tolgahantolu">
            <a className="text-xl md:text-2xl lg:text-3xl">
              <FaStackOverflow />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/tolgahantolu">
            <a className="text-xl md:text-2xl lg:text-3xl">
              <FaGithub />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/tolgahantolu">
            <a className="text-xl md:text-2xl lg:text-3xl">
              <FaCodepen />
            </a>
          </Link>
        </li>
      </ul>

      <p className="text-headline-color text-sm md:text-lg lg:text-xl font-medium">
        &copy; Tolgahan Tolu
      </p>
    </footer>
  );
};

export default Footer;
