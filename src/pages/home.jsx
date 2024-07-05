import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Posts from "./parts/posts";
import Ads from "./parts/ads";
import Navbar from "./parts/nav";
import Footer from "./parts/footer";

import landingDark from "../img/landing-dark.png";
import landingLight from "../img/landing-light.png";
import author01 from "../img/author-1.png";

export default function Home({ theme, changeTheme }) {
  useEffect(() => {
    document.title = "Meta Blog | Home Page";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <main className="container flex flex-col gap-20">
        <section className="lg:relative xl:mb-28 lg:max-xl:mb-44">
          <img
            src={theme === "dark" ? landingDark : landingLight}
            alt="landing page"
            className="rounded-xl"
          />
          <div className="lg:p-10 p-7 max-sm:px-0 lg:rounded-xl bg-body lg:border lg:border-[var(--color-04)] lg:shadow-md flex flex-col gap-6 lg:absolute w-full lg:w-1/2 lg:max-xl:w-3/4 top-2/3 left-[4%]">
            <div className="flex flex-col gap-4">
              <p className="py-1 px-3 bg-[var(--primary-color)] text-white w-fit rounded-md">
                Technology
              </p>
              <h2 className="text-4xl font-semibold text-primary">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h2>
            </div>
            <div className="flex gap-5 items-center">
              <Link to={"/author"} className="flex gap-2 items-center">
                <img src={author01} alt="author.png" className="w-9" />
                <h4 className="text-base text-slate-400 transition-colors hover:text-[var(--primary-color)]">
                  Jason Francisco
                </h4>
              </Link>
              <p className="text-base text-slate-400">August 20, 2022</p>
            </div>
          </div>
        </section>
        <Ads />
        <Posts />
        <Ads />
      </main>
      <Footer theme={theme} />
    </>
  );
}
