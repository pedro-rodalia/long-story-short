import Stories from "@/../__mocks__/stories.js";

const state = {
  stories: Stories
};

const getters = {
  stories: state => state.stories
};

const actions = {
  createStory({ commit }, { title, content }) {
    commit("ADD_STORY", { title, content });
  }
};

const mutations = {
  ADD_STORY(state, { title, content }) {
    state.stories.push({ title, content });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
