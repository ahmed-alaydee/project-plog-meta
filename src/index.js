import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Blogs from './pages/blogs';
import SingleBlog from './pages/singleBlog';
import Author from './pages/author';

const Context = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === "dark"
      ? localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    };
  }, [theme]);

  useEffect(() => {
    document.body.parentElement.classList.add("max-sm:text-[10px]", "scroll-smooth");
    document.body.classList.add("bg-body", "font-body", "scroll-smooth");
  }, [])

  function changeTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home theme={theme} changeTheme={changeTheme} />,
    },
    {
      path: "/blogs",
      element: <Blogs theme={theme} changeTheme={changeTheme} />,
    },
    {
      path: "/blog",
      element: <SingleBlog theme={theme} changeTheme={changeTheme} />,
    },
    {
      path: "/author",
      element: <Author theme={theme} changeTheme={changeTheme} />,
    },
  ]);

  return <RouterProvider router={Router} />
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>
);
