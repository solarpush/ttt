// Importation des fichiers CSS pour les icônes et les styles de l'application
import "primeicons/primeicons.css";
import "./App.css";
// Importation du composant Game
import { Game } from './Game'

function App() {
  // Fonction principale de l'application, qui rend le composant Game
  return (
      <Game />
  );
}

// Exportation du composant App comme exportation par défaut
export default App;
