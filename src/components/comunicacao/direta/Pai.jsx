import React from "react";
import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      {/*1° Forma de herdar propriedades*/}
      <Filho {...props}>joão</Filho>
      {/*2° Forma de herdar propriedades*/}
      <Filho sobrenome={props.sobrenome}>Maria</Filho>
      {/*3° de herdar propriedades*/}
      <Filho sobrenome="Silva">Pedro</Filho>
    </div>
  );
}
