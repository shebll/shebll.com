"use client";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";
import { variantsQ } from "@/utils/motion/variants";
import { motion, useScroll, useTransform } from "framer-motion";

function calculateAge(birthDate: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

function About() {
  const { refSection } = useActiveSectionInView({
    sectionName: "About",
    amount: 0.5,
  });

  const { scrollYProgress } = useScroll({
    target: refSection,
    offset: ["center end", "end 600px"],
  });

  const Q1TranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "240px"]);
  const Q1Rotate = useTransform(scrollYProgress, [0, 1], [3, 26]);
  //////////
  const Q2TranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "-270px"]);
  const Q2Rotate = useTransform(scrollYProgress, [0, 1], [6, -26]);
  //////////
  const Q3TranslateX = useTransform(scrollYProgress, [0, 1], ["20px", "260px"]);
  const Q3Rotate = useTransform(scrollYProgress, [0, 1], [8, -26]);
  //////////
  const Q4TranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20px", "-300px"]
  );
  const Q4Rotate = useTransform(scrollYProgress, [0, 1], [-28, 26]);
  //////////
  const Q5TranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "290px"]);
  const Q5TranslateY = useTransform(scrollYProgress, [0, 1], ["-80px", "56px"]);
  const Q5Rotate = useTransform(scrollYProgress, [0, 1], [3, -15]);
  //////////

  return (
    <section
      role="region"
      aria-labelledby="about-me-section"
      ref={refSection}
      id="about"
      className="relative flex flex-col items-center justify-center gap-12 scroll-m-28"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 id="about-me-section" tabIndex={0} className="headerText">
          About Me
        </h1>
        <p tabIndex={0} className="subText">
          Answers To All Questions In Your Mind .
        </p>
      </div>
      <div className="w-full md:w-[650px] flex flex-col gap-4">
        <h2 className="paragraph dark:!text-gray-50" tabIndex={0}>
          My name is Ahmed Mohamed, and I&apos;m a{" "}
          {calculateAge(new Date(2001, 11, 26))}-year-old graduate in Computer
          Science from Cairo University , specializing in Information Systems. I
          reside in Cairo, Egypt.
        </h2>
        <h3 className="paragraph dark:!text-gray-50" tabIndex={0}>
          specializing in{" "}
          <span className="font-bold marked">Front-End Development</span> with a
          solid foundation in backend technologies. With 1 year of experience, I
          creating responsive, interactive , seamless , scalable, and
          high-performance websites and mobile applications. My expertise
          includes React and Next.js, and I am passionate about delivering
          modern, user-friendly web solutions.
        </h3>
      </div>
      <div className="hidden lg:block ">
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{ rotate: Q1Rotate, translateX: Q1TranslateX }}
          className="Question top-[14%] right-0
        "
        >
          What Are You Study ?
        </motion.p>
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{ rotate: Q2Rotate, translateX: Q2TranslateX }}
          className="Question top-[22%] left-0
        "
        >
          What Is Your Passion ?
        </motion.p>
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{ rotate: Q3Rotate, translateX: Q3TranslateX }}
          className="Question top-[40%] right-2
        "
        >
          How Old Are You ?
        </motion.p>
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{ rotate: Q4Rotate, translateX: Q4TranslateX }}
          className="Question top-[46%] left-2
        "
        >
          Where do you reside?
        </motion.p>
        <motion.p
          variants={variantsQ}
          initial={"hidden"}
          whileInView={"show"}
          style={{
            rotate: Q5Rotate,
            translateX: Q5TranslateX,
            translateY: Q5TranslateY,
          }}
          className="Question bottom-[10%] left-10
        "
        >
          Which university are you attending ?
        </motion.p>
      </div>
    </section>
  );
}

export default About;
