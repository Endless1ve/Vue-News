const AuthModule = {
  state: () => ({
    isAuth: true,
  }),
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
  },
  namespaced: true,
};

export default AuthModule;
