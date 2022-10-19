import React from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { showAside } from "../store/asideSlice";
import { logout } from "../firebase";
import { useRouter } from "next/router";
const Header: React.FC = () => {
  const sidebarStat = useSelector((state: any) => state.aside.showAside);
  const user = useSelector((state: any | any[]) => state.auth.user);

  const router = useRouter();

  const dispatch = useDispatch();

  const handleShowAside = () => {
    dispatch(showAside(!sidebarStat));
  };

  const handlerLogout = () => {
    if (user) {
      logout();
      router.push("/login");
    }
  };

  return (
    <header className="flex flex-row justify-between items-center px-4 py-3 border-b border-gray-600 fixed top-0 left-0 right-0 bg-main-background z-10">
      <button
        onClick={handleShowAside}
        type="button"
        className="w-10 h-10 transition-all bg-transparent hover:bg-light-black grid place-items-center rounded-xl"
      >
        <span className="text-[32px] md:text-4xl">
          {sidebarStat ? <IoMdClose /> : <IoMdMenu />}
        </span>
      </button>

      <div className="flex-1">
        <Link href="/">
          <a className="flex flex-row items-center justify-center font-patua">
            <div>
              <span className="font-normal text-2xl md:text-3xl text-headline-color">
                dev
              </span>
              <span className="font-light text-sm md:text-base">
                .telegraph
              </span>
            </div>
          </a>
        </Link>
      </div>

      <div>
        {user ? (
          <div className="w-10 h-10 transition-all bg-transparent hover:bg-light-black grid place-items-center rounded-xl">
            <button
              type="button"
              className="text-[28px] md:text-[34px]"
              onClick={handlerLogout}
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <Link href="/login">
            <a className="w-10 h-10 transition-all bg-transparent hover:bg-light-black grid place-items-center rounded-xl">
              <button type="button" className="text-[28px] md:text-[34px]">
                <AiOutlineUser />
              </button>
            </a>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
