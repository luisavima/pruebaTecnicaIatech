import React from "react";
import { Link } from "react-router-dom";

function TarjetaMovies({ name, image, to }) {
  return (
    <div className=" justify-content-center col-lg-4 col-md-6 col-sm-12">
      <div className="card" style={{ width: "18rem", height: "500px" }}>
        <img
          src={image}
          className="card-img-top"
          style={{ width: "18rem", height: "350px" }}
          alt="portada"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <Link to={to} className="btn btn-dark">
            Ver Detalle
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
}

export default TarjetaMovies;
