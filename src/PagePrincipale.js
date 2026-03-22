import ListeActivites from './ListeActivites';
import NotificationsAlerte from './NotificationsAlerte';
import ListePersonnalisee from './ListePersonnalisee';
import GaleriePhotos from './GaleriePhotos';

function PagePrincipale() {
  const fruits = ['Pomme', 'Banane', 'Mangue', 'Orange'];

  return (
    <div>
      <h2>Bienvenue sur la page principale</h2>
      <ListeActivites />
      <h3>Alertes notifications</h3>
      <NotificationsAlerte />
      <h3>Liste de fruits</h3>
      <ListePersonnalisee elements={fruits} />
      <h3>Galerie de photos</h3>
      <GaleriePhotos />
    </div>
  );
}

export default PagePrincipale;