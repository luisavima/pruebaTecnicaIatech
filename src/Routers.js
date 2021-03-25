import React from "react";
import { Switch, Route } from "react-router-dom";
import Principal from "./Pages/principal";
import Detalle from "./Pages/detalle";

class Routers extends React.Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/detalle-movie/:id" component={Detalle} />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default Routers;
