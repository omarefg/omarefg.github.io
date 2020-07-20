import Element from '../Element'

class Blog extends Element {
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

customElements.define('of-blog', Blog)
