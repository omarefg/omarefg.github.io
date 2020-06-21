class NotFound extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    return `
      <div class="Error404">
        <h2>Error 404</h2>
      </div>
    `
  }
}

customElements.define('not-found', NotFound)
