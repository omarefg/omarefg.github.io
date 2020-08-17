import Element from '../../Element'

const positions = ['flex-start', 'flex-end', 'center']

class AboutDescription extends Element {
  titleText: string;

  constructor () {
    super()
    this.titleText = this.children[0]?.innerHTML || ''
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          ${this.styles.global.globalStyles}

          :host {
            z-index: 100;
            display: flex;
            align-items: ${positions[this.utils.number.getRandomInt(0, positions.length - 1)]} ;
            justify-content: ${positions[this.utils.number.getRandomInt(0, positions.length - 1)]} ;
            padding: ${this.styles.spacing.getSpacing()};
            white-space: nowrap;
          }

          .hide {
            font-size: 0;
            user-select: none;
          }

          .visible {
            font-size: ${this.utils.number.getRandomInt(14, 32)}px;
            transition: ${this.utils.number.getRandomInt(1, 3)}s font-size;
            opacity: ${this.utils.number.getRandomFloat(0.2, 1)}
          }
        </style>
    `
  }

  connectedCallback () {
    setTimeout(() => {
      this.shadowRoot?.querySelector('h2')?.classList.add('visible')
    }, this.utils.number.getRandomFloat(0.1, 4.9) * 1000)
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <h2 class="hide">${this.titleText}</h2>
    `
  }
}

customElements.define('about-description', AboutDescription)
