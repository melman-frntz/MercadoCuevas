import React, { useContext } from 'react';
import '../styles/Header.css';
import { AuthContext } from '../services/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header = ({ toggleMenu }) => {
    const navigate = useNavigate();
    const { token, logout } = useAuth();
    const { isLoggedIn } = useContext(AuthContext);

    const handleLoginClick = () => {
      navigate('/Login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/login');
    };

    return (
        <header>
            <div className="menu-hamburguesa" onClick={toggleMenu}>&#9776;</div>
            <div className="buscar">
                <input type="text" placeholder="Buscar en Mercado Cuevas" />
            </div>
            {!isLoggedIn && <button className="iniciar-sesion" onClick={handleLoginClick}>Iniciar sesión</button>}
        </header>
    );
};

export default Header;