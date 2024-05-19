import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <h2>Admin</h2>
            <p>{message}</p>
        </div>
    );
};

export default Admin;