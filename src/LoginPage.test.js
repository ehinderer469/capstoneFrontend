import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

describe("LoginPage", () => {
    const mockOnLogin = jest.fn();
    const history = createMemoryHistory();

    it('handles login correctly', async () => {
        const { getByPlaceholderText, getByRole, findByText } = render(
            <Router initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<LoginPage onLogin={mockOnLogin} />} />
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                </Routes>
            </Router>
        );

        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        const loginButton = getByRole('button', { name: /login/i });

        fireEvent.change(usernameInput, { target: { value: 'user1' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        expect(mockOnLogin).toHaveBeenCalledWith('user1');
        const dashboardElement = await findByText('Dashboard');
        expect(dashboardElement).toBeInTheDocument();
    });

    it('shows an error message for invalid credentials', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        const { getByPlaceholderText, getByRole } = render(
            <Router initialEntries={['/']}>
                <LoginPage onLogin={mockOnLogin} />
            </Router>
        );

        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        const loginButton = getByRole('button', { name: /login/i });

        fireEvent.change(usernameInput, { target: { value: 'invalidUser' } });
        fireEvent.change(passwordInput, { target: { value: 'invalidPassword' } });
        fireEvent.click(loginButton);

        expect(window.alert).toHaveBeenCalledWith('Invalid credentials');
        jest.restoreAllMocks();
    });
});