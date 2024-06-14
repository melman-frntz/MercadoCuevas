import React from 'react';
import '../styles/Message.css';

const Message = ({ message }) => {
    return (
        <div className="message success">
            {message}
        </div>
    );
};

export default Message;