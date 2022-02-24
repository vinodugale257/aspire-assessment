import Vue from "vue";
import Vuex from "vuex";
import { getAllCards } from "@/services/CardService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardStateId: 1,
    activeCardId: 0,
    cards: []
  },
  mutations: {
    SET_FREEZE_CARD(state, cardId) {
      state.cards[cardId].isDisable = !state.cards[cardId].isDisable;
    },
    SET_ACTIVE_CARD(state, cardId) {
      state.activeCardId = cardId;
    },
    SET_CARDS(state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    freezeCard({ commit }, cardId) {
      commit("SET_FREEZE_CARD", cardId);
    },
    setActiveCard({ commit }, cardId) {
      commit("SET_ACTIVE_CARD", cardId);
    },
    getAllCards({ commit }) {
      return new Promise((resolve, reject) => {
        getAllCards()
          .then((response) => {
            commit("SET_CARDS", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    
  },
  getters: {
    getActiveCard: (state) => (cardId) => {
        return state.cards[cardId]
      },
  },
  modules: {},
});
