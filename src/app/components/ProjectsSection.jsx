import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-Commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Fullstack Roadmap",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
