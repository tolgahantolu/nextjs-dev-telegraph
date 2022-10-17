import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";

const Layout: React.FC<{ children: any }> = (props) => {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Aside />
        {props.children}
      </main>
    </>
  );
};

export default Layout;
