import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
        </div>
    );
};

export default Dashboard;