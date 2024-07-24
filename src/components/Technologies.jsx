import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl ">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-blue-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsLine className="text-4xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoMongodb className="text-4xl text-emerald-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4"></div>
          <SiExpress className="" />
          <FaSass className="text-4xl text-pink-400" />
          <RiTailwindCssFill className="text-4xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
