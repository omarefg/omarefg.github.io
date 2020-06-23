class NotFound extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getTemplate ():string {
    return `
      <div class="Error404">
        <h2>Error 404</h2>
      </div>
    `
  }

  render ():void {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = this.getTemplate()
    }
  }
}

customElements.define('not-found', NotFound)
