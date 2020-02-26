import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enUSLocal from './en_US';
import zhCNLocal from './zh_CN';
Vue.use(VueI18n);

export default {
  init: function (language) {
    const i18n = new VueI18n({
      locale: localStorage.getItem("lang") || "zh",
      messages: {
        "en_US": enUSLocal,
        "zh_CN": zhCNLocal
      }
    });
  }
};
