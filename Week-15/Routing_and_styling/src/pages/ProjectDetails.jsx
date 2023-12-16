import { useParams } from "react-router-dom";
import { projectsList } from "../utils/constants";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsList.find((p) => p.id === Number(id));
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-3/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
          alt={project.title}
          src={project.img}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
            {project.title}
          </h1>
          <p className="mb-8 leading-relaxed">{project.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
