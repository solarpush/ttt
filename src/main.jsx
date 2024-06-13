// Importation des bibliothèques React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importation du composant principal de l'application et du fichier CSS
import App from './App.jsx';
import './index.css';

// Rendu de l'application React dans l'élément avec l'ID 'root' dans le DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Appel du composant principal de l'application */}
        <App />
    </React.StrictMode>,
);