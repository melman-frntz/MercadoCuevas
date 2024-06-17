import React from 'react';
import '../styles/AddressForm.css';

const AddressForm = () => {
    return (
        <div className="address-form">
            <h2>Registrar dirección</h2>
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
                <button type="submit" className="submit-button">Registrar dirección</button>
            </form>
        </div>
    );
};

export default AddressForm;