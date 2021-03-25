import React from "react";
import  "../Style/App.css"
import foto from "../images/foto.jpg"

function DescripcionMovies({
  
}) {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <img
          className="img-fluid"
          style={{ width: "25rem", height: "25rem" }}
          src={foto}
          alt=""
        />
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6">

        <h3>Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)</h3>
        <br/>
        <p>
          <strong>Duración </strong>
          hols soy luisa
        </p>
        <p>
          <strong>Visión general </strong>
          Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.
        </p>
        <p>
          <strong>Lenguaje </strong>
          Español
        </p>
        <p>
          <strong>Fecha Lanzamiento </strong>
          2020-11-25
        </p>
        <p>
          <strong>Popularidad </strong>
          798.951
        </p>
      </div>
    </div>
  );
}

export default DescripcionMovies;