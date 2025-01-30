import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Highlights from "./Components/Highlights";
import Events from "./Components/Events";
import Detail from "./Components/Detail";
import Contact from "./Components/Contact";

import CardList from "./Components/CardList";

import Navbar from "./Components/Navbar";
import CardDetail from "./Components/CardDetail";

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
 
  {
    path: "/card",
    element: <CardList/>,
  },
 
  {
    path: "/Nav",
    element: <Navbar/>,
  },
  {
    path: "/card/:id",
    element: <CardDetail/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
 

};

export default App;
