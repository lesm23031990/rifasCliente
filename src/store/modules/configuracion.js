export default {
  namespaced: true,
  state: {
    logo: '',
    imagenGeneral: '',
    imagenSorteoGeneral: '',
    tituloGeneral: '',
    descripcionGeneral: '',
  },
  mutations: {
    actualizarConfiguracion(state, { clave, valor }) {
      state[clave] = valor;
    }
  },
  actions: {
    guardarConfiguracion({ commit }, { clave, valor }) {
      commit('actualizarConfiguracion', { clave, valor });
    }
  },
  getters: {
    obtenerConfiguracion: (state) => (clave) => {
      return state[clave];
    }
  }
}; 