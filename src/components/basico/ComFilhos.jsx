import React from "react";

const ComFilho = (props) => (
  <div>
    <h2>Filhos:</h2>
    <div>{props.children}</div>
  </div>
);
export default ComFilho;
