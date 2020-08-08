<template lang="html">
  <div class="toolbar">
    <tools v-if="true" class="toolbar__menu" :editor="editor" />
    <div class="toolbar__buttons">
      <base-button type="secondary" @click="$emit('publish')">Publicar</base-button>
      <base-button @click="$emit('save')">Guardar borrador</base-button>
      <base-button type="danger">Eliminar</base-button>
    </div>
  </div>
</template>

<script>
import Tools from '@/components/tools/Tools'
import BaseButton from '@/components/base-button/BaseButton'
export default {
  name: 'Toolbar',
  components: { Tools, BaseButton },
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
}
</style>
