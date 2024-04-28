export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Resume",
    hash: "#resume",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    location: "Egypt, Cairo University",
    description:
      "Throughout my academic journey, I have acquired a comprehensive understanding of various programming fundamentals, including essential concepts, object-oriented programming (OOP), SOLID principles, design patterns, algorithms, data structures, databases, and data warehousing. These foundational skills have equipped me with a solid understanding of the core principles and best practices in the field of computer science.",
    icon: "🎓",
    date: "2020 - present",
  },
  {
    title: "Web Development Internship",
    location: "Cairo, CodeSoft",
    description:
      "I undertook a Web Development Internship at CodeSoft, where I gained a solid understanding of the basics of web development and successfully completed several impressive projects during this enriching journey.",
    icon: "💻",
    date: "2023/8/30 - 2023/9/30",
  },
  {
    title: "Full-Stack Developer Internship",
    location: "Cairo, GrowIntern",
    description:
      "Secure an exciting full-stack developer internship with GrowIntern, where I can leverage my skills in React, Next.js, TypeScript, Tailwind CSS, Prisma, and MongoDB to contribute to impactful projects and further enhance my expertise in web development.",
    icon: "💻",
    date: "2023/8/5 - 2023/9/6",
  },
  {
    title: "Front-End Developer Freelancer",
    location: "Upwork",
    description:
      "Currently, I am working as a freelance Front-End developer on Upwork, specializing in React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. I am actively seeking full-time opportunities to apply my skills and contribute to exciting projects.",
    icon: "💻",
    date: "2023/9/30 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Jotion",
    description:
      "🚀 Excited to share my new project – a feature-rich note-taking app! 📝✨ Built with Next.js, React.js, Tailwind CSS, and more. 🔐 GitHub login, smart note restoration, real-time updates, and a mobile-responsive design. 💻📱 Effortlessly manage, create, and organize notes anytime, anywhere! Explore it here and let me know your thoughts! 🌟",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Clerk",
      "Convex",
      "Zustand",
      "Sonner",
      "Blocknote",
      "Edgestore",
      "Emoji-mart",
    ],
    imageUrl: "/projectImages/jotion.png",
    demoUrl: "https://note-taking-tan.vercel.app/",
    repoUrl: "https://github.com/shebll/notion",
  },
  {
    title: "answerflow",
    description:
      "I worked as a freelancer front-end developer on an Upwork project for a client, the client wanted to make personal landing page which has a lot of animation and user interaction, My role involved collaborating with backend developers to implement the application, which included building a custom chatbot capable of engaging with users based on provided data. review from the client  ⭐⭐⭐⭐⭐",
    tags: [
      "React",
      "Next.js",
      "Next-auth",
      "Framer motion",
      "Tailwind",
      "gsap",
      "Zod",
    ],
    imageUrl: "/projectImages/answer.png",
    demoUrl: "https://answerflowai.com/",
    repoUrl: "https://github.com/shebll/AnswerFlow",
  },
  {
    title: "SHADEL",
    description:
      "During my tenure at WadyEline (Shadel) company, I freelanced as a Fullstack developer. My responsibilities encompassed working on the CMS backend using sanity.io and frontend development with Next.js. The application I contributed to offers a seamless dashboard for administrators to effortlessly add and manage products and machines through sanity.io.      ",
    tags: ["React", "Next.js", "Santiy.io", "Tailwind"],
    imageUrl: "/projectImages/answer.png",
    demoUrl: "https://shadel.vercel.app/",
    repoUrl: "https://github.com/shebll/shadel",
  },
  {
    title: "Bento 0.2",
    description:
      "I worked as a freelancer front-end developer on an Upwork project for a client, the client wanted to copy the Bento landing page which has a lot of animation and user interaction, review from the client  ⭐⭐⭐⭐⭐",
    tags: ["React", "Next.js", "Framer motion", "Tailwind"],
    imageUrl: "/projectImages/bento.png",
    demoUrl: "https://bentoclone.vercel.app/",
    repoUrl: "https://github.com/shebll/bento",
  },
  {
    title: "THEBEST",
    description:
      "In this project, I freelanced as a front-end developer, actively collaborating with backend developers to bring the application to life. This application served as a game player-manager, featuring dashboards tailored for both administrators and users.",
    tags: ["React", "Node.js", "Next.js", "Next-auth", "Tailwind"],
    imageUrl: "/projectImages/elxero.png",
    demoUrl: "https://thebest-football.vercel.app/",
    repoUrl: "https://github.com/shebll/thebest",
  },
  {
    title: "Medium 0.2",
    description:
      "I served as a full-stack developer on this project, leveraging Next.js for front-end development, implementing API functionality, and utilizing Sanity.io as the content management system (CMS). ",
    tags: ["React", "Next.js", "Tailwind", "Sanity", "API"],
    imageUrl: "/projectImages/medium.png",
    demoUrl: "https://medium-blog-site-ebtq.vercel.app/",
    repoUrl: "https://github.com/shebll/medium-blog-site",
  },
] as const;

export const skillsData = [
  {
    description: "Proficient and confident in these front-end skills.",
    name: "FrontEnd",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Next-Auth",
      "Tailwind",
      "Framer Motion",
    ],
  },
  {
    description: "Basic knowledge in these backEnd skills",
    name: "BackEnd",
    skills: [
      "Node.js",
      "MongoDB",
      "mongoose",
      "Prisma",
      "SQL",
      "Sanity",
      "REST API",
    ],
  },
  {
    description: "Foundational knowledge acquired from my college education.",
    name: "Fundamentals",
    skills: [
      "SOLID Principals",
      "Agile",
      "OOP",
      "System Analysis & Design",
      "DataBase",
      "Software Principals",
      "Design Pattern ",
      "Data Structure",
      "problem Solving",
      "Data Warehouse",
    ],
  },
] as const;
// "Prisma",
