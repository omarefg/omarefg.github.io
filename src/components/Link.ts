import Element from '../Element'

class Link extends Element {
  text: string
  href: string

  constructor () {
    super()
    this.text = this.children[0]?.innerHTML || ''
    this.href = this.getAttribute('href') || ''
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          ${this.styles.global.globalStyles}

          .link {
            transition: transform .2s cubic-bezier(.86, 0, .07, 1);
            letter-spacing: .12em;
            outline: 0;
            font-family: Rajdhani,sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            box-sizing: border-box;
            position: relative;
            width: auto;
            margin: 0;
            line-height: 2em;
            padding: 9px 20px;
          }

          .link:hover {
            color: ${this.styles.colors.getPalette().primaryColor}!important;
          }

          .link:hover .secondary {
            clip-path: inset(50% 0 0 0);
            transform: translateY(3%);
            opacity: 1;
            transition: clip-path .2s,transform .2s cubic-bezier(.86,0,.07,1);
          }

          .link:hover .primary {
            clip-path: inset(0 0 50% 0);
            transform: translateX(-3%) translateY(-3%);
            transition: clip-path .2s,transform .2s cubic-bezier(.86,0,.07,1);
          }

          .primary {
            color: inherit;
          }

          .secondary {
            position: absolute!important;
            bottom: 2px;
            left: 21px;
            opacity: 0;
          }
        </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <a class="link" href="${this.href}">
        <span class="primary">
          ${this.text}
        </span>
        <span class="secondary">
          ${this.text}
        </span>
      </a>
    `
  }
}

customElements.define('of-link', Link)
