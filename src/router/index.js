import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Fish from '../views/Fish.vue'
import Bugs from '../views/Bugs.vue'
import Fossils from '../views/Fossils.vue'
import Art from '../views/Art.vue'
import Museum from '../views/museum/Index.vue'
import Section from '../views/museum/Section'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/fish',
    name: 'Fish',
    component: Fish
  },
  {
    path: '/bugs',
    name: 'Bugs',
    component: Bugs
  },
  {
    path: '/fossils',
    name: 'Fossils',
    component: Fossils
  },
  {
    path: '/art',
    name: 'Art',
    component: Art
  },
  {
    path: '/museum',
    name: 'Museum',
    component: Museum,
    children: [
      {
        path: ':slug',
        component: Section
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
