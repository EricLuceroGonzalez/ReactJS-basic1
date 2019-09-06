import React from "react";
import Contadores from "./Componentes/Contadores";
// import Mensaje from "./Componentes/Mensaje";
// import Contador from "./Componentes/Contador";

function App() {
  return (
    <div
      style={{
        margin: "70px auto",
        border: "2px dashed red",
        boxShadow: "8px 8px 10px gray"
      }}
    >
      <h2>Hello World</h2>
      <p>{2 + 5}</p>
      <Contadores></Contadores>
    </div>
  );
}

export default App;
