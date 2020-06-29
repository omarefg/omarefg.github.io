import Element from '../Element'

class Posts extends Element {
  constructor () {
    super()
    this.render()
  }

  getTemplate ():string {
    return `
      <main>
      </main>
    `
  }
}

customElements.define('of-posts', Posts)
