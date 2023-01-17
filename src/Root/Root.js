import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
