import React, { useState } from 'react';
import '../styles/Register.css';
import { useAuth } from '../services/auth/authContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [error, setError] = useState('');

    const { registerConsumer } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (contraseña !== confirmarContraseña) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            await registerConsumer(
                { nombres: nombre, apellidoPaterno, apellidoMaterno },
                numeroTelefono,
                fechaNacimiento,
                contraseña
            );
            navigate('/login');
        } catch (err) {
            setError('Error en el registro del consumidor');
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className='register-page'>
            <div className='login-content'>
                <h2>¡Bienvenido!</h2>
                <p>Ingrese sus datos para crear una cuenta nueva</p>
                <p>¿Ya tiene una cuenta?</p>
                <button onClick={handleLoginClick}>Iniciar sesión</button>
            </div>
            <div className='register-content'>
                <h2>Registro de usuario</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        id='nombre'
                        placeholder='Nombre (s)'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        id='apellidoPaterno'
                        placeholder='Apellido paterno'
                        value={apellidoPaterno}
                        onChange={(e) => setApellidoPaterno(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        id='apellidoMaterno'
                        placeholder='Apellido Materno'
                        value={apellidoMaterno}
                        onChange={(e) => setApellidoMaterno(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        id='numeroTelefono'
                        placeholder='Número de teléfono'
                        value={numeroTelefono}
                        onChange={(e) => setNumeroTelefono(e.target.value)}
                        required
                    />
                    <input
                        type='date'
                        id='fechaNacimiento'
                        placeholder='Fecha de nacimiento'
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        id='contraseña'
                        placeholder='Contraseña'
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        id='confirmPassword'
                        placeholder='Confirmar contraseña'
                        value={confirmarContraseña}
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        required
                    />
                    <button type='submit'>Registrar</button>
                    {error && <p className='error'>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;