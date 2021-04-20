import React from "react";
let num = 1;
export default function Sub(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.onClicar(Math.random().toFixed(4), "Valor" + num);
          num += 1;
        }}
      >
        Alterar
      </button>
    </div>
  );
}
