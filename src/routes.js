import Main from '@/components/Main'
import Blog from '@/components/Blog'
import Article1 from '@/components/articles/Article1'

const routes = [
  { path: '/blog', component: Blog, name: 'blog' },
  { path: '/', component: Main, name: 'main' },
  { path: '/porque-todos-deberian-tener-una-pagina-web', component: Article1, name: 'article1' }
]

export default routes
