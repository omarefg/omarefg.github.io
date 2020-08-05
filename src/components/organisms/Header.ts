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
          }

          h1, nav, a {
            z-index: 1000;
          }
        </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <header>
        <h1><a href="/">omarefg</a></h1>
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
