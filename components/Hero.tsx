import Link from "next/link";
import React from "react";
import Typed from "react-typed";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  {
    /* const [text] = useTypewriter({
    words: [
      "Hi, The Name's Isaiah Gutierrez",
      "Keep Grinding!",
      "Exercise Mindfully and Physically",
      "<CodingIsMyJourney />",
    ],
    loop: false,
    delaySpeed: 1000,
  });*/
  }

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="'Hi' sticker picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-3xl lg:6xl font-semibold px-10">
          <span>
            <Typed
              strings={[
                `Hi! The Name's ${pageInfo?.name}!`,
                "I-Love-Software-Development.tsx",
                "Remeber To Take Care Of Yourself!",
                "Keep Grinding!",
              ]}
              typeSpeed={25}
              backSpeed={75}
              loop
            />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          {/* <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link> */}
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
