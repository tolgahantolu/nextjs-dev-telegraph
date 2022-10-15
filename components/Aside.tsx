import React from "react";
import Link from "next/link";
import { AiOutlineFire } from "react-icons/ai";
import { BiUpvote } from "react-icons/bi";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandNextjs,
} from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";

import { useSelector } from "react-redux";

const Aside = () => {
  const showAside = useSelector((state: any) => state.aside.showAside);

  return (
    <>
      {showAside && (
        <aside className="w-full h-full overflow-y-auto fixed top-[67px] left-0 bottom-0 bg-main-background">
          <div className="">
            <nav className="py-4">
              <ul>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <AiOutlineFire />
                      </span>
                      popular
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <BiUpvote />
                      </span>
                      most upvoted
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>

            <nav>
              <ul>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandHtml5 />
                      </span>
                      html
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandCss3 />
                      </span>
                      css
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandJavascript />
                      </span>
                      javascript
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <RiReactjsLine />
                      </span>
                      reactJS
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandNextjs />
                      </span>
                      nextJS
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <IoLogoNodejs />
                      </span>
                      nodeJS
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <GrGraphQl />
                      </span>
                      graphQL
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};

export default Aside;
