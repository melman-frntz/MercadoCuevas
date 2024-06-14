import React, { useContext } from 'react';
import '../styles/Menu.css';
import { IoExit } from 'react-icons/io5';
import { AuthContext } from '../services/auth/authContext';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Menu = ({ isOpen, toggleMenu, setCurrentView}) => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handleLogoutClick = () => {
        logout();
        setIsLoggedIn(false);
        toggleMenu();
        navigate('/login');
    };

    return (
        <aside className={`menu-deslizable ${isOpen ? 'open' : ''}`}>
            <button className="cerrar" onClick={toggleMenu}>X</button>
            <button className="opciones" onClick={() => { setCurrentView(''); toggleMenu(); }}>Información de producto</button>
            <button className="opciones" onClick={() => { setCurrentView('addressForm'); toggleMenu(); }}>Registrar dirección</button>
            <button className="opciones" onClick={() => { setCurrentView('dashboard'); toggleMenu(); }}>Mi perfil</button>
            <button className="opciones" onClick={() => { setCurrentView('paymentMethod'); toggleMenu(); }}>Gestionar método de pago</button>
            <button className="opciones" onClick={() => { setCurrentView('branchForm'); toggleMenu(); }}>Registrar sucursal</button>
            <button className="opciones" onClick={() => { setCurrentView('registerEmployee'); toggleMenu(); }}>Registrar empleado</button>
            {isLoggedIn && <button className="cerrar-sesion" onClick={handleLogoutClick}>Cerrar sesión <IoExit /></button>}
        </aside>
    );
};

export default Menu;