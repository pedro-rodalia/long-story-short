<template lang="html">
  <router-link class="story-card" active-class="story-card--active" :to="{ name: 'Story', params }">
    <h1 class="story-card__title">{{ story.title }}</h1>
    <p class="story-card__abstract">{{ story.content }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {
    params() {
      const [author, title] = this.story.id.split('/')
      return { title, author }
    },
  },
}
</script>

<style lang="scss" scoped>
.story-card {
  box-sizing: border-box;
  height: $--spacing-800;
  color: $--black;
  text-decoration: none;
  display: block;
  border-radius: $--border-radius;
  background-color: $--white;
  border: 1px solid $--white;
  padding: $--spacing-50 $--spacing-150;
  margin: $--spacing-100 0;
  cursor: pointer;
  transition: 0.3s border-color;
  &--active {
    border-color: $--black;
    transition: 0.5s border-color;
  }
  &:hover {
    box-shadow: $--shadow-md;
  }
  &__title {
    font-size: $--text-xl;
    font-weight: $--font-semibold;
  }
  &__abstract {
    font-size: $--text-sm;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
