// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import SampleImage from "./assets/blog-placeholder-1.jpg";

export const SITE_URL = "https://shonebinu.com";
export const SITE_TITLE = "Shone's Portfolio";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const about = {
  name: "Shone Binu",
  tagLine: "Software Engineer / Full Stack Developer",
  profilePic: "",
  description:
    " I’m a recent Sofware Engineer graduate who likes to keep tackling new problems. Currently I’m working on React and Node.js side of things. Outside of this, I work myself to improve myself on whatever I see fit.",
  links: [{ logo: "", link: "" }],
  resumeLink: "",
  workExperience: [],
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

export const blog = {};

export const header = {};

export const footer = {};
