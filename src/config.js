export default {
  api: {
    baseUrl: 'https://api.spotify.com/v1',
    tokenUrl: 'https://accounts.spotify.com/api/token',
    authUrl: 'https://accounts.spotify.com/authorize',
    redirectUri: 'http://localhost:3000/',
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET
  },
}
