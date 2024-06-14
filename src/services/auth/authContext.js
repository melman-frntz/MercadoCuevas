import React, { createContext, useState, useContext } from 'react';
import { login as loginService, loginConsumer as loginConsumerService, registerConsumer as registerConsumerService,
         registerEmployee as registerEmployeeService} from './authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const login = async (username, password) => {
        const { access_token } = await loginService(username, password);
        setToken(access_token);
        localStorage.setItem('token', access_token);
    };

    const loginConsumer = async (username, password) => {
        const { access_token } = await loginConsumerService(username, password);
        setToken(access_token);
        localStorage.setItem('token', access_token);
    };

    const registerConsumer = async (nombreCompleto, nCelular, fechaNacimiento, password) => {
        const response = await registerConsumerService(nombreCompleto, nCelular, fechaNacimiento, password);
        return response;
    };

    const registerEmployee = async (nombreCompleto, cargo, fechaIngreso, usuario, password, sucursal, employee_id) => {
        const response = await registerEmployeeService(nombreCompleto, cargo, fechaIngreso, usuario, password, sucursal, employee_id, token);
        return response;
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, login, loginConsumer, registerConsumer, registerEmployee, logout, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export {AuthContext};