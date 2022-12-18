import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import { url } from "inspector";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col  rounded-lg items-center space-y-7 
    flex-shrink-0 w-[350px] h-[470px]  md:w-[600px] md:h-[470px] 
     xl:w-[700px] xl:h-[470px]  snap-center bg-[#292929] p-5 
     hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden 
    sm:mt-[100px] md:mt-[100px]"
    >
      <div className="px-0 md:px-10">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-xl mt-10">Sarto Countertops</p>
            <h4 className="text-2xl font-light mt-3">Machine Operator</h4>
          </div>
          <div className="mt-10">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src={urlFor(experience?.companyImage).url()}
              alt="Work Logo"
              className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover
          object-center"
            />
          </div>
        </div>

        <div className="flex space-x-4 my-2 w-[100px]">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt="Logo of Tech Used"
            />
          ))}
        </div>
        <p className="uppercase py-5">
          {new Date(experience.dateStarted).toDateString()}-{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
