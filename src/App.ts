import Element from './Element'
import './pages/Home'
import './pages/About'
import './pages/NotFound'
import './pages/Blog'
import './pages/Post'
import './pages/Projects'

class App extends Element {
  constructor () {
    super()
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          ${this.styles.global.globalStyles}
          #root {
            display: flex;
            min-height: 100vh;
            background-color: ${this.styles.colors.getPalette().background};
            color: ${this.styles.colors.getPalette().text};
          }
        </style>
    `
  }

  getSection ():string {
    const route:string = this.utils.router.getRoute()
    switch (route) {
      case '/':
        return '<of-home></of-home>'
      case '/blog':
        return '<of-blog></of-blog>'
      case `/posts/${this.utils.router.postRoutes[route.split('/')[2]]}`:
        return '<of-post></of-post>'
      case '/projects':
        return '<of-projects></of-projects>'
      case '/about':
        return '<of-about></of-about>'
      default:
        return '<not-found></not-found>'
    }
  }

  getTemplate ():string {
    return `
      <div id="root">
        ${this.getStyles()}
        ${this.getSection()}
      </div>
    `
  }
}

customElements.define('of-app', App)

export default App
