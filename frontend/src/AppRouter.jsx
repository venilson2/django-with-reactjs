import React, { useContext }  from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../src/context/AuthContext'
import App from './App';
import Login from './pages/Login';
import Admin from './pages/Admin';

function Private({ children }) {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div style={{ display: 'flex' }}>
          <span>Carregando...</span>
        </div>
      </div>
    );
  }

  if (!authenticated) return <Navigate to="/login" />;
  return children;
}

const AppRouter = () => {
	return (
		<Router>
			<AuthProvider>
				<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/admin" element={<Private><Admin /></Private>} />
						<Route path="/" element={<App />} />
            <Route path="*" element={<App />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
};

export default AppRouter;