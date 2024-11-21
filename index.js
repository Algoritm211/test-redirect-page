const FACEBOOK_QUERY_PARAM_KEY = 'fbclid'

const BOT_USERNAME = 'gamble_redirect_test_bot'

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  console.log('PASSED PARAMS: ', [...params.entries()]);

  const facebookClickId = params.get(FACEBOOK_QUERY_PARAM_KEY)

  // Create and append the link dynamically
  const linkContainer = document.getElementById('link-container');
  const link = document.createElement('a');
  link.className = 'button-link';
  link.href = `https://t.me/${BOT_USERNAME}?start=${facebookClickId}`;
  link.textContent = 'Go to TG Channel'
  linkContainer.appendChild(link);
})