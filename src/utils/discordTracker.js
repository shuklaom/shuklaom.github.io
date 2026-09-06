/**
 * Logs page visits through a server-side proxy endpoint.
 *
 * The endpoint must forward the request to Discord using a server-side
 * webhook secret. Never put a Discord webhook URL in this React app.
 */

function getBrowserName(ua) {
  if (ua.includes('Chrome') && !ua.includes('Edge')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  return 'Other';
}

function getDeviceType() {
  const isMobile = /iPhone|iPad|Android|Mobile|Windows Phone|webOS|BlackBerry|IEMobile/.test(navigator.userAgent);
  return isMobile ? 'Mobile' : 'Desktop';
}

function logVisitToDiscord() {
  const trackerEndpoint = process.env.REACT_APP_VISIT_TRACKER_ENDPOINT || '';
  
  // Tracking is disabled until a server-side proxy endpoint is configured.
  if (!trackerEndpoint) {
    return;
  }
  
  if (!trackerEndpoint.startsWith('https://')) {
    console.warn('Visit tracker endpoint must use HTTPS.');
    return;
  }

  try {
    const message = {
      embeds: [
        {
          title: '📊 Site Visit',
          fields: [
            { name: 'Time', value: new Date().toLocaleString(), inline: true },
            { name: 'Page', value: window.location.pathname || '/', inline: true },
            { name: 'Browser', value: getBrowserName(navigator.userAgent), inline: true },
            { name: 'Device', value: getDeviceType(), inline: true },
            { name: 'Referrer', value: document.referrer || 'Direct', inline: false },
          ],
          color: 2563235, // Blue color
          timestamp: new Date().toISOString(),
        },
      ],
    };

    fetch(trackerEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    }).catch(() => {
      // Analytics failures should never affect the portfolio experience.
    });
  } catch (error) {
    // Analytics failures should never affect the portfolio experience.
  }
}

// Check if visit has already been logged in this session to avoid duplicates
function trackPageVisit() {
  const sessionKey = 'discord_tracker_logged';
  if (!sessionStorage.getItem(sessionKey)) {
    logVisitToDiscord();
    sessionStorage.setItem(sessionKey, 'true');
  }
}

export default trackPageVisit;
