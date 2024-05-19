import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Admin = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Admin</h2>
            <button onClick={e => handleLogout(e)}>Logout</button>
        </div>
    );
};

export default Admin;