import React from "react";

export default function Button(props) {
  return (
    <button
      className={["btn", [props.btnType]].join(" ")}
      onClick={props.clicked}>
      {props.children}
    </button>
  );
}
