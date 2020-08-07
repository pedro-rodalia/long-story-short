import { shallowMount, createLocalVue } from '@vue/test-utils'
import StoryCard from '@/components/StoryCard'
import Stories from 'stories'

const localVue = createLocalVue()

describe('StoryCard test suite', () => {
  const wrapper = shallowMount(StoryCard, {
    localVue,
    propsData: { story: Stories[0] },
  })
  test('The Story Card component shows the title and an abstract of the content', () => {
    expect(wrapper.find('.story-card__title').text()).toBe(Stories[0].title)
    expect(wrapper.find('.story-card__abstract').text()).toBe(Stories[0].abstract)
  })
})