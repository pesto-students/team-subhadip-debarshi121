const SkillCard = ({ skill }) => {
  return (
    <div className="px-3 border rounded bg-indigo-500 ">
      <h2 className="text-white font-medium">{skill}</h2>
    </div>
  );
};

export default SkillCard;
