import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Posts from "./parts/posts";
import Navbar from "./parts/nav";
import Footer from "./parts/footer";

import post02author from "../img/post-02-author.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import youtube from "../img/youtube.png";

export default function Author({ theme, changeTheme }) {
  useEffect(() => {
    document.title = "Meta Blog | Author Page";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <main className="container flex flex-col gap-12">
        <section className="bg-[var(--color-14)] rounded-xl">
          <div className="w-7/12 max-sm:w-10/12 my-12 flex flex-col gap-6 mx-auto">
            <div className="flex items-center gap-4 mx-auto">
              <img src={post02author} alt="" className="rounded-full" />
              <div>
                <h3 className="text-xl font-medium text-primary">
                  Jonathan Doe
                </h3>
                <p className="text-[var(--color-15)]">Collaborator & Editor</p>
              </div>
            </div>
            <p className="text-[var(--color-07)] text-lg text-center">
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </p>
            <div className="flex gap-2 mx-auto">
              <Link
                to={"https://www.facebook.com/"}
                target="_blank"
                className="p-2 rounded-md bg-slate-700 w-fit inline-block"
              >
                <img src={facebook} alt="" className="w-5" />
              </Link>
              <Link
                to={"https://x.com/"}
                target="_blank"
                className="p-2 rounded-md bg-slate-700 w-fit inline-block"
              >
                <img src={twitter} alt="" className="w-5" />
              </Link>
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                className="p-2 rounded-md bg-slate-700 w-fit inline-block"
              >
                <img src={instagram} alt="" className="w-5" />
              </Link>
              <Link
                to={"https://www.youtube.com/"}
                target="_blank"
                className="p-2 rounded-md bg-slate-700 w-fit inline-block"
              >
                <img src={youtube} alt="" className="w-5" />
              </Link>
            </div>
          </div>
        </section>
        <Posts />
      </main>
      <Footer theme={theme} />
    </>
  );
}
