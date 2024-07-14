import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Shone Binu",
  logo: "/shone.webp",
  email: "shonebinualias@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/shonebinu",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:shonebinualias@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Shone Binu",
    description:
      "Full time student from India who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Shone Binu, a full time student from India who also loves building cool things using code.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Shone Binu",
    description:
      "Full time student from India who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
  Hi! I'm Shone Binu, a full-time computer science student at Nirmala College Muvattupuzha, India. I'm a big believer in the power of open source and love contributing to projects that make a difference.<br/><br/>
  Beyond coding, I enjoy a well-balanced life. When I have free time, I love spending quality time with family or exploring the outdoors on my bike. Reading and daily exercise are also important to me, helping me stay sharp and energized.<br/><br/>
  I actively seek out additional learning oppurtunities by taking various online courses. Currently, I'm diving deep into the Odin Project to further enhance my coding skills.
    `,
    image_l: {
      url: "/debconf23.webp",
      alt: "Left Picture",
    },
    image_r: {
      url: "/waterfall.webp",
      alt: "Right Picture",
    },
  },
  work: {
    description: `My past work experiences include the following, utilizing various technologies across different projects.`, // Markdown is supported
    items: [
      {
        title: "Full Stack Intern",
        company: {
          name: "RabbitSquare",
          image: "/rabbitsquare.webp",
          url: "",
        },
        date: "May 2024 - Present",
      },
      {
        title: "Virtual Internship",
        company: {
          name: "Microsoft",
          image: "/microsoft.webp",
          url: "",
        },
        date: "Jul 2023 - Sept 2023",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Shone Binu",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Weatherify",
      description: "A beautiful weather application powered by weatherapi.com",
      image: "/weatherify.webp",
      year: "2024",
      url: "https://github.com/shonebinu/weatherify",
    },
    {
      title: "MGUScraper",
      description: "MGU Scraper is a specialized tool designed to streamline the extraction of students exam results.",
      image: "/mgu_scraper.webp",
      year: "2023",
      url: "https://github.com/shonebinu/MGUScraper",
    },
    {
      title: "Taskify",
      description: "Local storage powered effective Todo List app made entirely using JavaScript. Fast and responsive!",
      image: "/taskify.webp",
      year: "2024",
      url: "https://github.com/shonebinu/taskify",
    },
    {
      title: "College Curriculum Programs",
      description: "Compiled and maintained a comprehensive collection of record programs and previous year programs over three years at university.",
      image: "/college_curriculum.webp",
      year: "2022",
      url: "https://github.com/shonebinu/collegeCurriculum/",
    }
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Shone Binu",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
