import axios from 'axios'

const baseStoryState = () => ({ title: '', content: '' })

const state = {
  stories: [],
  story: baseStoryState(),
}

const getters = {
  stories: (state) => state.stories,
  story: (state) => state.story,
}

const actions = {
  async getStory({ commit }, id) {
    const { data: story } = await axios.get(`stories/${id}`)
    commit('setStory', story)
    return story
  },
  async getStories({ commit }) {
    const { data: stories } = await axios.get('stories')
    commit('setStories', stories)
  },
  async save({ state, dispatch }, publish = false) {
    const { data } = await axios.post('stories', {
      title: state.story.title,
      text: state.story.content,
      published: publish,
      author: 'Mateo Lopez',
    })
    await dispatch('getStories')
    console.log('data', data)
  },
}

const mutations = {
  setStories(state, stories) {
    state.stories = stories
  },
  setStory(state, story) {
    state.story = story
  },
  clearStory(state) {
    state.story = baseStoryState()
  },
  updateStory(state, { title, content }) {
    state.story.title = title
    state.story.content = content
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}
