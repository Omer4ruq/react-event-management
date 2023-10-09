import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-neutral-800 ">
      <div className="">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
