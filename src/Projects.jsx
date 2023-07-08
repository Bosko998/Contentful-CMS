import React from "react";
import SingleProject from "./SingleProject";
import data from "./data";
import useFetchProjects from "./fetchProjects";
function Projects() {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section className="projects">
        <div className="projects-center">
          <h2>loading...</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="project">
      <h2>projects</h2>
      <div className="title-underline"></div>
      <div className="project-div">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
