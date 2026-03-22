import { useState } from 'react';

function StatutSession() {
  const [actif, setActif] = useState(false);

  return (
    <div>
      {actif ? (
        <h3>Session active : vous etes connecte</h3>
      ) : (
        <h3>Session inactive : vous etes deconnecte</h3>
      )}
      <button onClick={() => setActif(!actif)}>
        Changer le statut
      </button>
    </div>
  );
}

export default StatutSession;