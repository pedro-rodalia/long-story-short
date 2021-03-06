import Vue from 'vue'
import VueRouter from 'vue-router'
import Story from '@/components/story/Story'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/story/:author/:title/:id',
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
  // mode: 'history',
})

export default router
