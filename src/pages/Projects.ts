import Element from '../Element'

class Projects extends Element {
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

customElements.define('of-projects', Projects)
