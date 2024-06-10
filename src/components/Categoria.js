import React from 'react';
import '../styles/Categoria.css';
import cuidadoPersonal from '../assets/images/cuidado-personal.jpg';
import cuidadoRopa from '../assets/images/cuidado-ropa.jpg';
import frutasVerduras from '../assets/images/frutas-verduras.jpg';
import vinosLicores from '../assets/images/vinos-licores.jpg';

const Categoria = () => {
    return (
        <div className="categorias">
            <div className="categoria">
                <img src={cuidadoPersonal} alt="Cuidado personal" />
                <p>Cuidado personal</p>
            </div>
            <div className="categoria">
                <img src={vinosLicores} alt="Cuidado personal" />
                <p>Vinos y licores</p>
            </div>
            <div className="categoria">
                <img src={frutasVerduras} alt="Cuidado personal" />
                <p>Frutas y verduras</p>
            </div>
            <div className="categoria">
                <img src={cuidadoRopa} alt="Cuidado personal" />
                <p>Cuidado para la ropa</p>
            </div>
        </div>
    );
};

export default Categoria;