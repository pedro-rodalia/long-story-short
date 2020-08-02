<template lang="html">
  <div class="navigation">
    <div class="navigation__group" v-for="{ group, stories } in groupedStories" :key="group">
      <spacer>{{ group }}</spacer>
      <story-card v-for="story in stories" :key="story.id" :story="story"></story-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import StoryCard from '@/components/StoryCard'
import Spacer from '@/components/Spacer'
export default {
  name: 'Navigation',
  components: { StoryCard, Spacer },
  props: {
    stories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      grouping: 'month',
    }
  },
  computed: {
    groupedStories() {
      const sortedStories = [...this.stories]
        .sort((a, b) => moment(b.createdAt).diff(moment(a.createdAt)))
        .map(({ createdAt, ...story }) => ({
          year: moment(createdAt).format('YYYY'),
          month: moment(createdAt).format('MMMM YYYY'),
          day: moment(createdAt).format('DD [de] MMMM [de] YYYY'),
          ...story,
        }))
      return sortedStories.reduce((groupedStories, story) => {
        const lastGroup = groupedStories[groupedStories.length - 1]
        if (!groupedStories.length || lastGroup.group !== story[this.grouping]) {
          groupedStories.push({ group: story[this.grouping], stories: [story] })
        } else {
          lastGroup.stories.push(story)
        }
        return groupedStories
      }, [])
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  height: 100%;
  position: relative;
  overflow: scroll;
  max-width: $--spacing-3200;
  background-color: $--gray-200;
  padding: 0 $--spacing-200;
}
</style>
