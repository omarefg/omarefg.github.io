import Element from '../../Element'
import { AboutDescriptionInterface } from '../../schemas/interfaces.ts'

class AboutDescription extends Element implements AboutDescriptionInterface {
  titleText: string;
  bottom: string;
  top: string;
  left: string;
  right: string;

  constructor () {
    super()
    console.log(this.children[0]?.innerHTML)
    this.titleText = this.children[0]?.innerHTML || ''
    this.top = this.getAttribute('top') || ''
    this.right = this.getAttribute('right') || ''
    this.bottom = this.getAttribute('bottom') || ''
    this.left = this.getAttribute('left') || ''
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          ${this.styles.global.globalStyles}

          :host {
            z-index: 100;
          }

          .description {
            position: absolute;
            top: ${this.top};
            right: ${this.right};
            bottom: ${this.bottom};
            left: ${this.left};
          }
        </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <h2 class="description">
        ${this.titleText}
      </h2>
    `
  }
}

customElements.define('about-description', AboutDescription)
