import Element from '../Element'

class Post extends Element {
  post: any

  constructor () {
    super()
    this.post = this.getPostFromRoute()
    this.render()
  }

  getPostFromRoute () {
    const route = this.utils.router.getRoute().split('/')[2]
    const posts:any = this.getData().posts
    return posts[route]
  }

  getTemplate ():string {
    return `
      <main>
        <h1>${this.post.title}</h1>
        <img width="100%" src="${this.post.src}"/>
        <p>${this.post.content}</p>
        <p>${this.post.date}</>
      </main>
    `
  }
}

customElements.define('of-post', Post)
