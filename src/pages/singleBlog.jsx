import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Ads from "./parts/ads";
import Navbar from "./parts/nav";
import Footer from "./parts/footer";

import author1 from "../img/author-1.png";
import single1 from "../img/single-post-1.png";
import single2 from "../img/single-post-2.png";

export default function SingleBlog({ theme, changeTheme }) {
  useEffect(() => {
    document.title = "Meta Blog | Single Post";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <main className="container flex flex-col gap-20">
        <section className="single-post-cont">
          <div className="flex flex-col gap-5">
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
              <Link
                to={"/author"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <img src={author1} alt="author.png" className="w-9" />
                <h4 className="text-base text-slate-400 transition-colors hover:text-[var(--primary-color)]">
                  Jason Francisco
                </h4>
              </Link>
              <p className="text-base text-slate-400">August 20, 2022</p>
            </div>
          </div>
          <img src={single1} alt="landing-img.png" className="rounded-xl" />
          <p className="p">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p className="p">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
          <div>
            <h3>Research Your Destination</h3>
            <p className="p mb-8">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>
          <div>
            <h3>Plan Your Itinerary</h3>
            <p className="p mb-8">
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
            </p>
            <p className="p">
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>
          </div>
          <p className="quote">
            Traveling can expose you to new environments and potential health
            risks, so it's crucial to take precautions to stay safe and healthy.
          </p>
          <img src={single2} alt="" className="rounded-xl" />
          {/* <div className="w-full lg:h-[100px] mx-6 bg-[var(--color-04)] rounded-xl">
            <div className="w-1/4 h-full mx-auto text-center flex flex-col justify-evenly items-center select-none">
              <p className="text-gray-500 text-sm text-nowrap">Advertisement</p>
              <p className="text-gray-500 text-xl text-nowrap font-semibold">
                You can place ads
              </p>
              <p className="text-gray-500 text-lg text-nowrap">750x100</p>
            </div>
          </div> */}
          <Ads className="!mx-6" />
          <div>
            <h3>Pack Lightly and Smartly</h3>
            <p className="p">
              Packing can be a daunting task, but with some careful planning and
              smart choices, you can pack light and efficiently. Start by making
              a packing list and sticking to it, focusing on versatile and
              comfortable clothing that can be mixed and matched. Invest in
              quality luggage and packing organizers to maximize space and
              minimize wrinkles.
            </p>
          </div>
          <div>
            <h3>Stay Safe and Healthy</h3>
            <p className="p">
              Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and
              healthy. This includes researching any required vaccinations or
              medications, staying hydrated, washing your hands frequently, and
              using sunscreen and insect repellent. It's also essential to keep
              your valuables safe and secure and to be aware of your
              surroundings at all times.
            </p>
          </div>
          <div>
            <h3>Immerse Yourself in the Local Culture</h3>
            <p className="p">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>
          <div>
            <h3>Capture Memories</h3>
            <p className="p">
              Finally, don't forget to capture memories of your journey. Whether
              it's through photographs, journaling, or souvenirs, preserving the
              moments and experiences of your travels can bring joy and
              nostalgia for years to come. However, it's also essential to be
              present in the moment and not let technology distract you from the
              beauty of your surroundings.
            </p>
          </div>
          <div>
            <h3>Conclusion:</h3>
            <p className="p">
              Traveling is an art form that requires a blend of planning,
              preparation, and spontaneity. By following these tips and tricks,
              you can make the most of your journey and create memories that
              last a lifetime. So pack your bags, embrace the adventure, and
              enjoy the ride.
            </p>
          </div>
        </section>
      </main>
      <Footer theme={theme} />
    </>
  );
}
