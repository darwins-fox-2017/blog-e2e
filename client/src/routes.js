import Home from './components/Home.vue'
import Shop from './components/Shop.vue'
import User from './components/user/User.vue'

import Item from './components/item/Item.vue'
import ItemAll from './components/item/ItemAll.vue'
import ItemDetail from './components/item/ItemDetail.vue'
import ItemNew from './components/item/ItemNew.vue'
import ItemEdit from './components/item/ItemEdit.vue'

import Post from './components/post/Post.vue'
import PostAll from './components/post/PostAll.vue'
import PostDetail from './components/post/PostDetail.vue'
import PostNew from './components/post/PostNew.vue'
import PostEdit from './components/post/PostEdit.vue'

export const routes = [
  { path : '', component: Home, children: [
    {path: '/shop', component: Shop}
  ]},
  { path : '/users', component: User},
  { path : '/items', component:Item, children: [
    {path: '', component: ItemAll},
    {path: 'new', component: ItemNew},
    {path: ':id', component: ItemDetail},
    {path: ':id/edit', component: ItemEdit}
  ]},
  {
    path: '/posts', component: Post, children: [
      {path: '', component: PostAll},
      {path: 'new', component: PostNew},
      {path: ':id', component: PostDetail},
      {path: ':id/edit', component: PostEdit}
    ]
  }
]
