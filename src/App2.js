import React from "react";
import Contadores from "./Componentes/Contadores";
import ListArticle from "./Componentes/ListArticle";
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
      <Contadores></Contadores>
      <ListArticle></ListArticle>
    </div>
  );
}

export default App;
