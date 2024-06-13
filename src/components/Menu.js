import React from 'react';
import '../styles/Menu.css';
import { IoExit } from 'react-icons/io5';

const Menu = ({ isOpen, toggleMenu, setCurrentView }) => {
    return (
        <aside className={`menu-deslizable ${isOpen ? 'open' : ''}`}>
            <button className="cerrar" onClick={toggleMenu}>X</button>
            <button className="opciones" onClick={() => { setCurrentView(''); toggleMenu(); }}>Información de producto</button>
            <button className="opciones" onClick={() => { setCurrentView('addressForm'); toggleMenu(); }}>Registrar dirección</button>
            <button className="opciones" onClick={() => { setCurrentView('dashboard'); toggleMenu(); }}>Mi perfil</button>
            <button className="opciones" onClick={() => { setCurrentView('paymentMethod'); toggleMenu(); }}>Gestionar método de pago</button>
            <button className="opciones" onClick={() => { setCurrentView('branchForm'); toggleMenu(); }}>Registrar sucursal</button>
            <button className="cerrar-sesion">Cerrar sesión <IoExit /> </button>
        </aside>
    );
};

export default Menu;