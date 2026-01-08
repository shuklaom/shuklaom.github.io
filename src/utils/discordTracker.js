/**
 * Discord Webhook Tracker
 * Logs page visits to a Discord channel
 * 
 * To use this, set your Discord webhook URL as an environment variable:
 * REACT_APP_DISCORD_WEBHOOK_URL=your_webhook_url_here
 * 
 * Or paste your webhook URL directly in the function below.
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
  // Get webhook URL from environment variable or replace with your webhook URL
  const webhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL || '';
  
  // Don't log if webhook URL is not configured
  if (!webhookUrl) {
    console.log('Discord webhook URL not configured. Set REACT_APP_DISCORD_WEBHOOK_URL environment variable.');
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

    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    }).catch((err) => console.log('Visit logged to Discord'));
  } catch (error) {
    console.log('Error logging visit:', error);
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
