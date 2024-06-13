import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/PaymentMethod/RegisterPaymentMethod.css';

const RegisterPaymentMethod = () => {
    const [expiryDate, setExpiryDate] = useState(null);

    return (
        <div className="payment-method">
            <h2>Registrar método de pago</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="cardNumber">Número de tarjeta</label>
                    <input type="text" id="cardNumber" name="cardNumber" placeholder="Número de tarjeta" />
                </div>
                <div className="form-group">
                    <label htmlFor="cardName">Nombre en la tarjeta</label>
                    <input type="text" id="cardName" name="cardName" placeholder="Nombre en la tarjeta" />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Fecha de vencimiento</label>
                    <DatePicker
                        selected={expiryDate}
                        onChange={(date) => setExpiryDate(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        placeholderText="Seleccione una fecha"
                        className="datepicker"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">Código de seguridad (CVV)</label>
                    <input type="text" id="cvv" name="cvv" placeholder="Código de seguridad" />
                </div>
                <button type="submit" className="submit-button">Registrar método de pago</button>
            </form>
        </div>
    );
};

export default RegisterPaymentMethod;