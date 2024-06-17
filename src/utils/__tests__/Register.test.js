import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthProvider } from '../services/auth/authContext';
import Register from '../components/Register';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Register Component', () => {
    const renderWithContext = (component) => {
        return render(
            <Router>
                <AuthProvider>
                    {component}
                </AuthProvider>
            </Router>
        );
    };

    test('renders Register form correctly', () => {
        renderWithContext(<Register />);

        expect(screen.getByPlaceholderText('Nombre (s)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Apellido paterno')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Apellido Materno')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Número de teléfono')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Fecha de nacimiento')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirmar contraseña')).toBeInTheDocument();
        expect(screen.getByText('Registrar')).toBeInTheDocument();
    });

    test('shows error message when passwords do not match', async () => {
        renderWithContext(<Register />);

        fireEvent.change(screen.getByPlaceholderText('Nombre (s)'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Apellido paterno'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Apellido Materno'), { target: { value: 'Smith' } });
        fireEvent.change(screen.getByPlaceholderText('Número de teléfono'), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByPlaceholderText('Fecha de nacimiento'), { target: { value: '1990-01-01' } });
        fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });
        fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), { target: { value: 'differentPassword' } });

        fireEvent.click(screen.getByText('Registrar'));

        expect(await screen.findByText('Las contraseñas no coinciden')).toBeInTheDocument();
    });
});