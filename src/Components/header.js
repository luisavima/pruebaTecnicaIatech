import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <br />
                <input
                 onChange={this.props.OnchangeFiltro}
                  className="form-control"
                  type="text"
                  placeholder="Buscar película"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row ">
          <div className="col text-center">
              <form >
                  <label className="filtro" >Filtrar categorías: </label>
                  <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Acción"
              />
              <label className="form-check-label" >
              Acción
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Drama"
              />
              <label className="form-check-label" >
              Drama
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Terror"
              />
              <label className="form-check-label" >
              Terror
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Infantil"
              />
              <label className="form-check-label" >
              Infantil
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Comedia"
              />
              <label className="form-check-label" >
              Comedia
              </label>
            </div>
              </form>
            <br/>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
