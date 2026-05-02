// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import PenweaveImage from "./assets/projects/penweave.png";
import MGUScraperImage from "./assets/projects/mguscraper.png";
import FlashifyImage from "./assets/projects/flashify.png";
import WeatherifyImage from "./assets/projects/weatherify.png";
import BriefImage from "./assets/projects/brief.svg";
import DefuseImage from "./assets/projects/defuse.svg";
import LipiImage from "./assets/projects/lipi.svg";
import ExchangeImage from "./assets/projects/exchange.svg";
import PlaceholderImage from "./assets/projects/placeholder.svg";

export const SITE_URL: string = "https://shonebinu.com";

export const ENABLE_STARDUST_BG: boolean = false;

export const meta = {
  about: {
    // index page
    title: "Shone Binu",
    description:
      "Hi, I'm Shone Binu, a software engineer. Welcome to my little corner of the internet!",
  },
  projects: {
    title: "Projects | Shone Binu",
    description:
      "Here are some of my projects — things I’ve built, experimented with, and had fun creating.",
  },
  blog: {
    title: "Blog | Shone Binu",
    description:
      "This is my blog — a place where I share thoughts, ideas, and things I’m learning along the way.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "SB" };

export const footer: Footer = {
  // parses html
  content:
    "Made with ❤️ by Shone Binu • <a href='https://github.com/shonebinu/portfolio' class='link'>Source Code</a>",
};

export const about: About = {
  // parses html
  headLine:
    "Hi, I'm <span class='fancy-highlight font-black'>Shone Binu</span>",
  tagLine: "Software Engineer / Full Stack Developer",
  profilePic: ProfilePic,
  // parses html
  description:
    "I’m a recent <u>Software Engineer</u> graduate from India 🇮🇳 who likes to keep tackling new problems. Currently, I’m working on the <u>React/Node.js</u> and <u>GTK</u> side of things. Outside of these, I work on improving myself in whatever I see fit.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/shonebinu/" },
    { icon: "Linkedin", href: "https://www.linkedin.com/in/shonebinu/" },
    { icon: "Youtube", href: "https://www.youtube.com/@shone_binu" },
  ],
  resumeHref:
    "https://drive.google.com/file/d/10dfGCIiX2b7Wf-Lj51ypt3UHgPiPQ3ZV/view?usp=sharing",
  workExperience: [
    {
      title: "Full Stack Developer Intern",
      timeline: "May 2024 - Oct 2024",
      company: "Rabbitsquare • India",
      description:
        "Developed a LAMP stack web solution for a Civil Service academy, including a customizable public website, management portal, user portal, and exam result publishing system.",
    },
  ],
  education: [
    {
      title: "Bachelor of Computer Application",
      timeline: "Jun 2022 - Apr 2025",
      institution: "Nirmala College Muvattupuzha • India",
      description:
        "Studied core computer science fundamentals including programming languages, data structures, algorithms, operating systems, and networking, with practical experience in Java, C/C++, JavaScript, PHP, and Linux.",
    },
  ],
  // parses html
  getInTouch:
    "Drop me an email at <a href='mailto:mail@shonebinu.com' class='primary-underline'>mail@shonebinu.com</a> or connect with me on one of my socials.",
};

export const projects: Project[] = [
  {
    logoImage: BriefImage,
    title: "Brief",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Brief lets you browse community-maintained command line help pages. It uses tldr-pages as the data source.",
    sourceHref: "https://github.com/shonebinu/Brief",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Brief",
  },
  {
    logoImage: LipiImage,
    title: "Lipi",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Lipi is for installing and managing fonts from Google Fonts repo contaning thousands of fonts.",
    sourceHref: "https://github.com/shonebinu/Lipi",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Glyph",
  },
  {
    logoImage: DefuseImage,
    title: "Defuse",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Defuse lets you remove image backgrounds locally. Processing is performed using the ISNet-general model through ONNX Runtime.",
    sourceHref: "https://github.com/shonebinu/Defuse",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Defuse",
  },
  {
    logoImage: ExchangeImage,
    title: "Exchange",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Exchange does conversion between the XML and Blueprint GTK UI definition formats. It uses blueprint-compiler under the hood.",
    sourceHref: "https://github.com/shonebinu/Exchange",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Exchange",
  },
  {
    logoImage: PlaceholderImage,
    title: "Zed React Snippets",
    techs: ["Javascript"],
    description:
      "Zed extension with converted React/Redux/React-Native snippets from the popular 'ES7+ React/Redux/React-Native snippets' VSCode extension. ",
    sourceHref: "https://github.com/shonebinu/zed-react-snippets",
    liveHref: "https://zed.dev/extensions/react-snippets-es7",
  },
  {
    logoImage: PenweaveImage,
    title: "Penweave",
    techs: ["React", "Supabase", "daisyUI"],
    description:
      "Penweave is a CodePen‑like tool that lets users run their HTML/CSS/JS in a browser environment with secure preview and sharing.",
    sourceHref: "https://github.com/shonebinu/penweave/",
    liveHref: "https://penweave.pages.dev",
  },
  {
    logoImage: MGUScraperImage,
    title: "MGU Scraper",
    techs: ["Python", "Streamlit", "Beautiful Soup"],
    description:
      "MGU Scraper is a tool designed to simplify the extraction and analysis of bulk student exam results from MGU Kottayam University.",
    sourceHref: "https://github.com/shonebinu/MGUScraper",
    liveHref: "https://mguscraper.streamlit.app/",
  },
  {
    logoImage: FlashifyImage,
    title: "Flashify",
    techs: ["PHP", "MySQL", "LAMP"],
    description:
      "Flashify is a minimal, beautiful, and responsive web-based flashcard application built using the LAMP stack.",
    sourceHref: "https://github.com/shonebinu/flashify",
    liveHref: "https://flashify.shonebinu.com/",
  },
  {
    logoImage: WeatherifyImage,
    title: "Weatherify",
    techs: ["Javascript", "Webpack"],
    description:
      "Weather app featuring glassmorphism design, powered by weatherapi.com.",
    sourceHref: "https://github.com/shonebinu/weatherify",
    liveHref: "https://shonebinu.github.io/weatherify/",
  },
];

// add blog articles in /src/content/blog
