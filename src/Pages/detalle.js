  import React, { Component } from "react";
  import  "../Style/App.css"
  import DescripcionMovies from "../Components/descripcionMovies"

  class DetalleMovies extends Component {
    render() {
      return (
        <div className="container container-detalles">
        <DescripcionMovies/>
        </div>
      );
    }
  }
  
  export default DetalleMovies;