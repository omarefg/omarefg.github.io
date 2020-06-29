import Element from '../Element'

import '../components/organisms/Banner'

class Home extends Element {
  constructor () {
    super()
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          :host {
            padding: ${this.styles.spacing.getSpacing(8)};
            width: 100%;
          }
        </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <main>
        <of-banner></of-banner>
      </main>
    `
  }
}

customElements.define('of-home', Home)
