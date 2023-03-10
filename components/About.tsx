import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
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
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-center
  md:text-left md:flex-row max-w-7xl px-10 justify-evenly
  mx-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] 
      text-gray-500 text-2xl "
      >
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className=" mt-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#0000D1]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
