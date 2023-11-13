// 📝 action type
export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

// 🛠️ action creator
export const loggedIn = (payload) => ({
  type: LOGGED_IN,
  payload, // 📦 action payload
});

// 🛠️ action creator
export const loggedOut = () => ({
  type: LOGGED_OUT,
});
