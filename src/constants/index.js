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
    desc: "Auction is a website where users can add items to be bid on and bid on items other users have put up for auction. Users can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.",
    subdesc: "Built with HTML5, Bootstrap, JavaScript and SASS.",
    href: "https://auction-semester-project-2.netlify.app/",
    // texture: "/textures/project/project1.mp4",
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
    subdesc: "Built with React, React-Router-DOM, JavaScript and Zustand.",
    href: "https://javascript-frameworks-react-ca.netlify.app/",
    // texture: "/textures/project/project2.mp4",
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
    subdesc: "Built with Vite, React, React-Router-DOM and TailwindCSS.",
    href: "https://project-exam-2-karolina-szymanska.netlify.app/",
    // texture: "/textures/project/project3.mp4",
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
