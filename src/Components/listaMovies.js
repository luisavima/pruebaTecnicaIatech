import React from "react";
import TarjetaMovies from "../Components/tarjetaMovies";
import foto from "../images/foto.jpg"

class ListaMovies extends React.Component {
    listaMovies =[
        {
            id:"1",
            nombre:"Coming 2 America",
            imagen:foto

        },
        {
            id:"2",
            nombre:"Coming 2 America",
            imagen:foto
            
        },
        {
            id:"3",
            nombre:"Coming 2 America",
            imagen:foto
            
        },
        {
            id:"4",
            nombre:"Coming 2 America",
            imagen:foto
            
        },
        {
            id:"5",
            nombre:"Coming 2 America",
            imagen:foto
            
        },
        {
            id:"6",
            nombre:"Coming 2 America",
            imagen:foto
            
        },
        {
            id:"7",
            nombre:"Coming 2 America",
            imagen:foto
            
        },
        {
            id:"8",
            nombre:"Coming 2 America",
            imagen:foto
        },
    ];
  render() {
    return (
      <div className="container marginTop">
        <div className="row marginTop">
          <TarjetaMovies movies={this.listaMovies} />
        </div>
      </div>
    );
  }
}

export default ListaMovies;
