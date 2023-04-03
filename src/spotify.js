const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "09b33a921b6a46fbb5667ef6e5394aaf";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;