import Stories from '@/../__mocks__/stories.js'

const state = {
  stories: Stories,
  story: {
    title: '',
    content: '',
  },
}

const getters = {
  stories: (state) => state.stories,
  story: (state) => state.story,
}

const mutations = {
  updateStory(state, { title, content }) {
    state.story.title = title
    state.story.content = content
  },
}

export default {
  state,
  getters,
  mutations,
}
