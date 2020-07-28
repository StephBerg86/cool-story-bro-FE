export const selectToken = (state) => state.user.token;

export function selectUser(state) {
  return state.user;
}

export function selectMyPage(state) {
  console.log("select my page", state.user.homepage);
  return state.user.homepage;
}
