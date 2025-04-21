import axios from '@/plugins/axios';

const state = {
  // Textos
  textLogo: process.env.VUE_APP_TEXT_LOGO,
  textSubtitle: process.env.VUE_APP_TEXT_SUBTITLE,
  textTitle: process.env.VUE_APP_TEXT_TITLE,
  textSubtitle1: process.env.VUE_APP_TEXT_SUBTITLE1,
  textSubtitle2: process.env.VUE_APP_TEXT_SUBTITLE2,
  textSubtitle3: process.env.VUE_APP_TEXT_SUBTITLE3,
  colorText: process.env.VUE_APP_COLOR_TEXT,
  colorContrast: process.env.VUE_APP_COLOR_CONSTRAST,
  nameTheme: process.env.VUE_APP_NAME_THEME,
  colorLogo: process.env.VUE_APP_COLOR_LOGO,
  
  // Configuración
  boletos: parseInt(process.env.VUE_APP_BOLETOS) || 1000,
  
  // Tema
  colorPrimary1: process.env.VUE_APP_COLOR_PRIMARY_1,
  colorPrimary2: process.env.VUE_APP_COLOR_PRIMARY_2,

  isProcessed: false
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
  getColorPrimary2: state => state.colorPrimary2,
  getIsProcessed: state => state.isProcessed
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
  },
  SET_COLOR_TEXT(state, value) {
    state.colorText = value;
  },
  SET_COLOR_CONSTRAST(state, value) {
    state.colorContrast = value;
  },
  SET_NAME_THEME(state, value) {
    state.nameTheme = value;
  },
  SET_COLOR_LOGO(state, value) {
    state.colorLogo = value;
  },
  SET_IS_PROCESSED(state, value) {
    state.isProcessed = value;
  }
};

const actions = {
  async updateSetting({ commit, state }) {
    try {
      const response = await axios.get('/api/settings');
      const settings = response.data;
      /*Object.keys(state).forEach(key => {
        commit('SET_' + key, settings[key]);
      });*/
      commit('SET_IS_PROCESSED', true);
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
