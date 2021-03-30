export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAlxjugrjxaeYxyXo018uzh1h-s59tfUGnSIBx1TYq7YjVuUsmHfeSOjPDk2TpGMmZmRakZvqoVIEQJ8dgLANb5zAZSHf8a00hqoT9WKkwESxA1mcsVJ_mSZ8HzA5HXozNWSsOAckjGdJtFvEv9DoY7c9snNKlMg6OeD8HvZAFetNgjNBuk",
};

const reducer = (state, action) => {
  //   console.log("Reducer Action", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
