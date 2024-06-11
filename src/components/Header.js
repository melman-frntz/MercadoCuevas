import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleMenu }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/Login');
    };

    return (
        <header>
            <div className="menu-hamburguesa" onClick={toggleMenu}>&#9776;</div>
            <div className="buscar">
                <input type="text" placeholder="Buscar en Mercado Cuevas" />
            </div>
            <button className="iniciar-sesion" onClick={handleLoginClick}>Iniciar sesión</button>
        </header>
    );
};

export default Header;