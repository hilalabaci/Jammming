const clientId = "107e51b368784229b7234173f91ab55e";
const redirectUri = "http://localhost:3000/";
let accessToken;

const SpotifyAPI = {
  //Get spotify access token for authorization
  getAccessToken() {
    if (accessToken) return accessToken;

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    const accessTokenParam = accessTokenMatch[1];
    const expiresInParam = expiresInMatch[1];

    if (accessTokenParam && expiresInParam) {
      accessToken = accessTokenParam;

      window.setTimeout(
        () => (accessToken = ""),
        Number(expiresInParam) * 1000
      );

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async search(value) {
    const accessToken = SpotifyAPI.getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${value}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const jsonResponse = await response.json();

    if (!jsonResponse.tracks) {
      return [];
    }

    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },
};

export default SpotifyAPI;
