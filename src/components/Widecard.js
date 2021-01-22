import React from "react";

const Widecard = (props) => {
  return (
    <div className="widecard">
      <div className="compdet">
        <h3>{props.title}</h3>
        <h4 className="secondtext">{props.where}</h4>
        <h4 className="secondtext">
          {props.from} - {props.to}
        </h4>
      </div>
    </div>
  );
};

export default Widecard;
