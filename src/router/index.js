import Vue from 'vue'
import VueRouter from 'vue-router'
import Story from '@/components/Story.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/story/:author/:title',
    name: 'Story',
    props: true,
    component: Story,
  },
  {
    path: '/story/write',
    name: 'Write',
    props: { editable: true },
    component: Story,
  },
]

const router = new VueRouter({
  routes,
})

export default router
