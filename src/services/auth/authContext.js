import React, { createContext, useState, useContext } from 'react';
import { login as loginService } from './authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const login = async (username, password) => {
        const { access_token } = await loginService(username, password);
        setToken(access_token);
        localStorage.setItem('token', access_token);
    };

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export {AuthContext};