import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PagePrincipale from './PagePrincipale';
import PagePresentation from './PagePresentation';
import PageContact from './PageContact';
import StatutSession from './StatutSession';

function App() {
  return (
    <div>
      <h1 className="entete">Mon Application React</h1>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/presentation">Presentation</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="contenu">
        <StatutSession />
        <Routes>
          <Route path="/" element={<PagePrincipale />} />
          <Route path="/presentation" element={<PagePresentation />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;