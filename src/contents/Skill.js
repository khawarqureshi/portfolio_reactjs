import React, { useState } from "react";
import ParticlesBg from "particles-bg";

const Skills = () => {
  const [myskills] = useState([
    "HTML",
    "CSS",
    "Flexbox",
    "JS",
    "REACT JS",
    "MongoDB",
  ]);
  return (
    <div className="condiv skills">
      <ParticlesBg type="random" bg={true} />
      <h1 className="subtopic">My Skills</h1>
      <ul>
        {myskills.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </div>
  );
};
export default Skills;
