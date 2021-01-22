import React from "react";
import Widecard from "../components/Widecard";
import ParticlesBg from "particles-bg";

const Education = () => {
  return (
    <div className="condiv">
      <ParticlesBg type="random" bg={true} />
      <h1 className="subtopic">My Education</h1>
      <Widecard
        title="BS (IT)"
        where="Bahria University"
        from="2016"
        to="2020"
      />
      <Widecard
        title="F(Sc) Pre_Engg"
        where="Punjab College"
        from="2014"
        to="2016"
      />
      {/*    <Widecard
        title="Science"
        where=" Barkat Ali School"
        from="2012"
        to="2014"
      /> */}
    </div>
  );
};

export default Education;
