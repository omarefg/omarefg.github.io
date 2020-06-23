import { getPalette } from '../../styles/colors'
import { getSpacing } from '../../styles/spacing'

class Home extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          :host {
            padding: ${getSpacing(8)};
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .principal {
            height: 100vh;
            display: flex;
            align-items: center;
            max-height: 600px;
            margin-bottom: ${getSpacing(4)};
            border-bottom: 1px solid ${getPalette().textColor};
          }

          .posts-container{
            flex: 1;
            display: grid;
            grid-template-columns: calc(50% - 32px) calc(50% - 32px);
            gap: 64px;
          }
        </style>
    `
  }

  getTemplate ():string {
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

  render ():void {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = this.getTemplate()
    }
  }
}

customElements.define('omarefg-home', Home)
