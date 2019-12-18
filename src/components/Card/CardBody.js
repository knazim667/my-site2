import React from "react";

const borderColorToMap = {
  Graphic: "bg-f78acb",
  QA: "bg-c679e3",
  Database: "bg-eb6b3d"
};

const CardBody = props => {
  const { border, icon, heading, description } = props;
  return (
    <div className={`single-box ${borderColorToMap[border]}`}>
      <div className="icon">{icon}</div>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardBody;
