import React from 'react';
import '../styles/Categoria.css';
import personalCare from '../assets/images/personal-care.jpg';
import laundryCare from '../assets/images/laundry-care.jpg';
import fruitsVegetables from '../assets/images/fruits-vegetables.jpg';
import winesSpirits from '../assets/images/wines-spirits.jpg';

const Categoria = ({ setSelectedCategory }) => {
    return (
        <div className="categorias">
            <div className="categoria" onClick={() => setSelectedCategory('')}>
                <img src={personalCare} alt="Cuidado personal" />
                <p>Cuidado personal</p>
            </div>
            <div className="categoria" onClick={() => setSelectedCategory('')}>
                <img src={winesSpirits} alt="Vinos y licores" />
                <p>Vinos y licores</p>
            </div>
            <div className="categoria" onClick={() => setSelectedCategory('')}>
                <img src={fruitsVegetables} alt="Frutas y verduras" />
                <p>Frutas y verduras</p>
            </div>
            <div className="categoria" onClick={() => setSelectedCategory('')}>
                <img src={laundryCare} alt="Cuidado para la ropa" />
                <p>Cuidado para la ropa</p>
            </div>
        </div>
    );
};

export default Categoria;