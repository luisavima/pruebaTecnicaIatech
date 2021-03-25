import React from "react";

function TarjetaMovies({ name,image }) {
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
            <a
              href={`Detalles/${""}`}
              className="btn btn-dark"
            >
              Ver Detalle
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  }
  
export default TarjetaMovies;
