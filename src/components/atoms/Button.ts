import { getBorderRadius, getSpacing } from '../../styles/spacing'
import { getPalette } from '../../styles/colors'

class Button extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getStyles ():string {
    return `
      <style>
        button {
          background-color: transparent;
          padding: ${getSpacing()} ${getSpacing(3)};
          border-radius: ${getBorderRadius()};
          border: 1px solid ${getPalette().textColor};
          color: ${getPalette().textColor};
        }
      </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <button>
        <slot name="content"></slot>
      </button>
    `
  }

  render ():void {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = this.getTemplate()
    }
  }
}

customElements.define('of-button', Button)
