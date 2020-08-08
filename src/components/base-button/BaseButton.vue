<template lang="html">
  <button :class="classes" v-bind="attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    size: {
      type: String,
      default: null,
      validator: (size) => [null, 'small'].includes(size),
    },
    type: {
      type: String,
      default: null,
      validator: (type) => [null, 'secondary', 'danger'].includes(type),
    },
    text: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ['btn']
      if (this.size) classes.push(`btn--${this.size}`)
      if (this.type) classes.push(`btn--${this.type}`)
      if (this.text) classes.push('btn--text')
      if (this.active) classes.push('btn--active')
      return classes.join(' ')
    },
    attrs() {
      const { type, size, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: $--spacing-50 $--spacing-75;
  margin: 0 $--spacing-25;
  background: $--white;
  border: 1px solid $--black;
  border-radius: $--border-radius-sm;
  font-weight: $--font-semibold;
  cursor: pointer;
  &--small {
    padding: $--spacing-25 $--spacing-50;
    margin: 0 $--spacing-12;
  }
  &--danger {
    border-color: $--red-600;
    color: $--red-600;
  }
  &--secondary {
    background-color: $--black;
    color: $--white;
  }
  &--text {
    background-color: transparent;
    border-color: transparent;
    &:hover {
      background-color: $--gray-200;
    }
    &.btn--active {
      background-color: rgba($--black, 0.1);
    }
    &.btn--secondary {
      background-color: $--black;
      color: $--white;
      &:hover {
        background-color: rgba($--black, 0.1);
      }
      &.btn--active {
        background-color: rgba($--white, 0.2);
      }
    }
  }
}
</style>
