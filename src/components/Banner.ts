import Element from '../Element'

class Banner extends Element {
  constructor () {
    super()
    this.render()
  }

  getBanner ():string {
    if (this.styles.colors.getColorMode() === 'dark') {
      return require('../../assets/banner_dark.jpg')
    }
    return require('../../assets/banner_light.png')
  }

  getStyles (): string {
    return `
      <style>
          :host {
            width: 100%;
          }

          div {
            position: relative;
            background-image: url(${this.getBanner()});
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            box-shadow: 0 0 10px 0px rgba(0,0,0,0.85);
            flex-direction: column;
          }

          img {
            position: absolute;
            top: -${this.styles.spacing.getSpacing(10)};
            right: -${this.styles.spacing.getSpacing(5)};
            position: absolute;
            top: -60px;
            right: -20px;
          }

          h1, h2 {
            font-weight: 700;
            color: #fff;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            text-shadow: 0 0 0.15em #1da9cc;
            user-select: none;
            filter: blur(0.007em);
            animation: shake 2.5s linear forwards infinite;
            margin: 0;
        }

        ${this.styles.animations.shake}
      </style>
    `
  }

  getTemplate (): string {
    return `
      ${this.getStyles()}
      <div>
        <h1>Hello stranger</h1>
        <h2>Welcome</h2>
        <img src="${this.utils.api.getRoboHashUrl({
    set: 'set1',
    size: '150',
    word: this.styles.colors.getColorMode()
  })}">
      </div>
    `
  }
}

customElements.define('of-banner', Banner)
