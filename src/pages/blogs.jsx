import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Posts from "./parts/posts";
import Ads from "./parts/ads";
import Navbar from "./parts/nav";
import Footer from "./parts/footer";

import landingDark from "../img/landing-dark.png";
import landingLight from "../img/landing-light.png";
import userImg from "../img/user.png";

export default function Blogs({ theme, changeTheme }) {
  useEffect(() => {
    document.title = "Meta Blog | Blog Listing";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <main className="container flex flex-col gap-20">
        <section className="lg:relative lg:max-xl:mb-44">
          <div className="flex flex-col items-center justify-center gap-2 py-4 lg:mt-6 lg:mb-12 mb-4 max-lg:pt-0">
            <h2 className="text-3xl font-semibold text-center text-primary">
              Page Title
            </h2>
            <ul className="flex items-center justify-center">
              <li className="mx-4">
                <Link to={"/"} className="text-[var(--color-12)]">
                  Home
                </Link>
              </li>
              <li className="mx-4 pipeline-before">
                <Link to={"/"} className="text-[var(--color-13)] ">
                  Link One
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src={theme === "light" ? landingDark : landingLight}
              alt="landing-img.png"
              className="rounded-xl"
              id="landing"
            />
            <div className="flex flex-col gap-6 max-sm:gap-2 absolute left-[5%] bottom-[7%] max-md:left-[2%] max-md:bottom-[4%]">
              <div className="flex flex-col gap-4 w-3/5 max-lg:w-full">
                <p className="py-1 px-3 bg-[var(--primary-color)] text-white w-fit rounded-md max-sm:text-sm">
                  Technology
                </p>
                <h2 className="text-4xl font-semibold text-white max-sm:text-2xl">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </h2>
              </div>
              <div className="flex gap-5 items-center">
                <Link to={"/author"} className="flex gap-2 items-center">
                  <img src={userImg} alt="user.png" className="w-9" />
                  <h4 className="text-base text-slate-400 transition-colors hover:text-[var(--primary-color)] max-sm:text-sm">
                    Tracey Wilson
                  </h4>
                </Link>
                <p className="text-base text-slate-400 max-sm:text-sm">
                  August 20, 2022
                </p>
              </div>
            </div>
          </div>
        </section>
        <Posts />
        <Ads />
      </main>
      <Footer theme={theme} />
    </>
  );
}
