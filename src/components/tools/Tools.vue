<template lang="html">
  <div :class="classes" :style="menu && `left: ${menu.left}px; bottom: ${menu.bottom}px;`">
    <base-button
      :type="bubble ? 'secondary' : null"
      size="small"
      :text="true"
      :active="isActive.bold()"
      @click="commands.bold"
    >
      <span>B</span>
    </base-button>
    <base-button
      :type="bubble ? 'secondary' : null"
      size="small"
      :text="true"
      :active="isActive.strike()"
      @click="commands.strike"
    >
      <span class="icon--strike">S</span>
    </base-button>
    <base-button
      :type="bubble ? 'secondary' : null"
      size="small"
      :text="true"
      :active="isActive.underline()"
      @click="commands.underline"
    >
      <span class="icon--underline">U</span>
    </base-button>
    <base-button
      v-for="(heading, idx) in headings"
      :key="idx"
      :type="bubble ? 'secondary' : null"
      size="small"
      :text="true"
      :active="isActive.heading({ level: heading })"
      @click="commands.heading({ level: heading })"
    >
      <span>H{{ heading }}</span>
    </base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/base-button/BaseButton'
export default {
  name: 'Tools',
  components: { BaseButton },
  props: {
    editor: {
      type: Object,
      default: null,
    },
    menu: {
      type: Object,
      default: null,
    },
    bubble: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isActive() {
      return this.editor.isActive
    },
    commands() {
      return this.editor.commands
    },
    headings() {
      return this.editor.extensions.extensions.find(({ name }) => name === 'heading').options.levels
    },
    classes() {
      const classes = ['menu']
      if (this.bubble) classes.push('menu--dark menu--bubble')
      if (this.menu && !this.menu.isActive) classes.push('hidden')
      return classes.join(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  &--underline {
    text-decoration: underline;
  }
  &--strike {
    text-decoration: line-through;
  }
}
</style>
