import Element from '../../Element'
import '../atoms/Link'

class Header extends Element {
  showNavLinks: boolean

  constructor () {
    super()
    this.showNavLinks = this.utils.router.getRoute() !== '/'
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          ${this.styles.global.globalStyles}
          header {
            display: flex;
            padding: 0 16px;
            height: 64px;
            align-items: center;
            justify-content: space-between;
          }

          h1, nav, a {
            z-index: 1000;
          }

          .animated {
            font-weight: 700;
            color: #fff;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            text-shadow: 0 0 0.15em ${this.styles.colors.getPalette().primaryColor};
            user-select: none;
            filter: blur(0.007em);
            animation: shake 5s linear forwards infinite;
            margin: 0;
            cursor: pointer;
          }

          ${this.styles.animations.shake}
        </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <header>
        <h1 class="animated"><a href="/">omarefg</a></h1>
        ${this.showNavLinks ? `
          <nav>
            <of-link href="/about"><template>About</template></of-link>
            <of-link href="/projects"><template>Projects</template></of-link>
            <of-link href="/blog"><template>Blog</template></of-link>
          </nav>
        ` : ''}
      </header>
    `
  }
}

customElements.define('of-header', Header)
