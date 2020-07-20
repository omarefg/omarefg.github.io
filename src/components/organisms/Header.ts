import Element from '../../Element'

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
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
          </nav>
        ` : ''}
      </header>
    `
  }
}

customElements.define('of-header', Header)
