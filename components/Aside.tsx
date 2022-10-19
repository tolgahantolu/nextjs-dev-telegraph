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
import { SiRedux } from "react-icons/si";

import { useSelector } from "react-redux";

const Aside = () => {
  const showAside = useSelector((state: any) => state.aside.showAside);

  return (
    <>
      {showAside && (
        <aside className="w-full md:w-1/3 md:border-r md:border-main-color h-auto overflow-y-auto fixed top-[65px] left-0 bottom-0 bg-main-background z-10">
          <div className="">
            <nav className="py-4">
              <ul>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg md:text-xl">
                        <AiOutlineFire />
                      </span>
                      popular
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <BiUpvote />
                      </span>
                      most upvoted
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="pb-4">
              <ul>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/html">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandHtml5 />
                      </span>
                      html
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/css">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandCss3 />
                      </span>
                      css
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/javascript">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandJavascript />
                      </span>
                      javascript
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/react">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <RiReactjsLine />
                      </span>
                      reactJS
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/next">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <TbBrandNextjs />
                      </span>
                      nextJS
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/node">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <IoLogoNodejs />
                      </span>
                      nodeJS
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/graphql">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <GrGraphQl />
                      </span>
                      graphQL
                    </a>
                  </Link>
                </li>
                <li className="transition-all hover:bg-light-black capitalize">
                  <Link href="/category/redux">
                    <a className="flex items-center gap-x-3 px-6 leading-10 md:leading-10 lg:leading-10 xl:leading-10 md:text-lg transition-all hover:text-headline-color">
                      <span className="text-lg">
                        <SiRedux />
                      </span>
                      redux
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
