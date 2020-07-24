import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Fish from '../views/Fish.vue'
import Bugs from '../views/Bugs.vue'
import Fossils from '../views/Fossils.vue'
import Art from '../views/Art.vue'
import Museum from '../views/museum/Index.vue'
import MuseumFish from '../views/museum/Fish.vue'
import MuseumBugs from '../views/museum/Bugs.vue'
import MuseumFossils from '../views/museum/Fossils.vue'
import MuseumArt from '../views/museum/Art.vue'

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
        path: 'fish',
        name: 'MuseumFish',
        component: MuseumFish
      },
      {
        path: 'bugs',
        name: 'MuseumBugs',
        component: MuseumBugs
      },
      {
        path: 'fossils',
        name: 'MuseumFossils',
        component: MuseumFossils
      },
      {
        path: 'art',
        name: 'MuseumArt',
        component: MuseumArt
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
