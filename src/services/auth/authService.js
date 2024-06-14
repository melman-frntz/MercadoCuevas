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

export const loginConsumer = async (username, password) => {
    const response = await fetch('https://99de1d63-bf29-41bf-99e1-f3e2ac384f91-00-tqbqtoxy5dbe.spock.replit.dev:8000/token_consumidor', {
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
        throw new Error('Error en el inicio de sesión consumidor');
    }

    return await response.json();
};

export const registerConsumer = async (nombreCompleto, nCelular, fechaNacimiento, password) => {
    const response = await fetch('https://99de1d63-bf29-41bf-99e1-f3e2ac384f91-00-tqbqtoxy5dbe.spock.replit.dev:8000/consumidores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombreCompleto: {
                nombres: nombreCompleto.nombres,
                apellidoPaterno: nombreCompleto.apellidoPaterno,
                apellidoMaterno: nombreCompleto.apellidoMaterno
            },
            nCelular,
            fechaNacimiento: new Date(fechaNacimiento).toISOString(),
            password,
            direccion: [],
            metodoDePago: []
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error en el registro de consumidor');
    }

    return await response.json();
};

export const registerEmployee = async (nombreCompleto, cargo, fechaIngreso, usuario, password, sucursal, employee_id, token) => {
    const response = await fetch(`https://99de1d63-bf29-41bf-99e1-f3e2ac384f91-00-tqbqtoxy5dbe.spock.replit.dev:8000/empleados?employee_id=${employee_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            nombreCompleto: {
                nombres: nombreCompleto.nombres,
                apellidoPaterno: nombreCompleto.apellidoPaterno,
                apellidoMaterno: nombreCompleto.apellidoMaterno
            },
            cargo,
            fechaIngreso: new Date(fechaIngreso).toISOString(),
            usuario,
            password,
            sucursal
        }),
    });

    if (!response.ok) {
        throw new Error('Error en el registro del empleado');
    }

    return await response.json();
};