import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!phone || !password) {
            setError('Por favor ingrese todos los campos');
            return;
        }

        try {
            // TODO: Autenticación con la API
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (phone === 'phone' && password === 'password') {
                        resolve({ message: 'Login exitoso' });
                    } else {
                        reject({ message: 'Credenciales incorrectas' });
                    }
                }, 1000);
            });
            
        } catch (err) {
            setError('Error en el inicio de sesión');
        }
    };

    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate('/register');
    };

    return (
        <div className='login-page'>
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