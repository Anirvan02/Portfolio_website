import React from 'react';
import '../styles/Skills.css'; // Create a CSS file for styles

const Skills = () => (
  <div id="skills" className="skills_section">
    <div className="skills_head">
      <h2>My Skills</h2>
    </div>
    <div className="skills_main">
      <SkillBar skill="Java" level="90%" />
      <SkillBar skill="C/Cpp" level="80%" />
      <SkillBar skill="Python" level="70%" />
      <SkillBar skill="Solidity" level="60%" />
      <SkillBar skill="HTML/CSS" level="80%" />
      <SkillBar skill="JavaScript" level="60%" />
      <SkillBar skill="React.js" level="60%" />
      <SkillBar skill="MongoDB/MySQL" level="70%" />
      <SkillBar skill="Adobe Illustrator" level="80%" />
      <SkillBar skill="Canva" level="80%" />
    </div>
  </div>
);

const SkillBar = ({ skill, level }) => (
  <div className="skill_bar">
    <div className="info">
      <p>{skill}</p>
      <p>{level}</p>
    </div>
    <div className="bar">
      <span className={skill.toLowerCase().replace(/[^a-z0-9]/gi, '')}></span>
    </div>
  </div>
);

export default Skills;
