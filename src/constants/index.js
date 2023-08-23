import { m } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  mysql,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  python,
  java,
  django,
  git,
  figma,
  docker,
  meta,
  semicolonAfrica,
  donateCode,
  learnSpace,
  carrent,
  jobit,
  cartify,
  robo,
  shootFish,
  testimonial1,
  faceRecognition,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "django",
    icon: django,
  },

  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Digital Native",
    company_name: "Semicolon Africa",
    icon: semicolonAfrica,
    iconBg: "#FF0027",
    date: "January 2022 - April 2023",
    points: [
      "Developed a deeper understanding of project management and the importance of collective effort.",
      "Learned valuable skills in communication, coordination, and problem-solving within a team setting.",
      "Collaborated with fellow team members, gaining insights into effective teamwork in Software Development",
      "Engaged in real-world projects, gaining hands-on experience in software engineering",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ShootFish Digital",
    icon: shootFish,
    iconBg: "#FFFFFF",
    date: "June 2022 - November 2022",
    points: [
      "Developed and deployed web applications for multiple clients, demonstrating strong technical skills and a deep understanding of software development principles.",
      "Collaborated closely with clients to understand their design and development needs, resulting in the successful delivery of tailored solutions.",
      "Developed and implemented seamless frontend and backend solutions, ensuring smooth user experiences and meeting project requirements.",
      "Implemented efficient coding practices and utilized modern technologies, resulting in improved application performance and scalability.",
    ],
  },

  {
    title: "Software Engineer",
    company_name: "LearnSpace Africa",
    icon: learnSpace,
    iconBg: "#FEFDFE",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Volunteer",
    company_name: "Donate:Code",
    icon: donateCode,
    iconBg: "#053249",
    date: "Jan 2023 - Present",
    points: [
      "Collaborating with a team of talented individuals across the world to build great projects that make a positive impact.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Olayinka is a dedicated and growth-oriented developer who consistently delivers high-quality results. He stays updated with the latest technologies and approaches challenges with a logical mindset. His collaborative nature and articulate communication skills make him an asset in team environments. He produces robust and scalable solutions, reflecting his strong grasp of software engineering principles. With his commitment to excellence and passion for growth, he is an exceptional candidate for software engineering roles.",
    name: "Adewale Adeyinka",
    designation: "SW Engineer",
    company: "Empire Co",
    image: testimonial1,
  },
];

const projects = [
  {
    name: "Cartify",
    description:
      "A modern e-commerce platform that provides a seamless shopping experience for customers. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cartify,
    source_code_link: "https://github.com/koleajeolayinka/Cartify",
  },
  {
    name: "Job Application",
    description:
      "A web-based platforms used to connect employers with job seekers. Employers can use these platforms to post open positions that they are looking to fill, while job seekers visit or use the app to browse job opportunities and apply.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/koleajeolayinka/Job-Application",
  },
  {
    name: "Robo Friends Gallary",
    description:
      "React-based app that lets you search for robots based on their names using APIs. The application is fully responsive and functional on a wide range of screens. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: robo,
    source_code_link: "https://github.com/koleajeolayinka/robo-friends-gallery",
  },
  {
    name: "face Recognition",
    description:
      "Web-based platform that allows users to search for faces online by utilizing a URL to capture the desired face.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: faceRecognition,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
