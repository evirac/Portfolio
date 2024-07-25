import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl ">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-4xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-4xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoMongodb className="text-4xl text-emerald-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsLine className="text-4xl" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center pt-2 gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-4xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line className="text-4xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaSass className="text-4xl text-pink-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-4xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-4xl text-violet-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
