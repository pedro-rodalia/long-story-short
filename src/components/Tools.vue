<template lang="html">
  <div
    class="menu"
    :class="{
      'is-hidden': menu && !menu.isActive,
      'menu--light': !bubble,
      'menu--bubble': bubble,
      'menu--dark': bubble,
    }"
    :style="menu && `left: ${menu.left}px; bottom: ${menu.bottom}px;`"
  >
    <button class="menu__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
      <span class="icon--bold">B</span>
    </button>
    <button class="menu__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
      <span class="icon--strike">S</span>
    </button>
    <button class="menu__button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
      <span class="icon--underline">U</span>
    </button>
    <button class="menu__button" :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph">
      <span class="icon--paragraph">ℙ</span>
    </button>
    <button
      v-for="(heading, idx) in headings"
      class="menu__button"
      :key="idx"
      :class="{ 'is-active': isActive.heading({ level: heading }) }"
      @click="commands.heading({ level: heading })"
    >
      <span class="icon--heading">H{{ heading }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Tools',
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
  },
}
</script>

<style lang="css" scoped></style>
