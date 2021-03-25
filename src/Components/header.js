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
                  <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Acción"
              />
              <label class="form-check-label" for="inlineCheckbox1">
              Acción
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Drama"
              />
              <label class="form-check-label" for="inlineCheckbox1">
              Drama
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Terror"
              />
              <label class="form-check-label" for="inlineCheckbox1">
              Terror
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Infantil"
              />
              <label class="form-check-label" for="inlineCheckbox1">
              Infantil
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Comedia"
              />
              <label class="form-check-label" for="inlineCheckbox1">
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
