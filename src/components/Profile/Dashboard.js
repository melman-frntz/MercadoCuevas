import React from 'react';
import '../../styles/Profile/Dashboard.css';

const Dashboard = ({ items }) => {
    return (
        <div className="dashboard">
            {items.map((item, index) => (
                <div key={index} className="card" style={{ display: item.visible ? 'block' : 'none' }}>
                    <div className="icon">{item.icon}</div>
                    <div className="text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;