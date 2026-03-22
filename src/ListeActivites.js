function ListeActivites() {
  const activites = [
    { id: 1, titre: "Apprendre les bases de React" },
    { id: 2, titre: "Mettre en place la navigation" },
    { id: 3, titre: "Gerer l'etat avec useState" },
    { id: 4, titre: "Integrer des ressources externes" }
  ];

  return (
    <ul>
      {activites.map((activite) => (
        <li key={activite.id}>{activite.titre}</li>
      ))}
    </ul>
  );
}

export default ListeActivites;