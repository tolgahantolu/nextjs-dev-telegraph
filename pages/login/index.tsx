import React, { FormEvent, useEffect, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { login } from "../../firebase";
import { useSelector } from "react-redux";
import Head from "next/head";

const Login: NextPage = () => {
  const user = useSelector((state: any | any[]) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handlerFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const email: any = emailInputRef.current!.value;
    const password: any = passwordInputRef.current!.value;

    return await login(email, password);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="py-[200px] px-6 md:grid md:place-items-center">
        <h1 className="text-2xl font-light text-headline-color xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12">
          Login
        </h1>
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

            <div className="text-left">
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

            <div className="mt-5">
              <h2 className="mb-1">Login Test</h2>
              <div className="grid gap-y-1">
                <small className="text-xs">email: tolgahan@gmail.com</small>
                <small className="text-xs">password: 123123</small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
