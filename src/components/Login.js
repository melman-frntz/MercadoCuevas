import React, { useState, useContext } from 'react';
import '../styles/Login.css';
import { AuthContext } from '../services/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, loginConsumer } = useAuth();
    const { setIsLoggedIn } = useContext(AuthContext);
    const [ isEmployee, setIsEmployee ] = useState(false);
    const navigate = useNavigate();

    const handleIsEmployee = (event) => {
        const isChecked = event.target.checked;
        setIsEmployee(isChecked);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!phone || !password) {
            setError('Por favor ingrese todos los campos');
            return;
        }

        try {
            if (isEmployee) {
                await login (phone, password);
            } else {
                await loginConsumer (phone, password);
            }
            setIsLoggedIn(true);
            navigate('/');    
        } catch (err) {
            setError('Error en el inicio de sesión');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className='login-page'>
        <button onClick={handleHomeClick}> <BsArrowLeftSquareFill /> </button>
            <div className='login-container'>
                <h2>Inicio de sesión</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type='text'
                        placeholder='Número de teléfono'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} required
                    />
                    <input
                        type='password'
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                    <div className='checkbox-container'>
                        <label><input type='checkbox' checked={isEmployee} onChange={handleIsEmployee}/> Soy empleado.</label>
                    </div>
                    <button type='submit'>Iniciar sesión</button>
                    {error && <p className='error'>{error}</p>}
                </form>
                <p> <a href='/forgot-password'>¿Problemas al iniciar sesión?</a> </p>
            </div>
            <div className='register-container'>
                <h2>¡Bienvenido!</h2>
                <p>Ingresa tus datos para acceder a Mercado Cuevas</p>
                <p>¿No tienes cuenta en Mercado Cuevas? Crea una</p>
                <button onClick={handleRegisterClick}>Regístrate</button>
            </div>
        </div>
    );
};

export default Login;