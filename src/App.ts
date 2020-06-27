import './components/pages/Home'
import './components/pages/NotFound'
import './components/organisms/SideBar'
import { getRoute } from './utils/router'
import { getPalette } from './styles/colors'

class App extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          #root {
            display: flex;
            min-height: 100vh;
            background-color: ${getPalette().backgroundColor};
            color: ${getPalette().textColor};
          }
        </style>
    `
  }

  getSection ():string {
    const route:string = getRoute()
    switch (route) {
      case '/':
        return '<of-home></of-home>'
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
  }

  connectedCallback ():void {
    this.initRootEvents()
  }

  render ():void {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = this.getTemplate()
    }
  }

  update ():void {
    this.render()
    this.connectedCallback()
  }
}

customElements.define('of-app', App)

export default App
