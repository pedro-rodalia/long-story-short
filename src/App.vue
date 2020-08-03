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
