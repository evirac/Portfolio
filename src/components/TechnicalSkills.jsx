import React from "react";
import { TECHNICAL_SKILLS } from "../constants";
import { motion } from "framer-motion";

const TechnicalSkills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Technical Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {TECHNICAL_SKILLS.map((skillGroup, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            key={index}
            className="max-w-sm"
          >
            <h3 className="text-center text-xl font-semibold mb-4 text-purple-400">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skillGroup.skills.map((skill, skillIndex) => (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  key={skillIndex}
                  className="rounded bg-neutral-900 px-3 py-2 text-sm font-medium text-purple-500 border border-neutral-700 hover:border-purple-500 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
