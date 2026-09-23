import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Highlights from "./Components/Highlights";
import Events from "./Components/Events";
import Detail from "./Components/Detail";
import Contact from "./Components/Contact";

import CardList from "./Components/CardList";

import Navbar from "./Components/Navbar";
import CardDetail from "./Components/CardDetail";
import { LoginPage, SignupPage } from "./Components/AuthPages";

const AUTH_KEY = "heritageLegacyAuth";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem(AUTH_KEY) === "true" ? children : <Navigate to="/login" replace />;
};

const protect = (element) => <ProtectedRoute>{element}</ProtectedRoute>;

const EntryRoute = () => {
  return localStorage.getItem(AUTH_KEY) === "true" ? <Home /> : <LoginPage />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryRoute />,
  },
  {
    path: "/about",
    element: protect(<About />),
  },
  {
    path: "/home",
    element: protect(<Home />),
  },
  {
    path: "/detail",
    element: protect(<Detail />),
  },
  {
    path: "/hilights",
    element: protect(<Highlights />),
  },
  {
    path: "/events",
    element: protect(<Events />),
  },
  {
    path: "/contact",
    element: protect(<Contact />),
  },
 
  {
    path: "/card",
    element: protect(<CardList />),
  },
 
  {
    path: "/Nav",
    element: protect(<Navbar />),
  },
  {
    path: "/card/:id",
    element: protect(<CardDetail />),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
 

};

export default App;
