const AuthModule = {
  state: () => ({
    isAuth: false,
  }),
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
  },
  namespaced: true,
};

export default AuthModule;
