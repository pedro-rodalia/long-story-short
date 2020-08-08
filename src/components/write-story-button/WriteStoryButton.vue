<template lang="html">
  <router-link class="write-btn" :class="{ 'write-btn--active': isWritting }" :to="{ name: 'Write' }">
    <template v-if="!isWritting">
      <div class="write-btn__call">
        <div class="write-btn__icon">+</div>
        <p class="write-btn__text">Escribir un nuevo relato</p>
      </div>
    </template>
    <template v-else>
      <h1 class="write-btn__title" :class="{ placeholder: !story.title }">
        {{ title }}
      </h1>
      <p class="write-btn__abstract" :class="{ placeholder: !strip(story.content) }">
        {{ content }}
      </p>
    </template>
  </router-link>
</template>

<script>
import { StripMethod } from '@/mixins/methods'
import { mapGetters } from 'vuex'
export default {
  name: 'WriteStoryButton',
  mixins: [StripMethod],
  computed: {
    ...mapGetters(['story']),
    isWritting() {
      return this.$route.name === 'Write'
    },
    title() {
      return this.story.title || 'Título'
    },
    content() {
      return this.strip(this.story.content) || 'Contenido'
    },
  },
}
</script>

<style lang="scss" scoped>
.write-btn {
  display: block;
  box-sizing: border-box;
  min-height: $--spacing-800;
  color: $--black;
  text-decoration: none;
  border-radius: $--border-radius-base;
  background-color: $--white;
  border: 1px solid $--white;
  padding: $--spacing-50 $--spacing-150;
  margin: $--spacing-100 $--spacing-200;
  cursor: pointer;
  &:hover {
    box-shadow: $--shadow-md;
  }
  &--active {
    border-color: $--black;
    transition: 0.5s border-color;
  }
  &__text {
    display: block;
    font-size: $--text-xl;
  }
  &__icon {
    @extend %font-sans;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $--text-5xl;
    font-weight: $--font-light;
    border: 1px solid $--black;
    border-radius: 100%;
    height: $--spacing-300;
    width: $--spacing-300;
    margin-right: $--spacing-100;
  }
  &__call {
    height: 100%;
    display: flex;
    align-items: center;
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
  & .placeholder {
    color: $--gray-500;
  }
}
</style>
