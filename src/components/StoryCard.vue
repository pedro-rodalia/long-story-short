<template lang="html">
  <router-link class="story-card" active-class="story-card--active" :to="{ name: 'Story', params }">
    <div class="story-card__header">
      <h1 class="story-card__title">{{ story.title }}</h1>
      <p v-if="!story.published" class="story-card__badge">borrador</p>
    </div>
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
  position: relative;
  box-sizing: border-box;
  height: $--spacing-800;
  color: $--black;
  text-decoration: none;
  display: block;
  border-radius: $--border-radius-base;
  background-color: $--white;
  border: 1px solid $--white;
  padding: $--spacing-50 $--spacing-150;
  margin: $--spacing-100 $--spacing-200;
  cursor: pointer;
  transition: 0.3s border-color;
  &--active {
    border-color: $--black;
    transition: 0.5s border-color;
  }
  &:hover {
    box-shadow: $--shadow-md;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: $--text-xl;
    font-weight: $--font-semibold;
  }
  &__abstract {
    margin-top: $--spacing-50;
    font-size: $--text-sm;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &__badge {
    display: inline-block;
    height: $--spacing-100;
    @extend %font-sans;
    font-size: $--text-xs;
    font-weight: $--font-medium;
    border: 1px solid $--black;
    border-radius: $--border-radius-sm;
    padding: $--spacing-12 $--spacing-50;
    right: 0;
  }
}
</style>
