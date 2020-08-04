<template lang="html">
  <div class="toolbar">
    <tools class="menu" :editor="editor" />
  </div>
</template>

<script>
import Tools from '@/components/Tools'
export default {
  name: 'Toolbar',
  components: { Tools },
  props: {
    editor: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  height: $--spacing-300;
  box-shadow: $--shadow-2xl;
  border-radius: $--border-radius;
  border: 1px solid $--black;
  bottom: $--spacing-200;
  left: $--spacing-200;
  right: $--spacing-200;
  margin: 0 $--spacing-400;
  & > .menu {
    margin: 0 $--spacing-100;
  }
}
</style>
