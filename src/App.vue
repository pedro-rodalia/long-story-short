<template>
  <div id="app">
    <navigation :stories="stories"></navigation>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '@/components/Navigation'
export default {
  name: 'Home',

  components: {
    Navigation,
  },

  computed: {
    ...mapGetters(['stories']),
  },
}
</script>

<style lang="scss">
* {
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

html,
body,
#app {
  font-family: 'Cormorant Garamond';
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
}
</style>
