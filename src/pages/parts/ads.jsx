import React from 'react';

export default function Ads({ className = "" }) {
  return (
    <div className={"w-full lg:w-[750px] lg:h-[100px] mx-auto bg-[var(--color-04)] rounded-xl" + className}>
      <div className="w-1/4 h-full mx-auto text-center flex flex-col justify-evenly items-center">
        <p className="text-gray-500 text-sm text-nowrap">Advertisement</p>
        <p className="text-gray-500 text-xl text-nowrap font-semibold">
          You can place ads
        </p>
        <p className="text-gray-500 text-lg text-nowrap">750x100</p>
      </div>
    </div>
  );
};
