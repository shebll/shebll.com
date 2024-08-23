"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
  const { refSection } = useActiveSectionInView({
    sectionName: "Projects",
    amount: 0.13,
  });
  const { scrollYProgress } = useScroll({
    target: refSection,
    offset: ["start start", "end end"],
  });

  return (
    <section
      role="region"
      aria-labelledby="projects-section"
      ref={refSection}
      id="projects"
      className="flex flex-col items-center justify-center gap-12 scroll-m-28"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 id="projects-section" className="headerText" tabIndex={0}>
          My Projects
        </h1>
        <p className="subText" tabIndex={0}>
          Every Project Pice Of Art .
        </p>
      </div>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project
            project={project}
            index={index}
            range={[index / projectsData.length, 1]}
            target={1 - (projectsData.length - index) * 0.05}
            progress={scrollYProgress}
          />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Projects;
