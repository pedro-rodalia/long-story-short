<template lang="html">
  <div class="story-card" :class="{ 'story-card--active': active }">
    <h1 class="story-card__title">{{ story.title }}</h1>
    <p class="story-card__abstract">{{ story.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    story: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.story-card {
  border-radius: $--border-radius;
  background-color: $--white;
  padding: $--spacing-50 $--spacing-150;
  margin: $--spacing-100 0;
  cursor: pointer;
  &__title {
    font-size: $--text-xl;
    font-weight: $--font-semibold;
  }
  &__abstract {
    font-size: $--text-sm;
    font-weight: $--font-light;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
