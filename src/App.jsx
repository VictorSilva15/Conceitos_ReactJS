import React from "react";
import Primeiro from "./components/basico/Primeiro";
import ComParametro from "./components/basico/ComParametro";
import ComFilhos from "./components/basico/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basico/Repeticao";
import Condicional from "./components/basico/Condicional";
import CondicionalComIf from "./components/basico/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/input";
import Contador from "./components/contador/Contador";
import "./App.css";

const App = (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#01 - Primeiro Componente" color="#3FC5D5">
        <Primeiro />
      </Card>

      <Card titulo="#02 - Componente com Parâmetro" color="#D55F3F">
        <ComParametro
          titulo="Esse é um título"
          subtitulo="esse é um Subtítulo"
        />
      </Card>

      <Card titulo="#03 - Componente com Filhos" color="#FFC300">
        <ComFilhos>
          <ul>
            <li>Victor</li>
            <li>Lincon</li>
            <li>Kauê</li>
            <li>Leonardo</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#04 - Componente Com repetição" color="#C70039">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#05 - Condicional v1" color="#3F4FD5 ">
        <Condicional numero={8}></Condicional>
      </Card>

      <Card titulo="#06 - Condicional v2" color="#D53F88 ">
        <CondicionalComIf numero={17}></CondicionalComIf>
      </Card>

      <Card titulo="#07 - Comunicação direta" color="#2AD43F">
        <Pai sobrenome="Santos" />
      </Card>

      <Card titulo="#08 - Comunicação Indireta" color="#000">
        <Super />
      </Card>

      <Card titulo="#09 - Input" color="#912AD4 ">
        <Input />
      </Card>

      <Card titulo="#10 - Contador" color="#E1AB25  ">
        <Contador passo={10} valor={100} />
      </Card>
    </div>
  </div>
);

export default App;
