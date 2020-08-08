import { shallowMount, createLocalVue } from '@vue/test-utils'
import StoryCard from '@/components/story-card/StoryCard'

const localVue = createLocalVue()
const Stories = [
  {
    title: 'A la luz del sol',
    author: 'Mateo Lopez',
    abstract:
      'El repiquetear de las gotas en el cemento se ha convertido en nuestro segundero. Contamos los pasos de la muerte. Su llegada es inevitable y sólo queremos saber cuándo nos dará caza.',
  },
]

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
