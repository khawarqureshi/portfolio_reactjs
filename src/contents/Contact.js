import React from "react";
import Social from "../components/Social";
import ParticlesBg from "particles-bg";
const Contact = () => {
  return (
    <div className="condiv">
      <ParticlesBg type="random" bg={true} />
      <h1 className="subtopic">Contact Me</h1>
      <h3>Email : khawarqureshi08@gmail.com</h3>
      <h3>Instagram : qkhawar</h3>
      <Social />
    </div>
  );
};

export default Contact;
