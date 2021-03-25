import React from "react";
import  "../Style/App.css"
import Header from "../Components/header"
import TarjetaMovies from "../Components/tarjetaMovies";
import Paginacion from "../Components/paginacion"
import axios from "axios";


class Principal extends React.Component {
    state = {
      listadoMovies: []
    };
  
    componentDidMount() {
      this.traerPeliculasApi();
      
    }
  
    traerPeliculasApi() {
      axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=9d4fbae6d45a1f406cc115a66a4de03d&language=en-US&page=1")
        .then((resultado) => {
            console.log(resultado)
          this.setState({listadoMovies:resultado.data.results})
          console.log(this.state.listadoMovies)
        })
        .catch((error) => {
          console.log(error);
        });
    }    
  
    render() {
        
      return (
        <div className="container">
          <Header />
          <div className="row">
            {this.state.listadoMovies.map((movie, index) => {
              return (
                <TarjetaMovies
                  key={index}
                  name={movie.title}
                  image={`https://image.tmdb.org/t/p/w400`+movie.poster_path}
                />
              );
            })}
          </div>
          <Paginacion/>
        </div>
      );
     
    }
  }
  
export default Principal;