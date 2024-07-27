import ecomWebsite from "/assets/projects/ecom-website.jpeg";
import twitterIcon from "/assets/projects/twitter-logo.jpeg";
import todoApp from "/assets/projects/todo-app.jpeg";
import foodDelivery from "/assets/projects/food-delivery.jpeg";
import blogWebsite from "/assets/projects/blog-website.jpeg";
export const HERO_CONTENT = `Hey! I’m Ayush, a versatile full-stack developer with a flair for elegant code. My technical toolkit includes ReactJS, Next.js, and a dash of Sass for front-end magic, while Node.js, MongoDB, and Express.js power my backend wizardry. Beyond the code, I’m a collaborative problem-solver—a good communicator and a team player. Always eager to learn and create, I believe in building remarkable solutions together.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projectsHey there! I’m Ayush, a full-stack developer passionate about creating seamless web experiences. On the front end, I wield ReactJS, Next.js, Tailwind CSS, and a dash of Sass to craft pixel-perfect interfaces. For the backend, I rely on Node.js, MongoDB, MySQL, and Express.js to build robust systems. My mission? To engineer innovative solutions that drive business growth while delivering exceptional user experiences. Let’s collaborate and create something remarkable!`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "HclTech",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: ecomWebsite,
    description:
      "Created an eCommerce website that allows sellers to showcase their products by posting pictures, adding descriptions, including rate tags, and also allows the users to compare similar products by different sellers.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://evirac-novanest.netlify.app/",
  },
  {
    title: "Twitter clone",
    image: twitterIcon,
    description:
      "Built a Twitter clone with features like user login, registration, creating and deleting a tweet, adding an image to a tweet, liking and disliking a tweet, adding and replying to a tweet, retweet, read all the tweets in an app, create and edit a user, follow and unfollow user, view a user profile details, update profile picture including uploading images using multer, etc.A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "SASS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://github.com/evirac/Twitter_Clone/",
  },
  {
    title: "Food Delivery Webiste",
    image: foodDelivery,
    description:
      "Created a food delivery responsive website with features such as login, registration, creating and tracker orders, payment methods, admin login",
    technologies: ["React", "Node.js", "MongoDB", "HTML", "CSS", "SASS"],
    link: "#",
  },
  {
    title: "Blogging Platform",
    image: blogWebsite,
    description:
      "Created platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles using Nextjs",
    technologies: ["HTML", "CSS", "Next.js", "Express", "mySQL"],
    link: "#",
  },
  {
    title: "Task Management App",
    image: todoApp,
    description:
      "Created a cross-platform application for managing tasks and projects, with features such as task creation, assignment, and progress tracking usind flutter framework with dynamic theme which changes colors according to user's wallpaper",
    technologies: ["Flutter", "Dart"],
    link: "https://github.com/evirac/Todo-list",
  },
];

export const CONTACT = {
  phoneNo: "+91 797 5678 001 ",
  email: "ayushguptanew2@gmail.com",
};
