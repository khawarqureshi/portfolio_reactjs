import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/khawar_qureshi.jpg";
import Social from "../components/Social";
import ParticlesBg from "particles-bg";
import MouseParticles from "react-mouse-particles";

// type ["color" "ball" "lines""thick""circle""cobweb""polygon""square""tadpole""fountain""random""custom"]

const Home = () => {
  return (
    <div className="condiv home">
      {/* <MouseParticles g={1} color="random" cull="col,image-wrapper" /> */}
      {/* with parameters example */}
      <MouseParticles
        g={1}
        num={6}
        color="random"
        cull="stats,image-wrapper"
        level={6}
      />
      <ParticlesBg type="random" bg={true} />
      {/* with parameters example */}
      {/* <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} /> */}
      <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
      <ReactTypingEffect
        text={["I am M. Khawar Qureshi", "I am a Front End Developer!!!"]}
        speed={60}
        eraseDelay={600}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={
                      i % 2 === 0 ? { color: "magenta" } : { color: "blue" }
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
      <Social />
      {/* <i className="fa fa-home" aria-hidden="true"></i> */}
    </div>
  );
};

export default Home;
