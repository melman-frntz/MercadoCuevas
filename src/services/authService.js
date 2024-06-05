export const login = async (phone, password) => {
    try {
        const response = await fetch('https://f0c639c5-b532-4dad-bf2f-f3b6f7ffb106-00-3jfqu7hv3ya1b.picard.replit.dev/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone, password })
        });

        if (!response.ok) {
            throw new Error('Error en el inicio de sesión');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};