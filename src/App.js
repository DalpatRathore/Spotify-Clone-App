import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log(token);
    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then(playlists =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      );
      spotify.getPlaylist("").then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);
  // console.log("USER:", user);
  // console.log("TOKEN :", token);
  // console.log("PLAYLISTS :", playlists);

  return (
    <div className="app">
      <div className="app__container"></div>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
