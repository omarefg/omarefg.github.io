import Element from '../Element'

class Button extends Element {
  constructor () {
    super()
    this.render()
  }

  getStyles ():string {
    return `
      <style>
        button {
          background-color: transparent;
          padding: ${this.styles.spacing.getSpacing()} ${this.styles.spacing.getSpacing(3)};
          border-radius: ${this.styles.spacing.getBorderRadius()};
          border: 1px solid ${this.styles.colors.getPalette().text};
          color: ${this.styles.colors.getPalette().text};
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
}

customElements.define('of-button', Button)
