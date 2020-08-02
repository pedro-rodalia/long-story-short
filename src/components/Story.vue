<template lang="html">
  <div class="story" ref="container">
    <h1 class="story__title" ref="title">{{ story.title }}</h1>
    <div class="story__content" ref="content">
      <p class="story__paragraph" v-for="(paragraph, idx) in paragraphs" :key="idx">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Story',
  computed: {
    ...mapGetters(['storyById']),
    story() {
      const { author, title } = this.$route.params
      return this.storyById(`${author}/${title}`)
    },
    paragraphs() {
      return this.story.content.split('\n')
    },
  },
  mounted() {
    this.$refs.content.style.marginTop = `${this.$refs.title.clientHeight}px`
    this.$refs.container.addEventListener('scroll', this.setTitleFontSize)
  },
  methods: {
    setTitleFontSize() {
      const scrollDistance = this.$refs.container.scrollTop
      this.$refs.title.style.fontSize = scrollDistance > 64 ? '32px' : '60px'
    },
  },
}
</script>

<style lang="scss" scoped>
.story {
  flex: 1;
  height: 100%;
  overflow: scroll;
  padding: 0;
  position: relative;
  &__title {
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0;
    font-size: $--text-6xl;
    font-weight: $--font-medium;
    padding: $--spacing-200 $--spacing-600 $--spacing-300;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 60%,
      rgba(255, 255, 255, 0)
    );
    transition: font-size 0.5s;
  }
  &__content {
    text-align: justify;
    padding: 0 $--spacing-600 $--spacing-600;
    text-indent: $--spacing-200;
    font-size: $--text-2xl;
    font-weight: $--font-light;
  }
}
</style>
