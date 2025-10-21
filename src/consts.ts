// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { Github, Linkedin, Youtube } from "@lucide/astro";

import SampleImage from "./assets/blog-placeholder-1.jpg";
import ProfilePic from "./assets/profile-pic.jpg";

export const SITE_URL = "https://shonebinu.com";
export const SITE_TITLE = "Shone's Portfolio";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const header = { logoTitle: "SB" };

export const footer = {
  // parses html
  content:
    "Made with ❤️ by Shone Binu • <a href='https://github.com/shonebinu/portfolio' class='link'>Source Code</a>",
};

export const about = {
  // parses html
  headLine: "Hi, I'm <span class='fancy-highlight'>Shone Binu</span>",
  tagLine: "Software Engineer / Full Stack Developer",
  profilePic: ProfilePic,
  // parses html
  description:
    "I’m a recent <u>Software Engineer</u> graduate who likes to keep tackling new problems. Currently I’m working on <u>React and Node.js</u> side of things. Outside of this, I work myself to improve myself on whatever I see fit.",
  links: [
    { title: "Github", logo: Github, link: "https://github.com/shonebinu/" },
    {
      title: "Linkedin",
      logo: Linkedin,
      link: "https://www.linkedin.com/in/shonebinu/",
    },
    {
      title: "Youtube",
      logo: Youtube,
      link: "https://www.youtube.com/@shone_binu",
    },
  ],
  resumeLink: "https://github.com/shonebinu",
  workExperience: [
    {
      jobTitle: "Full Stack Developer Intern",
      timeline: "May 2024 - Oct 2024",
      company: "Rabbitsquare • India",
      description:
        "Developed a comprehensive web solution for a Civil Service academy, including a customizable public website, a management portal, a user portal, and an exam result publishing system using the LAMP stack.",
    },
    {
      jobTitle: "Full Stack Developer Intern",
      timeline: "May 2024 - Oct 2024",
      company: "Rabbitsquare • India",
      description:
        "Developed a comprehensive web solution for a Civil Service academy, including a customizable public website, a management portal, a user portal, and an exam result publishing system using the LAMP stack.",
    },
  ],
  education: [
    {
      degreeName: "Bachelor of Computer Application",
      timeline: "Jun 2022 - Apr 2025",
      institution: "Nirmala College Muvattupuzha • India",
      description:
        "My computer science curriculum covered programming languages, data structures, algorithms, and software engineering, with practical experience in Java, C/C++, JavaScript, Linux and PHP.",
    },
  ],
  // parses html
  getInTouch:
    "Drop in an email at <a href='mailto:hello@shonebinu.com' class='primary-underline'>hello@shonebinu.com</a> or connect me on with one of my socials.",
};

export const projects = [
  {
    image: SampleImage,
    title: "MGU Scraper",
    techs: ["Streamlit", "Python", "BeautifulSoup"],
    description:
      "MGUScraper is a tool that simplifies the bulk extraction of student's exam results under MG University, Kottayam.",
    sourceLink: "https://github.com/shonebinu/MGUScraper",
    liveLink: "",
  },
  {
    image: SampleImage,
    title: "MGU Scraper",
    techs: ["Streamlit", "Python", "BeautifulSoup"],
    description:
      "MGUScraper is a tool that simplifies the bulk extraction of student's exam results under MG University, Kottayam.",
    sourceLink: "https://github.com/shonebinu/MGUScraper",
    liveLink: "",
  },
];

// add blog articles in /src/content/blog
