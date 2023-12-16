import { Link } from "react-router-dom";
const ProjectCard = ({ id, title, img, info }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <Link to={`/projects/${id}`}>
        <div className="bg-gray-50 p-6 rounded-lg">
          <img
            className="rounded w-full object-cover object-center mb-6"
            src={img}
            alt={title}
          />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{info}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
