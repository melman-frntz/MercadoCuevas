import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthProvider } from '../services/auth/authContext';
import Login from '../components/Login';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login Component', () => {
    const renderWithContext = (component) => {
        return render(
            <Router>
                <AuthProvider>
                    {component}
                </AuthProvider>
            </Router>
        );
    };

    test('renders Login form correctly', () => {
        renderWithContext(<Login />);

        expect(screen.getByPlaceholderText('Número de teléfono')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
    });

    test('shows error message when fields are empty', async () => {
        renderWithContext(<Login />);

        fireEvent.click(screen.getByText('Iniciar sesión'));

        expect(await screen.findByText('Por favor ingrese todos los campos')).toBeInTheDocument();
    });
});