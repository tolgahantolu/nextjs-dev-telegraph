import React from "react";

import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { showAside } from "../store/asideSlice";
const Header: React.FC = () => {
  const sidebarStat = useSelector((state: any) => state.aside.showAside);

  const dispatch = useDispatch();

  const handleShowAside = () => {
    dispatch(showAside(!sidebarStat));
  };

  return (
    <header className="flex flex-row justify-between items-center px-4 py-3 border-b border-gray-600 fixed top-0 left-0 right-0 bg-main-background z-10">
      <button
        onClick={handleShowAside}
        type="button"
        className="w-10 h-10 transition-all bg-transparent hover:bg-light-black grid place-items-center rounded-xl"
      >
        <span className="text-[32px]">
          {sidebarStat ? <IoMdClose /> : <IoMdMenu />}
        </span>
      </button>

      <div className="flex-1">
        <Link href="/">
          <a className="flex flex-row items-center justify-center font-patua">
            <div>
              <span className="font-normal text-2xl text-headline-color">
                dev
              </span>
              <span className="font-light text-sm">.telegraph</span>
            </div>
          </a>
        </Link>
      </div>

      <div>
        <Link href="/">
          <a className="w-10 h-10 transition-all bg-transparent hover:bg-light-black grid place-items-center rounded-xl">
            <span className="text-[28px]">
              <AiOutlineUser />
            </span>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
