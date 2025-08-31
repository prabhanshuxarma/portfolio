const Skills = () => {
  const skillSection = (title, skills) => (
    <div className="mb-5 last:mb-0">
      <h3 className="text-md font-semibold mb-2 text-dark">{title}</h3>
      <ul className="list-disc ml-5 md:text-sm text-xs text-zinc-700">
        {skills.map((skill, index) => (
          <li className="my-4" key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="p-5 bg-white rounded-xl border border-zinc-200">
      {skillSection("Frontend / UI Development", [
        "HTML5",
        "CSS3 / SCSS",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "jQuery",
        "React.js - UI",
        "Responsive Design",
        "Cross-browser Compatibility",
      ])}

      {skillSection("UI/UX Design", [
        "Figma",
        "Photoshop",
        "Illustrator",
        "Prototyping",
        "User Flow Design",
        "Mobile-first Design",
      ])}

      {skillSection("Soft Skills", [
        "Attention to Detail",
        "Team Collaboration",
        "Client Communication",
        "Problem Solving",
        "Time Management",
      ])}

      {skillSection("Tools & Others", [
        "Cursor AI",
        "Visual Studio Code",
        "Dreamweaver",
        "Sublime Text",
        "Git / GitHub",
        "ThemeForest HTML Templates",
      ])}
    </div>
  );
};

export default Skills;
