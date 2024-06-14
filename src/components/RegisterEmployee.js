import React, { useState } from 'react';
import '../styles/RegisterEmployee.css';
import { useAuth } from '../services/auth/authContext';
import Message from '../utils/Message';
import { useNavigate } from 'react-router-dom';

const RegisterEmployee = () => {
    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [cargo, setCargo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [sucursal, setSucursal] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [messageText, setMessageText] = useState('');
    const { registerEmployee, token } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerEmployee(
                { nombres: nombre, apellidoPaterno, apellidoMaterno },
                cargo,
                fechaIngreso,
                usuario,
                password,
                sucursal,
                "employee_id_placeholder",
                token
            );
            setMessageText('Operación exitosa.');
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                navigate('/');
            }, 3000);
        } catch (err) {
            setMessageText('Error en el registro del empleado.');
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        }
    };

    return (
        <div className="register-employee-form">
            <h2>Registrar Empleado</h2>
            {showMessage && <Message text={messageText} />}
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="sucursal">Sucursal</label>
                        <input
                            type="text"
                            id="sucursal"
                            name="sucursal"
                            placeholder="Número de sucursal"
                            value={sucursal}
                            onChange={(e) => setSucursal(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombres">Nombres</label>
                        <input
                            type="text"
                            id="nombres"
                            name="nombres"
                            placeholder="Nombre(s)"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                        <input
                            type="text"
                            id="apellidoPaterno"
                            name="apellidoPaterno"
                            placeholder="Apellido Paterno"
                            value={apellidoPaterno}
                            onChange={(e) => setApellidoPaterno(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellidoMaterno">Apellido Materno</label>
                        <input
                            type="text"
                            id="apellidoMaterno"
                            name="apellidoMaterno"
                            placeholder="Apellido Materno"
                            value={apellidoMaterno}
                            onChange={(e) => setApellidoMaterno(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fechaIngreso">Fecha de Ingreso</label>
                        <input
                            type="date"
                            id="fechaIngreso"
                            name="fechaIngreso"
                            value={fechaIngreso}
                            onChange={(e) => setFechaIngreso(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cargo">Cargo</label>
                        <input
                            type="text"
                            id="cargo"
                            name="cargo"
                            placeholder="Puesto de trabajo"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="usuario">Usuario de acceso</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Username"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña de acceso</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button">Registrar Empleado</button>
            </form>
        </div>
    );
};

export default RegisterEmployee;