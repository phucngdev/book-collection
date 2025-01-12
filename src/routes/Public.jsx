import React from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";

const Public = () => {
  return (
    <>
      <div className="p-2">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Public;
