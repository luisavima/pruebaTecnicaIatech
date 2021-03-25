import React from "react";
import { Switch, Route } from "react-router-dom";
import Principal from "./Pages/principal";

class Routers extends React.Component {
  render() {
    return (
      <div>
        <Route>
        <Switch>
                <Route exact path="/" component={Principal} />               
              </Switch>
        </Route>
        </div>
           
        
        
    );
  }
}

export default Routers;
