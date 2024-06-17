import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthProvider } from '../services/auth/authContext';
import Menu from '../components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Menu Component', () => {
    const renderWithContext = (component) => {
        return render(
            <Router>
                <AuthProvider>
                    {component}
                </AuthProvider>
            </Router>
        );
    };

    test('renders Menu component correctly', () => {
        renderWithContext(<Menu isOpen={true} />);
        expect(screen.getByText('Cerrar sesión')).toBeInTheDocument();
    });

    test('calls toggleMenu on close button click', () => {
        const toggleMenuMock = jest.fn();
        renderWithContext(<Menu isOpen={true} toggleMenu={toggleMenuMock} />);
        const closeButton = screen.getByText('X');
        fireEvent.click(closeButton);
        expect(toggleMenuMock).toHaveBeenCalled();
    });
});