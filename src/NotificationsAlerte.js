import { useState } from 'react';

function NotificationsAlerte() {
  const [notifications, setNotifications] = useState(0);

  return (
    <div>
      {notifications > 0 && (
        <p>Vous avez {notifications} notification(s) en attente.</p>
      )}
      <button onClick={() => setNotifications(notifications + 1)}>
        Ajouter une notification
      </button>
      <button onClick={() => setNotifications(0)}>
        Effacer les notifications
      </button>
    </div>
  );
}

export default NotificationsAlerte;