import React from "react";
import { Link } from "react-router-dom";

import post01 from "../../img/post-01.png";
import post01author from "../../img/post-01-author.png";
import post02 from "../../img/post-02.png";
import post02author from "../../img/post-02-author.png";
import post03 from "../../img/post-03.png";
import post03author from "../../img/post-03-author.png";
import post04 from "../../img/post-04.png";
import post04author from "../../img/post-04-author.png";
import post05 from "../../img/post-05.png";
import post05author from "../../img/post-05-author.png";
import post06 from "../../img/post-06.png";
import post06author from "../../img/post-06-author.png";
import post07 from "../../img/post-07.png";
import post07author from "../../img/post-07-author.png";
import post08 from "../../img/post-08.png";
import post08author from "../../img/post-08-author.png";
import post09 from "../../img/post-09.png";
import post09author from "../../img/post-09-author.png";

export default function Posts() {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-2xl font-bold text-primary">Latest Post</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="post-card">
          <Link to={"/blog"}>
            <img src={post01} alt="post-01.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post01author} alt="post-01-author.png" />
                <h4>Tracey Wilson</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card">
          <Link to={"/blog"}>
            <img src={post02} alt="post-02.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post02author} alt="post-02-author.png" />
                <h4>Jason Francisco</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card">
          <Link to={"/blog"}>
            <img src={post03} alt="post-03.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post03author} alt="post-03-author.png" />
                <h4>Elizabeth Slavin</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card">
          <Link to={"/blog"}>
            <img src={post04} alt="post-04.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post04author} alt="post-04-author.png" />
                <h4>Ernie Smith</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card">
          <Link to={"/blog"}>
            <img src={post05} alt="post-05.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post05author} alt="post-05-author.png" />
                <h4>Eric Smith</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card max-md:hidden">
          <Link to={"/blog"}>
            <img src={post06} alt="post-06.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post06author} alt="post-06-author.png" />
                <h4>Tracey Wilson</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card max-md:hidden">
          <Link to={"/blog"}>
            <img src={post07} alt="post-07.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post07author} alt="post-07-author.png" />
                <h4>Jason Francisco</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card max-md:hidden">
          <Link to={"/blog"}>
            <img src={post08} alt="post-08.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post08author} alt="post-08-author.png" />
                <h4>Elizabeth Slavin</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="post-card max-md:hidden">
          <Link to={"/blog"}>
            <img src={post09} alt="post-09.png" />
          </Link>
          <div className="card-content">
            <div className="heading">
              <p className="badge">Technology</p>
              <Link to={"/blog"} className="title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Link>
            </div>
            <div className="info">
              <Link to={"/author"}>
                <img src={post09author} alt="post-09-author.png" />
                <h4>Ernie Smith</h4>
              </Link>
              <p className="date">August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/blogs"} role="button"
        className="bg-transparent py-3 px-5 mx-auto w-fit border border-gray-500/30 rounded-md text-gray-500 transition-all duration-200 hover:scale-110 hover:text-[var(--primary-color)] hover:border-[var(--primary-color-30)]"
      >
        View All Post
      </Link>
    </section>
  );
};
