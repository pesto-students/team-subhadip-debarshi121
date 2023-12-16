import ProjectCard from "../components/ProjectCard";
import { projectsList } from "../utils/constants";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            PROJECTS
          </h1>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {projectsList.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                id={project.id}
                title={project.title}
                img={project.img}
                info={project.info}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
