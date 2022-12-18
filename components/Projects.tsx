import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] 
      text-gray-500 text-2xl "
      >
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
           snap-x snap-mandatory z-20"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen mt-[50px]
        md:mt-[125px] "
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              src={urlFor(project?.image).url()}
              alt="Project logo"
              className="w-[250px] h-[250px] "
            />
            <div className="space-y-8 px-0 md:px-10 max-w-3xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#0000D1]">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <div
                    className="flex flex-col items-center space-x-2 p-1  justify-center"
                    key={technology.title}
                  >
                    <p>{technology.title}</p>
                    <img
                      className="h-10 w-10 mt-2"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt="Tech Logos"
                    />
                  </div>
                ))}
              </div>
              <Link href={`${project?.linkToBuild}`}>
                <p className="text-lg text-center heroButton cursor-pointer ">
                  {project?.linkToBuild}
                </p>
              </Link>
              <p className="text-lg text-center ">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#0000D1]/10 left-0 h-[350px] 
      -skew-y-12 "
      />
    </motion.div>
  );
}
