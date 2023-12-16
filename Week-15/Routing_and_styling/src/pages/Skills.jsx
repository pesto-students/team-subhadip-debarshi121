import SkillCard from "../components/SkillCard";
import { skillsList } from "../utils/constants";

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto w-6/12">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            MY SKILLS
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsList.map((skill, i) => {
            return <SkillCard skill={skill} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
