"use client";
import {
  ImageVariants,
  TextVariants,
  btnVariants,
  waveVariants,
} from "@/utils/motion/variants";
import { LazyMotion, domAnimation, m } from "framer-motion";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";

import Image from "next/image";
import Link from "next/link";

function Inter() {
  const { refSection } = useActiveSectionInView({
    sectionName: "Home",
    amount: 0.5,
  });

  return (
    <section role="region" aria-label="intro section">
      <LazyMotion features={domAnimation}>
        <section
          ref={refSection}
          className="pt-[147px] lg:pt-[200px] flex justify-center items-center flex-col gap-12"
        >
          <section className="relative flex flex-col items-center justify-center">
            <m.div
              variants={ImageVariants}
              initial={"initial"}
              animate={"animate"}
              tabIndex={0}
            >
              <Image
                src={"/personalImages/shebllImage.png"}
                alt="Ahmed Shebll personal image"
                priority={true}
                quality={92}
                width={150}
                height={100}
                className="rounded-full bg-cover border-[3px] border-white shadow-xl pointer-events-none "
              />
            </m.div>
            <m.span
              variants={waveVariants}
              initial={"initial"}
              animate={"animate"}
              className="absolute bottom-0 text-5xl pointer-events-none hi right-2"
            >
              👋🏽
            </m.span>
          </section>
          <div
            className="flex flex-col items-center justify-center gap-8"
            tabIndex={0}
          >
            <div className="">
              <m.h1
                variants={TextVariants}
                initial={"initial"}
                animate={"animate"}
                className="py-4 text-4xl font-bold text-center text-transparent bg-opacity-50 md:text-7xl bg-clip-text bg-gradient-to-b from-[#141414] to-neutral-400/5 dark:from-neutral-50 dark:to-neutral-400/5"
              >
                Hey, I&apos;m <span className="font-bold ">Ahmed Shebl</span>
                <div className="br"></div>
                I&apos;m a junior{" "}
                <span className="font-bold ">Software Engineer </span>{" "}
              </m.h1>
              <m.p
                variants={TextVariants}
                initial={"initial"}
                animate={"animate"}
                className="max-w-xl mx-auto mt-4 text-base font-normal text-center text-gray-600 dark:text-neutral-300"
              >
                I specialize in Front-End Development with expertise in React
                and Next.js, creating responsive, interactive, seamless,
                scalable, and high-performance websites and mobile applications
              </m.p>
            </div>
            <m.div
              variants={btnVariants}
              initial={"initial"}
              animate={"animate"}
              className="flex justify-center items-stretch gap-3 flex-col md:flex-row w-[250px] md:w-full"
            >
              <Link
                href={"#contact"}
                className="flex items-center justify-center btn primary"
              >
                Contact Me here
                <span className="text-[22px] relative top-[-3px]">📨</span>
              </Link>
              <a
                className="flex items-center justify-center btn"
                href="files/AhmedResume.pdf"
                download={true}
              >
                Download CV
                <span className="text-[19.5px]">📑</span>
              </a>
              <Link
                className="flex items-center justify-center rounded-full btn"
                href={"https://www.linkedin.com/in/ahmed-shebl-07a331268/"}
                target="blank"
              >
                <Image
                  src={"/skillsSVG/icon-linkedin.svg"}
                  alt="Git logo"
                  width={26}
                  height={26}
                />
              </Link>
              <Link
                className="flex items-center justify-center btn"
                href={"https://github.com/shebll"}
                target="blank"
              >
                <Image
                  src={"/skillsSVG/icons8-git (1).svg"}
                  alt="Git logo"
                  width={26}
                  height={26}
                />
              </Link>
              <Link
                className="flex items-center justify-center btn"
                href={"https://www.upwork.com/freelancers/~014ebf95d7586f1308"}
                target="blank"
              >
                <Image
                  src={"/skillsSVG/upwork.png"}
                  alt="upwork logo"
                  width={24}
                  height={24}
                />
              </Link>
            </m.div>
          </div>
        </section>
      </LazyMotion>
    </section>
  );
}

export default Inter;
