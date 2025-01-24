import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Testimonials from "./Components/Cards";
import About from "./Components/About";
import Highlights from "./Components/Highlights";
import Events from "./Components/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Testimonials />
        <Contact/>
      </>
    ),
  },
 

  {
    path: "/about",
    element: <About />,
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
