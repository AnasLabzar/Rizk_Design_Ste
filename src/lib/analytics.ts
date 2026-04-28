/**
 * Utilitaire pour envoyer des événements de tracking au serveur
 */
export const trackEvent = async (event: string, metadata: Record<string, unknown> = {}) => {
  try {
    const path = typeof window !== 'undefined' ? window.location.pathname : 'unknown';
    
    // On n'attend pas la réponse pour ne pas ralentir l'UI
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        path,
        metadata,
        timestamp: new Date().toISOString(),
      }),
    }).catch(err => console.error('Tracking failed:', err));
  } catch (err) {
    console.error('Analytics error:', err);
  }
};
