import React from "react";
import CardBody from "./CardBody";

const Card = props => {
  const { border, icon, heading, description } = props;
  return (
    <div className="col-lg-3 col-md-6">
      <CardBody
        border={border}
        icon={icon}
        heading={heading}
        description={description}
      />
    </div>
  );
};

export default Card;
