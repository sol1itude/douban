import Vue from 'vue'
import Router from 'vue-router'
import Pages from '../views/Pages.vue'
import Movie from '../views/Movie.vue'
import Book from '../views/Book.vue'
import Broadcast from '../views/Broadcast.vue'
import Group from '../views/Group.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages,
      children: [
        {
          path: 'movie',
          name: 'Movie',
          component: Movie
        },
        {
          path: 'book',
          name: 'Book',
          component: Book
        },
        {
          path: 'broadcast',
          name: 'Broadcast',
          component: Broadcast
        },
        {
          path: 'group',
          name: 'Group',
          component: Group
        }
      ]
    }
  ]
})
