import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthProvider } from '../services/auth/authContext';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Component', () => {
    const renderWithContext = (component) => {
        return render(
            <Router>
                <AuthProvider>
                    {component}
                </AuthProvider>
            </Router>
        );
    };

    test('renders Header component correctly', () => {
        renderWithContext(<Header toggleMenu={() => { }} />);
        expect(screen.getByPlaceholderText('Buscar en Mercado Cuevas')).toBeInTheDocument();
    });

    test('calls toggleMenu on menu button click', () => {
        const toggleMenuMock = jest.fn();
        renderWithContext(<Header toggleMenu={toggleMenuMock} />);
        const menuButton = screen.getByText('☰');
        fireEvent.click(menuButton);
        expect(toggleMenuMock).toHaveBeenCalled();
    });
});