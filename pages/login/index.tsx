import React, { FormEvent, useEffect, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { login } from "../../firebase";
import { useSelector } from "react-redux";

const Login: NextPage = () => {
  const user = useSelector((state: any | any[]) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handlerFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const email: any = emailInputRef.current!.value;
    const password: any = passwordInputRef.current!.value;

    return await login(email, password);
  };

  return (
    <div className="py-[147px] px-6">
      <h1 className="text-2xl font-light text-headline-color">Login</h1>
      <div className="mt-4 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12">
        <form onSubmit={handlerFormSubmit}>
          <div className="mb-6">
            <input
              ref={emailInputRef}
              type="email"
              className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-color focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <div className="mb-6">
            <input
              ref={passwordInputRef}
              type="password"
              className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-color focus:outline-none"
              placeholder="Password"
            />
          </div>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="block w-full px-7 py-3 bg-light-black border border-main-color text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition-all ease-in-out"
            >
              Login
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link href="/register">
                <a className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition-all ease-in-out ml-1">
                  Register
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
