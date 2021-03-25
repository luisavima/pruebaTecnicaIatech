import React from "react";
import  "../Style/App.css"
import Header from "../Components/header"
import TarjetaMovies from "../Components/tarjetaMovies";
import Paginacion from "../Components/paginacion"
import axios from "axios";


class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoMovies: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.traerPeliculasApi();
  }

  //Traer peliculas y pintar las cards
  traerPeliculasApi() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1e2e52c940e7eac822bd4b4a622bb94a&language=en-US&page=` +
          this.state.page
      )
      .then((resultado) => {
        console.log(resultado);
        this.setState({ listadoMovies: resultado.data.results, page: resultado.data.page });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // funcion para buscar movie
  buscarMovies(buscar) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1e2e52c940e7eac822bd4b4a622bb94a&language=en-US&query=` +
          buscar
      )
      .then((resultado) => {
        this.setState({ listadoMovies: resultado.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Escuchar lo que se esta escribiendo en el input
  handleChangeBuscarInput = (e) => {
    const valorParaBuscar = e.target.value;
    console.log(valorParaBuscar);
    this.buscarMovies(valorParaBuscar);
  };

  //Función para siguiente página
  nextPage = () => {
      var siguiente = 1;
    console.log(this.state);
    this.setState({ page: this.state.page++ });
    this.traerPeliculasApi();
  };

  //Función para página anterior
  previousPage = () => {
      if(this.state.page > 1){
        this.setState({ page: this.state.page--});
        this.traerPeliculasApi();
      }

  };

  render() {
    return (
      <div className="container">
        <Header OnchangeFiltro={this.handleChangeBuscarInput} />
        <div className="row">
          {this.state.listadoMovies.map((movie, index) => {
            return (
              <TarjetaMovies
                key={index}
                name={movie.title}
                image={`https://image.tmdb.org/t/p/w400` + movie.poster_path}
              />
            );
          })}
        </div>
        <Paginacion previousPage={this.previousPage} nextPage={this.nextPage} />
      </div>
    );
  }
}
  
export default Principal;