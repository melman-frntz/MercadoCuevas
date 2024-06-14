import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import MenuDeslizable from './Menu';
import Categorias from './Categoria';
import RegisterEmployee from './RegisterEmployee';
import Dashboard from './Profile/Dashboard';
import PaymentMethod from './PaymentMethod/RegisterPaymentMethod';
import AddressForm from './Address/AddressForm';
import BranchForm from './Branch/BranchForm';
import { AuthContext } from '../services/auth/authContext';
import { FaUser, FaLock, FaStore, FaBox, FaHistory } from 'react-icons/fa';
import { MdDeliveryDining, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaMapLocationDot, FaMoneyCheck } from 'react-icons/fa6';
import '../styles/Home.css';

const items = [
    { title: 'Inicio de sesión', description: 'Cambia tu contraseña\nEdita tu información\nEdita tu número de teléfono', icon: <FaLock />, visible: true },
    { title: 'Mis pagos', description: 'Administra tus métodos de pago', icon: <FaMoneyCheck />, visible: true },
    { title: 'Mis direcciones', description: 'Administra tus direcciones para pedido', icon: <FaMapLocationDot />, visible: true },
    { title: 'Usuarios', description: 'Administra a los usuarios del sistema', icon: <FaUser />, visible: true },
    { title: 'Sucursales', description: 'Administra las sucursales de Mercado Cuevas', icon: <FaStore />, visible: true },
    { title: 'Productos', description: 'Administra los productos por sucursal', icon: <FaBox />, visible: true },
    { title: 'Validación de pedido', description: 'Administra los pedidos realizados por los clientes', icon: <MdOutlineProductionQuantityLimits />, visible: true },
    { title: 'Pedidos asignados', description: 'Visualiza los pedidos que tienes que realizar', icon: <MdDeliveryDining />, visible: true },
    { title: 'Historial de pedidos', description: 'Visualiza la información de pedidos anteriores', icon: <FaHistory />, visible: true }
];

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState('home');
    const { isLoggedIn } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCategoryClick = (view) => {
        setCurrentView(view);
    };

    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard items={items} />;
            case 'paymentMethod':
                return <PaymentMethod />;
            case 'addressForm':
                return <AddressForm />;
            case 'branchForm':
                return <BranchForm />;
            case 'registerEmployee':
                return <RegisterEmployee />;
            default:
                return (
                    <div className="content">
                        <h1>Bienvenido a Mercado Cuevas</h1>
                        <Categorias setSelectedCategory={handleCategoryClick} />
                    </div>
                );
        }
    };

    const needsScroll = ['paymentMethod', 'addressForm', 'branchForm', 'registerEmployee'];

    return (
        <div className="Home">
            <Header toggleMenu={toggleMenu}/>
            <MenuDeslizable isOpen={menuOpen} toggleMenu={toggleMenu} setCurrentView={handleCategoryClick}/>
            <main className={needsScroll.includes(currentView) ? 'scrollable' : ''}>
                {renderContent()}
            </main>
        </div>
    );
}

export default Home;