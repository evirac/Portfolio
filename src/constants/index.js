import ecomWebsite from "/assets/projects/ecom-website.jpeg";
import twitterIcon from "/assets/projects/twitter-logo.jpeg";
import todoApp from "/assets/projects/todo-app.jpeg";
import foodDelivery from "/assets/projects/food-delivery.jpeg";
import blogWebsite from "/assets/projects/blog-website.jpeg";

export const HERO_CONTENT = `Hey! I’m Ayush, a versatile full-stack developer with a flair for elegant code. My technical toolkit includes ReactJS, Next.js, and a dash of Sass for front-end magic, while Node.js, MongoDB, and Express.js power my backend wizardry. Beyond the code, I’m a collaborative problem-solver—a good communicator and a team player. Always eager to learn and create, I believe in building remarkable solutions together.`;

export const ABOUT_TEXT = `As a passionate technologist, I've spent years exploring the vast landscape of programming languages and technologies. My journey began with C programming, but soon expanded to include Java, Python, Dart, and more. With a keen interest in building innovative solutions, I've developed a diverse range of projects, from web applications using React, Node.js, and MongoDB, to mobile apps with Kotlin and Flutter, and even games with C# in Unity and Godot. Through experimentation and continuous learning, I've honed my skills and cultivated a passion for creating cutting-edge technology solutions. This portfolio showcases my projects and experiences, highlighting my dedication to innovation and growth.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "HclTech",
    description: `As a Software Engineer at HCLTech, I successfully developed and maintained complex data pipelines using Azure Data Factory (ADF), leveraging complementary technologies like Synapse SQL, Azure Databricks, Azure DevOps, and Power BI to drive business insights. I effectively utilized a range of tools to design, implement, and optimize data solutions, delivering high-quality products with precision and expertise.`,
    technologies: ["ADF", "Azure devops", "SynapseSQL", "DataBricks"],
  },
  {
    year: "2023 Jan - 2023 March",
    role: "intern",
    company: "Campalin",
    description:
      "As an intern, I developed and maintained a food recipe website where users would upload, bookmark and comment on recipes using the technologies react, express, node.js and mongodb. It had features like searching with recipe names or tags.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"],
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
