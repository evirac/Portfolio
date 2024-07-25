import React from "react";
import { CONTACT } from "../constants";
import { LuSmartphone } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact me</h2>
      <div className="text-center tracking-tighter ">
        <p className="my-4 flex justify-center">
          <LuSmartphone className="text-2xl mr-1" />
          {CONTACT.phoneNo}
        </p>
        <p className="flex justify-center">
          <MdEmail className="text-2xl mr-1" /> {CONTACT.email}
        </p>
      </div>
    </div>
  );
};

export default Contact;
