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
    title() {
      return this.story.title.replace(/\s+/g, '-').toLowerCase()
    },
    params() {
      const [author, title] = this.story.id.split('/')
      return { title, author }
    },
  },
}
</script>

<style lang="scss" scoped>
.story-card {
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
    &:hover {
      &#{&} {
        box-shadow: none;
      }
    }
  }
  &:hover {
    box-shadow: $--shadow-md;
  }
  &:active {
    box-shadow: none;
  }
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
