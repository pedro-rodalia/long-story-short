<template lang="html">
  <div class="toolbar">
    <tools class="toolbar__menu" :editor="editor" v-if="true" />
    <div class="toolbar__buttons">
      <button class="toolbar__btn toolbar__btn--secondary">Publicar</button>
      <button class="toolbar__btn">Guardar borrador</button>
      <button class="toolbar__btn toolbar__btn--danger">Eliminar</button>
    </div>
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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: $--spacing-300;
  box-shadow: $--shadow-2xl;
  border-radius: $--border-radius-base;
  border: 1px solid $--black;
  bottom: $--spacing-200;
  left: $--spacing-200;
  right: $--spacing-200;
  margin: 0 $--spacing-400;
  padding: 0 $--spacing-50;
  &__menu {
    margin: 0;
  }
  &__buttons {
    margin-left: auto;
  }
  &__btn {
    background: $--white;
    border: 1px solid $--black;
    border-radius: $--border-radius-sm;
    padding: $--spacing-50 $--spacing-75;
    font-weight: $--font-semibold;
    margin: 0 $--spacing-25;
    cursor: pointer;
    &:hover {
      box-shadow: $--shadow-md;
    }
    &--danger {
      border-color: $--red-600;
      color: $--red-600;
    }
    &--secondary {
      background-color: $--black;
      color: $--white;
    }
  }
}
</style>
