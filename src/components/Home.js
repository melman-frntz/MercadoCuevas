import React, { useState } from 'react';
import Header from './Header';
import MenuDeslizable from './Menu';
import Categorias from './Categoria';
import '../styles/Home.css';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Home">
            <Header toggleMenu={toggleMenu} />
            <MenuDeslizable isOpen={menuOpen} toggleMenu={toggleMenu} />
            <main>
                <h1>Bienvenido a Mercado Cuevas</h1>
                <Categorias />
            </main>
        </div>
    );
}

export default Home;