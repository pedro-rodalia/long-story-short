<template lang="html">
  <h1 class="spacer">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'Spacer',
}
</script>

<style lang="scss" scoped>
.spacer {
  @extend %font-sans;
  padding: $--spacing-150 0 $--spacing-50 0;
  margin: 0 $--spacing-200 $--spacing-50 $--spacing-200;
  text-align: right;
  font-weight: $--font-light;
  font-size: $--text-2xl;
  text-transform: capitalize;
  color: $--black;
  background-color: $--gray-200;
  position: sticky;
  top: 0;
  &::after {
    content: '';
    position: absolute;
    background-color: $--gray-500;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0.25rem;
  }
}
</style>
