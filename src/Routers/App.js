import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../Pages/principal.js";
import Detalle from "../Pages/detalle.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/Detalle" component={Detalle} />        
      </Switch>
    </BrowserRouter>
  );
};

export default App;
