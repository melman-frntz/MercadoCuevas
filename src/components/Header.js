import React from 'react';
import '../styles/Header.css';

const Header = ({ toggleMenu }) => {
    return (
        <header>
            <div className="menu-hamburguesa" onClick={toggleMenu}>&#9776;</div>
            <div className="buscar">
                <input type="text" placeholder="Buscar en Mercado Cuevas" />
            </div>
            <button className="iniciar-sesion">Iniciar sesión</button>
        </header>
    );
};

export default Header;