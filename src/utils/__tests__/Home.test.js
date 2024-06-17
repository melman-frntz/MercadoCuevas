import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthProvider } from '../services/auth/authContext';
import Home from '../components/Home';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home Component', () => {
    const renderWithContext = (component) => {
        return render(
            <Router>
                <AuthProvider>
                    {component}
                </AuthProvider>
            </Router>
        );
    };

    test('renders Home component correctly', () => {
        renderWithContext(<Home />);
        expect(screen.getByText('Bienvenido a Mercado Cuevas')).toBeInTheDocument();
    });

    test('toggles menu correctly', () => {
        renderWithContext(<Home />);
        const menuButton = screen.getByText('☰');
        fireEvent.click(menuButton);
        expect(screen.getByText('Cerrar sesión')).toBeInTheDocument();
    });

    test('renders different views correctly', () => {
        renderWithContext(<Home />);
        const registerEmployeeButton = screen.getByText('Registrar empleado');
        fireEvent.click(registerEmployeeButton);
        expect(screen.getByText('Registrar Empleado')).toBeInTheDocument();
    });
});