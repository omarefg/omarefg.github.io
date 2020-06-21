class Home extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getStyles () {
    return `
        <style>
            :host {
                display: block;
            }
        </style>
    `
  }

  getTemplate () {
    return `
      ${this.getStyles()}
      <main>
        <section class="principal">
        </section>
        <section class="posts-container">
        </section>
      </main>
    `
  }

  render () {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = this.getTemplate()
    }
  }
}
{ /* <style lang="scss" scoped>
main {
  padding: spacing(8);
  flex: 1;
  display: flex;
  flex-direction: column;
  @include colorMode() {
    color: theme('textColor');
    background-color: theme('backgroundColor');
  }
}

.principal {
  height: 100vh;
  display: flex;
  align-items: center;
  max-height: 600px;
  margin-bottom: spacing(4);
  @include colorMode() {
    border-bottom: 1px solid theme('textColor');
  }
}

.posts-container{
  flex: 1;
  display: grid;
  grid-template-columns: calc(50% - 32px) calc(50% - 32px);
  gap: 64px;
}
</style> */ }

customElements.define('omarefg-home', Home)
