export default {
  setTokens(state, payload) {
    state.authTokens = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
};
