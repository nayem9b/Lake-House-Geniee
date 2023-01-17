import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Link, RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
