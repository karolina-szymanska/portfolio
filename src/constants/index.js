export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: "Semester Project 2, Auction",
    desc: "Auction is a website where users can add items to be bid on and bid on items other users have put up for auction. Users can get credits by selling items and use credit by buying items. Non-registered users can search through the listings.",
    subdesc: "Built with HTML5, Bootstrap, JavaScript, SASS.",
    href: "https://auction-semester-project-2.netlify.app/",
    github: "https://github.com/karolina-szymanska/auction-semester-project-2",
    texture: "/textures/project/project1.png",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/html5.svg",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "/assets/bootstrap.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.svg",
      },
      {
        id: 4,
        name: "Sass",
        path: "/assets/sass.svg",
      },
    ],
  },
  {
    title: "JavaScript CA, eCOM",
    desc: "The Homepage has a list of all the products. The individual product page displays data for a single product. Cart page lists all of the chosen products as well as a total. Contact page ensures form validation.",
    subdesc: "Built with React, React-Router-DOM, JavaScript, Zustand.",
    href: "https://javascript-frameworks-react-ca.netlify.app/",
    github: "https://github.com/karolina-szymanska/javascript-frameworks-ca",
    texture: "/textures/project/project2.png",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "React-Router-DOM",
        path: "/assets/reactrouter.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.svg",
      },
    ],
  },
  {
    title: "Project Exam 2, Holidaze",
    desc: "The two main aspects: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.",
    subdesc: "Built with Vite, React, React-Router-DOM, TailwindCSS.",
    href: "https://project-exam-2-karolina-szymanska.netlify.app/",
    github: "https://github.com/karolina-szymanska/project-exam-2",
    texture: "/textures/project/project3.png",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight3.png",

    tags: [
      {
        id: 1,
        name: "Vite.js",
        path: "/assets/vitejs.svg",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "React-Router-DOM",
        path: "/assets/reactrouter.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
    ],
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Karolina was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform. Her attention to detail and commitment to quality are unmatched. Highly recommend her for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Karolina delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Karolina. She was able to take our complex project requirements and turn them into a seamless, functional website. Her problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Karolina was a pleasure to work with. She understood our requirements perfectly and delivered a website that exceeded our expectations.",
  },
];
