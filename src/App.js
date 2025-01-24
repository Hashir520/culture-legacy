import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import Testimonials from "./Components/Cards";
import About from "./Components/About";
import Highlights from "./Components/Highlights";
import Events from "./Components/Events";
import Detail from "./Components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Testimonials />
      </>
    ),
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
