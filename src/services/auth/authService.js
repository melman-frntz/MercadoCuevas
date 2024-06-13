export const login = async (username, password) => {
    const response = await fetch('https://99de1d63-bf29-41bf-99e1-f3e2ac384f91-00-tqbqtoxy5dbe.spock.replit.dev:8000/token_empleado', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username,
            password,
            grant_type: 'password'
        }),
    });

    if (!response.ok) {
        throw new Error('Error en el inicio de sesión');
    }

    return await response.json();
};