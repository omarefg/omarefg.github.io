import Home from '@/components/pages/Home'
import Blog from '@/components/Blog'
import Article1 from '@/components/articles/Article1'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/blog', component: Blog, name: 'blog' },
  { path: '/porque-todos-deberian-tener-una-pagina-web', component: Article1, name: 'article1' }
]

export default routes
