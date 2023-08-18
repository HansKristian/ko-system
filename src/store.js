import { createStore } from 'vuex';

export default createStore({
  state () {
    return {
        behandlingsnummer: 1,
        lopenummer: 1
    }
  },
  mutations: {
    incrementBehandlingsnummer(state) {
      state.behandlingsnummer++;
    },
    incrementLopenummer(state) {
      state.lopenummer++;
      if (state.lopenummer < state.behandlingsnummer) {
        state.lopenummer = state.behandlingsnummer;
      }
    },
    reset(state) {
      state.behandlingsnummer = 0;
      state.lopenummer = 0;
    }
  }
});
