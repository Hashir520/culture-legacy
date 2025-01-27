import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";

import About from "./Components/About";
import Highlights from "./Components/Highlights";
import Events from "./Components/Events";
import Detail from "./Components/Detail";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/hilights",
    element: <Highlights />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
