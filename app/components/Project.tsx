import { projectsData } from "@/lib/data";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { LegacyRef, useRef } from "react";
type props = {
  project: (typeof projectsData)[number];
  index: number;
  range: number[];
  target: number;
  progress: MotionValue<number>;
};
function getRandomGradient(index: number) {
  const hue1 = (index * 137.5) % 360; // Use golden angle to get different hues
  const hue2 = (hue1 + 60) % 360; // Offset by 60 degrees for complementary color
  return `linear-gradient(135deg, hsl(${hue1}, 70%, 20%), hsl(${hue2}, 70%, 20%))`;
}

interface CSSProperties extends React.CSSProperties {
  "--tag-count"?: number;
}

function Project({ project, index, range, target, progress }: props) {
  const gradientStyle = {
    backgroundImage: getRandomGradient(index),
  };
  const style: CSSProperties = {
    "--tag-count": project.tags.length,
  };

  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 60px"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const imageBlur = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const scale = useTransform(progress, range, [1, target]);

  return (
    <motion.section
      style={{
        scale,
        top: `${60 + index * 30}px`,
        // ...gradientStyle,
      }}
      role="region"
      aria-label="project"
      ref={cardRef}
      className="group projectCard flex flex-row-reverse even:flex-row gap-2 md:w-[800px] lg:w-[1200px] overflow-hidden
      bg-gray-200 rounded-2xl shadow-2xl transition-all dark:bg-[#17181c] items-center sticky border-[1px] border-[#26272e]"
    >
      <div className="flex flex-col justify-start flex-1 gap-6 px-10 py-14 ">
        <p className="bg-transparent border-white rounded-full border-[1px] py-1 px-6 font-semibold w-fit">
          {project.category}
        </p>
        <h1 className="text-3xl font-bold uppercase" tabIndex={0}>
          {project.title}
        </h1>
        <p className="text-lg font-medium dark:text-gray-300" tabIndex={0}>
          {project.description}
        </p>
        <div className="slider" style={style}>
          <ul className="slider-track">
            {project.tags.map((skill, index) => (
              <li
                key={index}
                tabIndex={0}
                className="slide"
                // className="px-3 py-2 bg-black/[0.05] dark:bg-black/[0.7] rounded-md shadow-md slide"
              >
                {skill}
              </li>
            ))}
            {project.tags.map((skill, index) => (
              <li
                key={index + 20}
                tabIndex={0}
                className="slide"
                // className="px-3 py-2 bg-black/[0.05] dark:bg-black/[0.7] rounded-md shadow-md slide"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-5 md:flex-row">
          <a
            href={project.demoUrl}
            target="_blank"
            className="btn primary dark:bg-black/[0.7] "
          >
            live Demo
            <Image
              src={"/skillsSVG/linkLogo.png"}
              alt="linkLogo"
              width={22}
              height={22}
            />
          </a>
          <a href={project.repoUrl} target="_blank" className="btn">
            Repo{" "}
            <Image
              src={"/skillsSVG/git2logo.png"}
              alt="Git logo"
              width={22}
              height={22}
            />{" "}
          </a>
        </div>
      </div>
      <motion.div
        style={{
          opacity: scrollYProgress,
          filter: useTransform(imageBlur, (value) => `blur(${value}px)`),
        }}
        className="relative flex-1 hidden m-4 overflow-hidden shadow-2xl md:block rounded-2xl h-[300px]"
      >
        <motion.div style={{ scale: imageScale }}>
          <Image
            src={project.imageUrl}
            alt="project image"
            width={560}
            height={560}
            className="absolute w-full transition-all"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Project;
