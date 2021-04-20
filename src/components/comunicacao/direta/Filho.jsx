import React from "react";

export default function Filho(props) {
  return (
    <>
      <p>
        {props.children} {props.sobrenome}
      </p>
    </>
  );
}
