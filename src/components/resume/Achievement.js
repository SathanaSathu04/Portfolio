import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">During my UG degree</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Course."
            subTitle="Online course on Web development"
            result="Success"
            des="Completed the one month online course onFull Stack web develop,ment conducted by NoviTech."
          />
          <ResumeCard
            title="Typewriting"
            subTitle="Completed Typewriting"
            result="Success"
            des="Completed the typewriter course on english(Both Lower and Higher)"/>
          <ResumeCard
            title="NPTEL course"
            subTitle="Online National level exam"
            result="Success"
            des="Completed the exam on The joy of computing using Python which was conducted by NPTEL!"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Area of Interests</p>
          <h2 className="text-3xl md:text-4xl font-bold">I'm interested in,</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front end Developer"
            subTitle="Using React js"
            
            des="I'm interesting in front-end developing so I can develop my creativity on different prespective!"
          />
          <ResumeCard
            title="Python Developing"
            subTitle="To become a Software Engineer"
            
            des="My another level of interest in software field is to become a Python developer.!"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
