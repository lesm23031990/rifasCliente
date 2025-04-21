import axios from '@/plugins/axios';

const state = {
  // Textos
  textLogo: process.env.VUE_APP_TEXT_LOGO,
  textSubtitle: process.env.VUE_APP_TEXT_SUBTITLE,
  textTitle: process.env.VUE_APP_TEXT_TITLE,
  textSubtitle1: process.env.VUE_APP_TEXT_SUBTITLE1,
  textSubtitle2: process.env.VUE_APP_TEXT_SUBTITLE2,
  textSubtitle3: process.env.VUE_APP_TEXT_SUBTITLE3,
  
  // Configuración
  boletos: parseInt(process.env.VUE_APP_BOLETOS) || 1000,
  
  // Tema
  colorPrimary1: process.env.VUE_APP_COLOR_PRIMARY_1,
  colorPrimary2: process.env.VUE_APP_COLOR_PRIMARY_2
};

const getters = {
  getTextLogo: state => state.textLogo,
  getTextSubtitle: state => state.textSubtitle,
  getTextTitle: state => state.textTitle,
  getTextSubtitle1: state => state.textSubtitle1,
  getTextSubtitle2: state => state.textSubtitle2,
  getTextSubtitle3: state => state.textSubtitle3,
  getBoletos: state => state.boletos,
  getColorPrimary1: state => state.colorPrimary1,
  getColorPrimary2: state => state.colorPrimary2
};

const mutations = {
  SET_TEXT_LOGO(state, value) {
    state.textLogo = value;
  },
  SET_TEXT_SUBTITLE(state, value) {
    state.textSubtitle = value;
  },
  SET_TEXT_TITLE(state, value) {
    state.textTitle = value;
  },
  SET_TEXT_SUBTITLE1(state, value) {
    state.textSubtitle1 = value;
  },
  SET_TEXT_SUBTITLE2(state, value) {
    state.textSubtitle2 = value;
  },
  SET_TEXT_SUBTITLE3(state, value) {
    state.textSubtitle3 = value;
  },
  SET_BOLETOS(state, value) {
    state.boletos = parseInt(value);
  },
  SET_COLOR_PRIMARY1(state, value) {
    state.colorPrimary1 = value;
  },
  SET_COLOR_PRIMARY2(state, value) {
    state.colorPrimary2 = value;
  }
};

const actions = {
  updateTextLogo({ commit }, value) {
    commit('SET_TEXT_LOGO', value);
  },
  updateTextSubtitle({ commit }, value) {
    commit('SET_TEXT_SUBTITLE', value);
  },
  updateTextTitle({ commit }, value) {
    commit('SET_TEXT_TITLE', value);
  },
  updateTextSubtitle1({ commit }, value) {
    commit('SET_TEXT_SUBTITLE1', value);
  },
  updateTextSubtitle2({ commit }, value) {
    commit('SET_TEXT_SUBTITLE2', value);
  },
  updateTextSubtitle3({ commit }, value) {
    commit('SET_TEXT_SUBTITLE3', value);
  },
  updateBoletos({ commit }, value) {
    commit('SET_BOLETOS', value);
  },
  updateColorPrimary1({ commit }, value) {
    commit('SET_COLOR_PRIMARY1', value);
  },
  updateColorPrimary2({ commit }, value) {
    commit('SET_COLOR_PRIMARY2', value);
  },
  async updateSetting({ commit, state }) {
    try {
      const response = await axios.get('/api/settings');
      const settings = response.data;
      Object.keys(state).forEach(key => {
        commit('SET_' + key, settings[key]);
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
