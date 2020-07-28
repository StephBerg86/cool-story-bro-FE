export const selectToken = (state) => state.user.token;

export function selectUser(state) {
  console.log("select user state", state.user);
  console.log("select user state homepage", state.homepage);

  return state.user;
}

// export function selectMyPage(state) {
//   console.log("select my page", state.user);
//   console.log("state", state);
//   return state;
// }
