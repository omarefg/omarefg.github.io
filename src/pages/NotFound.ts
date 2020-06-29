import Element from '../Element'

class NotFound extends Element {
  constructor () {
    super()
    this.render()
  }

  getTemplate ():string {
    return `
      <div class="Error404">
        <h2>Error 404</h2>
      </div>
    `
  }
}

customElements.define('not-found', NotFound)
