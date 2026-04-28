import brainTumorMRI from "/assets/projects/Brain_Tumor_MRI_Classification.png";
import multiTaskAI from "/assets/projects/Multi-Task_AI_Application.png";
import smartPremium from "/assets/projects/Smart_Premium_Prediction_System.png";

export const HERO_CONTENT = `I’m Ayush Gupta, a Software Engineer working at the intersection of data engineering and AI. I enjoy building systems that don’t just process data but actually make sense of it — from large-scale ETL pipelines to machine learning applications.`;

export const ABOUT_TEXT = `I've spent the last few years working with data pipelines, automation, and machine learning systems. My core experience comes from building and managing ETL workflows, but over time, I've developed a strong interest in AI — especially generative AI and real-world ML applications. What I enjoy most is breaking down complex problems, simplifying systems, and building solutions that are both efficient and practical. Whether it's optimizing pipelines or experimenting with AI models, I like working on things that have clear impact.`;

export const TECHNICAL_SKILLS = [
  // Languages & Core Tools:
// Python, SQL, JavaScript
{
  category: "Languages & Core Tools",
  skills: ["Python", "SQL", "JavaScript"],
},
// Data & Machine Learning:
// Pandas, NumPy, Scikit-learn, EDA, Feature Engineering, Model Evaluation
{
  category: "Data & Machine Learning",
  skills: ["Pandas", "NumPy", "Scikit-learn", "EDA", "Feature Engineering", "Model Evaluation"],
},
// AI & Modern ML:
// LLMs, RAG, Prompt Engineering, LangChain, Vector Databases
{
  category: "AI & Modern ML",
  skills: ["LLMs", "RAG", "Prompt Engineering", "LangChain", "Vector Databases"],
},
// Web & Frameworks:
// Django, DRF, React, Node.js, Streamlit
 { category: "Web & Frameworks",
  skills: ["Django", "DRF", "React", "Node.js", "Streamlit"],
},
// Data Engineering & Cloud:
// Azure Data Factory (ADF), Azure Synapse SQL, ETL Pipelines
 { category: "Data Engineering & Cloud",
  skills: ["Azure Data Factory (ADF)", "Azure Synapse SQL", "ETL Pipelines"],
},
// Databases:
// PostgreSQL, MongoDB, MySQL
  { category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SynapseSQL"],
  },

];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "HclTech",
    description: `I work as a Software Engineer with around 3 years of experience in data engineering and AI/ML. My background includes building scalable data pipelines, working with Azure tools, and developing machine learning-based applications. Recently, I’ve been focusing more on AI systems — especially areas like LLMs, RAG, and production-ready ML workflows — while still keeping a strong foundation in data engineering.`,
    technologies: ["ADF", "Azure devops", "SynapseSQL", "DataBricks", "Python", "MLflow", "LLMs", "RAG"],
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
    title: "Brain Tumor MRI Classification",
    image: brainTumorMRI,
    description:
      "Developed a CNN-based model for brain tumor classification using MRI datasets, achieving ~88–92% accuracy through data preprocessing and augmentation techniques. Improved model generalization by applying normalization, resizing, and augmentation, reducing overfitting by ~15%. Built an end-to-end computer vision pipeline reducing manual diagnostic effort by ~30% in simulated testing scenarios.",
    technologies: ["Python", "CNN", "Deep Learning", "Computer Vision"],
    link: "#",
  },
  {
    title: "Multi-Task AI Application",
    image: multiTaskAI,
    description:
      "Designed a modular AI system integrating image generation, next-word prediction, sentiment analysis, and text summarization, supporting 4 AI tasks in a single architecture. Implemented NLP and deep learning models achieving ~85% accuracy in sentiment classification and coherent text generation. Reduced inference latency by ~20% through optimized model loading and modular execution pipelines.",
    technologies: ["Python", "Deep Learning", "NLP", "LLMs"],
    link: "#",
  },
  {
    title: "Smart Premium Prediction System",
    image: smartPremium,
    description:
      "Built a regression model to predict insurance premiums, achieving R² score of ~0.82–0.88 after feature engineering and model tuning. Performed EDA and feature selection, improving model performance by ~18% compared to baseline models. Developed a reusable ML pipeline, reducing model retraining time by ~25% and improving workflow efficiency.",
    technologies: ["Python", "Scikit-learn", "Pandas", "ML"],
    link: "#",
  },
];

export const CONTACT = {
  phoneNo: "+91 797 5678 001 ",
  email: "ayushguptanew2@gmail.com",
};
