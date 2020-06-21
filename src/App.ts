import './components/pages/Home'

class App extends HTMLElement {
  shownSection: number

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shownSection = 1
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

  getSection (section:number) {
    switch (section) {
      case 1:
        return '<omarefg-home></omarefg-home>'
    }
  }

  getTemplate () {
    return `
      ${this.getStyles()}
      <div class="app-section">
      ${this.getSection(this.shownSection)}
      </div>
    `
  }

  render () {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = this.getTemplate()
    }
  }
}

customElements.define('omarefg-app', App)

export default App
