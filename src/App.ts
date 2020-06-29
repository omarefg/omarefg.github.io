import Element from './Element'
import './pages/Home'
import './pages/NotFound'
import './pages/Posts'
import './pages/Post'
import './pages/Projects'
import './components/organisms/SideBar'
import { Posts } from './schemas/interfaces'

class App extends Element {
  constructor () {
    super()
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          #root {
            display: flex;
            min-height: 100vh;
            background-color: ${this.styles.colors.getPalette().backgroundColor};
            color: ${this.styles.colors.getPalette().textColor};
          }
        </style>
    `
  }

  getSection ():string {
    const route:string = this.utils.router.getRoute()
    switch (route) {
      case '/':
        return '<of-home></of-home>'
      case '/posts':
        return '<of-posts></of-posts>'
      case `/posts/${this.utils.router.postRoutes[route.split('/')[2]]}`:
        return '<of-post></of-post>'
      case '/projects':
        return '<of-projects></of-projects>'
      default:
        return '<not-found></not-found>'
    }
  }

  getTemplate ():string {
    return `
      <div id="root">
        ${this.getStyles()}
        <side-bar></side-bar>
        ${this.getSection()}
      </div>
    `
  }

  initRootEvents ():void {
    const root = this.shadowRoot?.querySelector('#root')
    root?.addEventListener('color-mode', () => this.update())
    root?.addEventListener('lang-mode', () => this.update())
  }

  connectedCallback ():void {
    this.initRootEvents()
  }
}

customElements.define('of-app', App)

export default App
