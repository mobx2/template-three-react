import skills from "../data/skills";

function OurSkills() {
  return (
    <div className="our-skills" id="our-skills">
      <h2 className="main-title">Our Skills</h2>
      <div className="container">
        <img src="/imgs/skills.png" alt="skills" />
        <div className="skills">
          {skills.map((skill) => (
            <>
              <div className="skill">
                <h3>
                  {skill.name}
                  <span>{skill.percentage}%</span>
                </h3>
                <div className="the-progress">
                  <span
                    style={{ width: `${skill.percentage}%` }}
                    data-width={`${skill.percentage}%`}
                  ></span>{" "}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurSkills();
