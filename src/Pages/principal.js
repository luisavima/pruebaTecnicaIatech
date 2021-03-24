import React from "react";
import  "../Style/App.css"
import Header from "../Components/header"
import ListaMovies from "../Components/listaMovies"
import Paginacion from "../Components/paginacion"


const Principal = () => {
  return (
      <div className="container">
          <Header/>
          <ListaMovies/>
          <Paginacion/>
          
          
       
      </div>
  );
};

export default Principal;