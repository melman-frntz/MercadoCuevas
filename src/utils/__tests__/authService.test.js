import { login, loginConsumer, registerConsumer, registerEmployee } from '../authService';

global.fetch = jest.fn();

describe('authService', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('login should return token on success', async () => {
        const mockResponse = { access_token: 'mock_token' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const result = await login('test_user', 'test_password');
        expect(result).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith(
            'https://99de1d63-bf29-41bf-99e1-f3e2ac384f91-00-tqbqtoxy5dbe.spock.replit.dev:8000/token_empleado',
            expect.any(Object)
        );
    });

    it('loginConsumer should return token on success', async () => {
        const mockResponse = { access_token: 'mock_token' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const result = await loginConsumer('test_user', 'test_password');
        expect(result).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith(
            'https://99de1d63-bf29-41bf-99e1-f3e2ac384f91-00-tqbqtoxy5dbe.spock.replit.dev:8000/token_consumidor',
            expect.any(Object)
        );
    });

    it('registerConsumer should throw error on failure', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ detail: 'Registration failed' }),
        });

        await expect(registerConsumer(
            { nombres: 'test', apellidoPaterno: 'test', apellidoMaterno: 'test' },
            '1234567890',
            '2000-01-01',
            'password'
        )).rejects.toThrow('Registration failed');
    });

    it('registerEmployee should return success message on success', async () => {
        const mockResponse = { message: 'Employee registered successfully' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const result = await registerEmployee(
            { nombres: 'test', apellidoPaterno: 'test', apellidoMaterno: 'test' },
            'manager',
            '2022-01-01',
            'username',
            'password',
            'sucursal',
            'employee_id',
            'token'
        );
        expect(result).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith(
            'https://99de1d63-bf29-41bf-99e1-f3e2ac384f91-00-tqbqtoxy5dbe.spock.replit.dev:8000/empleados?employee_id=employee_id',
            expect.any(Object)
        );
    });
});