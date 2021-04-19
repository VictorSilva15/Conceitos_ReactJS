import React from "react";
import Primeiro from "./components/basico/Primeiro";
import ComParametro from "./components/basico/ComParametro";
import ComFilhos from "./components/basico/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basico/Repeticao";
import Condicional from "./components/basico/Condicional";
import CondicionalComIf from "./components/basico/CondicionalComIf";
import "./App.css";

const App = (props) => (
  <div className="App">
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>

    <Card titulo="#02 - Componente com Parâmetro">
      <ComParametro titulo="Esse é um título" subtitulo="esse é um Subtítulo" />
    </Card>

    <Card titulo="#03 - Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Victor</li>
          <li>Lincon</li>
          <li>Kauê</li>
          <li>Leonardo</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#04 - Componente Com repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="#05 - Condicional v1">
      <Condicional numero={8}></Condicional>
    </Card>

    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={17}></CondicionalComIf>
    </Card>
  </div>
);

export default App;
