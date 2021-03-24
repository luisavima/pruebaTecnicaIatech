import React from "react";

function TarjetaMovies(props) {
  const datos = props.movies;
  return datos.map((pelicula) => {
    return (
      <div key={pelicula.id} className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mt-3">
        <div className="card" style={{ width: "18rem", height: "460px" }}>
          <img
            src={pelicula.imagen}
            className="card-img-top"
            style={{ width: "18rem", height: "350px" }}
            alt="portada"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{pelicula.nombre}</h5>
            <a
              href={`cursos/${pelicula.id}`}
              className="btn btn-dark"
            >
              Ver Detalle
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  });
}
export default TarjetaMovies;