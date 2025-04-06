import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ onAuthSuccess }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace 'your-secure-password' with your actual password
        if (password === 'Dinara') {
            setIsAuthenticated(true);
            onAuthSuccess();
            setError('');
        } else {
            setError('Mot de passe incorrect');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        onAuthSuccess(false);
        setPassword('');
    };

    if (isAuthenticated) {
        return (
            <div className="auth-status">
                <span>Connecté</span>
                <button onClick={handleLogout} className="logout-btn">
                    Déconnexion
                </button>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h3>Authentification</h3>
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                />
                {error && <p className="auth-error">{error}</p>}
                <button type="submit" className="auth-button">
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export default Auth; 
