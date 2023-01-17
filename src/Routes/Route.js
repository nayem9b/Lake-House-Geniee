import { createBrowserRouter } from "react-router-dom";
import Connector from "../Connector/Connector";
import Home from "../Home/Home";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/v1/connectors",
        element: <Connector></Connector>,
      },
    ],
  },
]);
