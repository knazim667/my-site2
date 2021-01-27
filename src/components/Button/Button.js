import React from "react";

export default function Button({ btnType, clicked, children }) {
  return (
    <button className={["btn", [btnType]].join(" ")} onClick={clicked}>
      {children}
    </button>
  );
}
