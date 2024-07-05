import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logoLight from "../../img/logo-light.png";
import logoDark from "../../img/logo-dark.png";
import searchIcon from "../../img/search-icon.png";

export default function Navbar({ theme, changeTheme }) {
  const menubarParent = useRef();
  return (
    <header className="w-full sticky top-0 left-0 z-50 before:absolute before:w-full before:h-full before:backdrop-blur-md before:-z-10 mb-6">
      <div className="container flex items-center justify-between py-8">
        <Link to={"/"} className="max-lg:order-1 lg:w-1/6 max-sm:w-1/2">
          <img
            src={theme === "light" ? logoLight : logoDark}
            alt="Meta Blog logo"
          />
        </Link>
        <div
          className="max-lg:order-3 flex items-center justify-between"
          ref={menubarParent}
        >
          <div
            role="button"
            className="menubarBtn w-10 flex flex-col items-end justify-between gap-2 mx-6 py-2 lg:hidden"
            onClick={() => menubarParent.current.classList.toggle("open")}
          >
            <span className="inline-block bg-primary h-1 w-full transition-all duration-500"></span>
            <span className="inline-block bg-primary h-1 w-3/4 transition-all duration-500"></span>
            <span className="inline-block bg-primary h-1 w-1/2 transition-all duration-500"></span>
          </div>
          <ul
            className="menubar flex items-center gap-10 max-lg:fixed max-lg:flex-col max-lg:w-full max-lg:h-full max-lg:-top-full max-lg:left-0 max-lg:pt-36 max-lg:backdrop-blur-xl max-lg:text-center max-lg:-z-10 transition-all duration-1000"
          >
            <li className="sm:hidden w-4/5">
              <Form changeTheme={changeTheme} />
            </li>
            <li className="max-lg:w-4/5">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="max-lg:w-4/5">
              <Link to={"/blogs"} className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="max-lg:w-4/5">
              <Link to={"/blog"} className="nav-link">
                Single Post
              </Link>
            </li>
            <li className="max-lg:w-4/5">
              <Link to={"/"} className="nav-link">
                Pages
              </Link>
            </li>
            <li className="max-lg:w-4/5">
              <Link to={"/"} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Form
          className="max-sm:hidden max-lg:order-2 md:max-lg:ml-36 sm:max-md:ml-12 sm:max-md:w-1/2"
          changeTheme={changeTheme}
        />
      </div>
    </header>
  );
};

const Form = ({ className, changeTheme }) => {
  return (
    <form
      method="post"
      className={"flex items-center justify-between " + className}
    >
      <div className="bg-[var(--color-03)] flex items-center justify-between gap-3 p-2 pl-4 rounded-md w-3/4">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="bg-transparent overflow-auto text-nowrap border-0 outline-0 w-full text-primary"
        />
        <button type="button" className="w-6">
          <img src={searchIcon} alt="search-icon" className="w-full" />
        </button>
      </div>
      <button
        type="button"
        className="bg-[var(--color-02)] w-12 h-7 rounded-3xl cursor-pointer"
        onClick={changeTheme}
      >
        <span className="inline-block bg-white w-6 h-6 max-sm:h-4/5 rounded-full m-[2px] transition-all duration-300 -translate-x-[40%] dark:translate-x-[40%]">
          <svg
            className="dark:hidden md:w-4 md:m-1 max-sm:scale-90 max-sm:translate-y-[15%] max-sm:translate-x-[15%]"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-slate-400"
              d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
            />
            <path
              className="fill-slate-500"
              d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
            />
          </svg>
          <svg
            className="hidden dark:inline-block md:w-4 md:m-1 max-sm:scale-90 max-sm:translate-y-[-3%]"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-slate-500"
              d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
            />
            <path
              className="fill-slate-600"
              d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
            />
          </svg>
        </span>
      </button>
    </form>
  );
};
