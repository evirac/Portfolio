import React, { useState } from "react";
import { CONTACT } from "../constants";
import { LuSmartphone } from "react-icons/lu";
import { MdEmail, MdContentCopy, MdDone } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl"
      >
        Contact me
      </motion.h2>

      <div className="text-center tracking-tighter ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="my-4 flex justify-center items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <LuSmartphone className="text-2xl" />
            <span>{CONTACT.phoneNo}</span>
          </div>
          <button
            onClick={() => copyToClipboard(CONTACT.phoneNo, setCopiedPhone)}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-purple-500 transition-all duration-300 hover:bg-neutral-800"
            title="Copy phone number"
          >
            {copiedPhone ? (
              <MdDone className="text-xl text-green-500" />
            ) : (
              <MdContentCopy className="text-xl text-purple-500" />
            )}
          </button>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <MdEmail className="text-2xl" />
            <span>{CONTACT.email}</span>
          </div>
          <button
            onClick={() => copyToClipboard(CONTACT.email, setCopiedEmail)}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-purple-500 transition-all duration-300 hover:bg-neutral-800"
            title="Copy email address"
          >
            {copiedEmail ? (
              <MdDone className="text-xl text-green-500" />
            ) : (
              <MdContentCopy className="text-xl text-purple-500" />
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
