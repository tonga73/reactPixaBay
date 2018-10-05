import React, { Component } from 'react';

class Buscador extends Component {

    searchRef = React.createRef();

    getDataHandler = (e) => {
        e.preventDefault();

        // Tomamos el valor del input
        const termSearch = this.searchRef.current.value;

        // Lo enviamos al componente Principal
        this.props.dataSearch(termSearch);
    }

    render() {
        return (
            <form onSubmit={this.getDataHandler}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imágen. Ejemplo: Futbol" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" placeholder="Busca tu imágen. Ejemplo: Futbol" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;