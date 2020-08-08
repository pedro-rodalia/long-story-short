<template>
  <div id="app">
    <navigation v-if="stories.length" :stories="stories"></navigation>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navigation from '@/components/navigation/Navigation'
export default {
  name: 'Home',
  components: {
    Navigation,
  },
  computed: {
    ...mapGetters(['stories']),
  },
  methods: {
    ...mapActions(['getStories']),
  },
  mounted() {
    this.getStories()
  },
}
</script>
