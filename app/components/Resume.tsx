"use client";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

function Resume() {
  const { refSection } = useActiveSectionInView({
    sectionName: "Resume",
    amount: 0.1,
  });
  const refText = useRef(null);
  const { scrollYProgress: s1 } = useScroll({
    target: refText,
    offset: ["center end", "end 600px"],
  });
  const refImg2 = useRef(null);
  const { scrollYProgress: s2 } = useScroll({
    target: refImg2,
    offset: ["center end", "end 1200px"],
  });
  const refImg3 = useRef(null);
  const { scrollYProgress: s3 } = useScroll({
    target: refImg3,
    offset: ["start 100px", "end 300px"],
  });
  const { scrollYProgress: s4 } = useScroll({
    target: refImg3,
    offset: ["700px end", "-100px start"],
  });
  const scale = useTransform(s1, [0, 1], [1, 0.5]);
  const transform = useTransform(s1, [0, 1], ["0px", "900px"]);

  const transformZ2 = useTransform(s2, [0, 1], [-100, 0]);

  const transformZ3 = useTransform(s3, [0, 1], [-100, 0]);

  const transformZ4 = useTransform(s4, [0, 1], [0, 1]);
  return (
    <section id="resume" className="relative resumeSection" ref={refSection}>
      <motion.div
        className="relative z-10 hidden cv md:block"
        ref={refImg2}
        style={{ scale: scale, translateY: transform }}
      >
        <div className="relative z-20 front">
          <Image
            src={"/personalImages/11.jpg"}
            alt="1Resume image"
            width={900}
            height={700}
            quality={92}
          />
        </div>
        <div className="subCv dark:bg-[#090c13] bg-[#f9fafb] z-10 relative">
          <motion.div
            className="origin-top middle "
            style={{ rotateX: transformZ2 }}
            ref={refImg3}
          >
            <Image
              src={"/personalImages/22.jpg"}
              alt="1Resume image"
              width={900}
              height={700}
              quality={92}
            />
          </motion.div>
        </div>
        <motion.div
          className="relative z-0 origin-top final"
          style={{ rotateX: transformZ3 }}
        >
          <Image
            src={"/personalImages/33.jpg"}
            alt="1Resume image"
            width={900}
            height={700}
            quality={92}
          />
        </motion.div>
      </motion.div>
      <div className="block md:hidden">
        <Image
          src={"/personalImages/Ahmed_ResumeH1.png"}
          alt="1Resume image"
          width={900}
          height={700}
          quality={92}
        />
      </div>
      <div
        ref={refText}
        className="downloadCv text-gray-500 text-4xl md:text-7xl font-bold flex flex-col justify-center items-center gap-4 uppercase  mt-[70px] md:mt-[200px] z-20 relative text-center "
      >
        A little
        <br />
        memory!
        <a className="btn primary" href="files/AhmedResume.pdf" download={true}>
          DOWNLOAD MY CV
        </a>
      </div>
    </section>
  );
}

export default Resume;

// eslint: {
//   ignoreDuringBuilds: true,
// },
