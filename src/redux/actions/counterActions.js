// 📝 action type
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = {
  type: INCREMENT,
};

// export const decrement = {
//   type: DECREMENT,
//   payload: 2
// };

// export const decrement = (payload) => {
//   return {
//     type: DECREMENT,
//     payload
//   }
// }

// 🛠️ action creator
export const decrement = (payload) => ({
  type: DECREMENT,
  payload, // 📦 action payload
});
