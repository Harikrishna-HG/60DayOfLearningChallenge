import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";

const App = () => {
  let router = createBrowserRouter([
    {
      key: "Home",
      path: "/",
      element: (
        <>
          <NavBar />
          <Jumbotron />
        </>
      ),
    },
    {
      key: "About",
      path: "/about",
      Component: About,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
