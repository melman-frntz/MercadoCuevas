import React from 'react';
import '../styles/Menu.css';
import { IoExit } from 'react-icons/io5';

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <aside className={`menu-deslizable ${isOpen ? 'open' : ''}`}>
            <button className="cerrar" onClick={toggleMenu}>X</button>
            <button className="opciones">Información de producto</button>
            <button className="opciones">Carrito de compras</button>
            <button className="opciones">Mi perfil</button>
            <button className="opciones">Gestionar método de pago</button>
            <button className="opciones">Registrar dirección</button>
            <button className="cerrar-sesion">Cerrar sesión <IoExit /> </button>
        </aside>
    );
};

export default Menu;