import React, { useState } from 'react';
import '../../styles/Branch/BranchForm.css';

const BranchForm = () => {
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');

    return (
        <div className="branch-form-container">
            <div className="branch-form">
                <h2>Registrar Sucursal</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="street">Calle</label>
                            <input type="text" id="street" name="street" placeholder="Calle" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="extNumber">Número exterior</label>
                            <input type="text" id="extNumber" name="extNumber" placeholder="Número exterior" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="intNumber">Número interior</label>
                            <input type="text" id="intNumber" name="intNumber" placeholder="Número interior" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Ciudad</label>
                            <input type="text" id="city" name="city" placeholder="Ciudad" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="state">Provincia</label>
                            <input type="text" id="state" name="state" placeholder="Provincia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipCode">Código Postal</label>
                            <input type="text" id="zipCode" name="zipCode" placeholder="Código postal" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="latitude">Latitud</label>
                            <input type="text" id="latitude" name="latitude" placeholder="19.53124" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitude">Longitud</label>
                            <input type="text" id="longitude" name="longitude" placeholder="-96.91589" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group full-width">
                            <label htmlFor="businessName">Nombre Comercial</label>
                            <input type="text" id="businessName" name="businessName" placeholder="Nombre Comercial" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="openingTime">Horario de Apertura</label>
                            <input 
                                type="time" 
                                id="openingTime" 
                                name="openingTime" 
                                value={openingTime} 
                                onChange={(e) => setOpeningTime(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="closingTime">Horario de Cierre</label>
                            <input 
                                type="time" 
                                id="closingTime" 
                                name="closingTime" 
                                value={closingTime} 
                                onChange={(e) => setClosingTime(e.target.value)} 
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Registrar Sucursal</button>
                </form>
            </div>
        </div>
    );
};

export default BranchForm;
