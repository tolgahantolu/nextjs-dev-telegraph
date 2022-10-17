import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

const Layout: React.FC<{ children: any }> = (props) => {
  return (
    <>
      <Header />
      <main className="w-full">
        <Aside />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
