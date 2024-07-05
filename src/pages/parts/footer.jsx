import React from 'react';
import { Link } from 'react-router-dom';
import faviconDark from "../../img/favicon-dark.png";
import faviconLight from "../../img/favicon-light.png";
import metaBlogDark from "../../img/Meta Blog-dark.png";
import metaBlogLight from "../../img/Meta Blog-light.png";

export default function Footer({ theme }) {
  return (
    <footer className="bg-[var(--color-05)] border border-[var(--color-04)] mt-28 font-plus">
      <div className="container pt-16 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5 max-lg:gap-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold text-primary">About</h4>
              <p className="text-[var(--color-06)] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam</p>
            </div>
            <div>
              <p className="text-[var(--color-06)] text-base"><span className="text-lg font-semibold text-primary">Email :</span> info@jstemplate.net</p>
              <p className="text-[var(--color-06)] text-base"><span className="text-lg font-semibold text-primary">Phone :</span> 880 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly max-md:gap-12">
            <div className="max-md:w-full">
              <h4 className="text-lg font-semibold text-primary max-md:text-center max-md:mb-6 max-lg:mb-5 mb-4">Quick Link</h4>
              <ul className="max-md:w-full flex flex-col gap-1 items-center justify-evenly">
                <li><Link to={"/"} className="text-[var(--color-07)] text-base">Home</Link></li>
                <li><Link to={"/"} className="text-[var(--color-07)] text-base">About</Link></li>
                <li><Link to={"/blog"} className="text-[var(--color-07)] text-base">Blog</Link></li>
                <li><Link to={"/"} className="text-[var(--color-07)] text-base">Archived</Link></li>
                <li><Link to={"/author"} className="text-[var(--color-07)] text-base">Author</Link></li>
                <li><Link to={"/"} className="text-[var(--color-07)] text-base">Contact</Link></li>
              </ul>
            </div>
            <div className="max-md:w-full">
              <h4 className="text-lg font-semibold text-primary max-md:text-center max-md:mb-6 max-lg:mb-5 mb-4">Category</h4>
              <ul className="max-md:w-full flex flex-col gap-1 items-center justify-evenly">
                <li><Link to={"/blogs"} className="text-[var(--color-07)] text-base">Lifestyle</Link></li>
                <li><Link to={"/blogs"} className="text-[var(--color-07)] text-base">Technology</Link></li>
                <li><Link to={"/blogs"} className="text-[var(--color-07)] text-base">Travel</Link></li>
                <li><Link to={"/blogs"} className="text-[var(--color-07)] text-base">Business</Link></li>
                <li><Link to={"/blogs"} className="text-[var(--color-07)] text-base">Economy</Link></li>
                <li><Link to={"/blogs"} className="text-[var(--color-07)] text-base">Sports</Link></li>
              </ul>
            </div>
          </div>
          <div className="bg-[var(--color-08)] rounded-xl py-9 px-8 flex flex-col items-center justify-evenly h-full gap-8">
            <div className="flex flex-col gap-2 text-center">
              <h4 className="text-xl font-semibold text-primary">Weekly Newsletter</h4>
              <p className="text-[var(--color-06)] text-base">Get blog articles and offers via email</p>
            </div>
            <form action="." className="w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full bg-body px-4 py-3 rounded-md border border-[var(--color-09)]">
                <input type="email" name="" id="" className="bg-transparent border-0 outline-0 text-primary" placeholder="Your Email" />
                <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
                  stroke="#696A75">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#696A75"
                      strokeWidth="1.6799999999999997" strokeLinecap="round" strokeLinejoin="round"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#696A75" strokeWidth="1.6799999999999997"
                      strokeLinecap="round"></rect>
                  </g>
                </svg>
              </div>
              <button type="button" className="bg-[var(--primary-color)] text-white font-body text-base font-medium w-full py-3 rounded-md transition-all hover:shadow-lg hover:scale-105">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex gap-16 py-8 border-t border-t-[var(--color-11)] max-md:flex-col max-md:items-start">
          <div className="flex items-center gap-3">
            <img src={ theme === "light" ? faviconLight : faviconDark } alt="favicon" className="w-12" />
            <div className="flex flex-col justify-between h-full">
              <img src={ theme === "light" ? metaBlogLight : metaBlogDark } alt="Meta Blog-dark.png" className="w-24" />
              <p className="text-base font-plus text-[var(--color-07)]">&copy; <span className="text-[var(--color-10)]">JS Template</span> 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className="md:ml-auto">
            <ul className="flex">
              <li><Link to={"/"} className="text-[var(--color-07)]">Terms of Use</Link></li>
              <li><span className="inline-block w-px h-full bg-[var(--color-11)] mx-4"></span></li>
              <li><Link to={"/"} className="text-[var(--color-07)]">Privacy Policy</Link></li>
              <li><span className="inline-block w-px h-full bg-[var(--color-11)] mx-4"></span></li>
              <li><Link to={"/"} className="text-[var(--color-07)]">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
