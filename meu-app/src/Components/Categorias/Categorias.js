import React from 'react';

class Categorias extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-2 d-sm-inline">
                <ul className="border">
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-white" href="/">Categoria 1</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-white" href="/">Categoria 2</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-white" href="/">Categoria 3</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Categorias;