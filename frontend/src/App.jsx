import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const App = () => {
    const navigate = useNavigate();
    const { authenticated, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading) {
            if (authenticated) {
                navigate('/admin');
            } else {
                navigate('/login');
            }
        }
    }, [authenticated, loading, navigate]);
    return null;
};

export default App;
