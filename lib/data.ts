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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    location: "Egypt, Cairo University",
    description:
      "I will be graduated in 2024/8/8, After 4 years of studying computer science specific information system. I have learned the fundamental of programming and principles of software and fundamental of database, warehouse, design pattern, web, API, AI ...etc",
    icon: "🎓",
    date: "2020 - present",
  },  
  {
    title: "Web Development Intern",
    location: "Cairo, CodeSoft",
    description:
      "I worked Web Development Interner in CodeSoft learned basic of Web Development and make awesome project through this journey.",
    icon: "💻",
    date: "2023/8/30 - present",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Cairo, GrowIntern",
    description:
      "Get a awesome internship as full-stack developer with GrowIntern . My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    icon: "💻",
    date: "2023/8/30 - present",
  },
  {
    title: "Front-End Developer Freelancer",
    location: "Upwork",
    description:
      "I'm now a Front-End developer working as a freelancer on Upwork . My stack includes React, Next.js, TypeScript, Tailwind,  and ,framer-motion. I'm open to full-time opportunities.",
    icon: "💻",
    date: "2023/8/30 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bento 0.2",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Framer motion", "Tailwind"],
    imageUrl: "/projectImages/bento.png",
    demoUrl:"https://bentoclone.vercel.app/",
    repoUrl:"https://github.com/shebll/bento"
  },
  
  {
    title: "Promptobia",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js","Tailwind", "MongoDB", "Mongoess" ],
    imageUrl: "/projectImages/promptobia.png",
    demoUrl:"https://promptopia-project-iota.vercel.app/",
    repoUrl:"https://github.com/shebll/PromptopiaProject"
  },
  {
    title: "Travelia",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "CSS", "JS", "SASS"],
    imageUrl: "/projectImages/travelia.png",
    demoUrl:"https://shebll.github.io/Travelia/",
    repoUrl:"https://github.com/shebll/Travelia"
  },
  {
    title: "MetaVerse",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Framer motion", "Tailwind"],
    imageUrl: "/projectImages/metaverse.png",
    demoUrl:"https://metaversus-landing-page-iota.vercel.app/",
    repoUrl:"https://github.com/shebll/METAVERSUS-LANDING-PAGE"
  },
  {
    title: "Medium 0.2",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js","Tailwind", "Sanity"],
    imageUrl: "/projectImages/medium.png",
    demoUrl:"https://github.com/shebll/medium-blog-site",
    repoUrl:"https://medium-blog-site-ebtq.vercel.app/"
  },
] as const;

export const skillsData = [
  {
    description: "Confident with these frontEnd skills",
    name: "FrontEnd",
    skills:[
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",    
      "Tailwind",    
      "Framer Motion",
    ],
  },  
  {
    description: "Good knowledge in these backEnd skills",
    name: "BackEnd",
    skills:[    
      "MongoDB",
      "mongoose",
      "Prisma",
      "SQL",
      "Sanity",
      "API"
    ],
  },
  {
    description: "Fundamentals from my collage",
    name: "Fundamentals",
    skills:[    
      "SOLID Principals",
      "Design Pattern ",
      "DataBase",
      "Data Structure",
      "OOP",
      "problem Solving",
      "Data Warehouse",
    ],
  },
] as const;
// "Prisma",