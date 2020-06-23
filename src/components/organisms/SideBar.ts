import '../icons/Logo'
import '../icons/Moon'
import '../icons/Sun'
import { getPalette } from '../../styles/colors'
import { getSpacing } from '../../styles/spacing'

class SideBar extends HTMLElement {
  hideBar: boolean

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.hideBar = false
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          .container {
            height: 100%;
          }

          .sidebar {
            width: 280px;
            position: relative;
            transition: .5s;
            height: 100%;
            background-color: ${getPalette().sideBarBackgroundColor};
          }

          .is-hide {
            margin-left: -280px;
          }

          .is-rotated {
            transform: rotate(180deg);
          }

          .side-bar-handler {
            position: fixed;
            top: ${getSpacing(2)};
            left: ${getSpacing(2)};
            background-color: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            transition: .5s;
          }

          .is-sticky {
            position: sticky;
            top: ${getSpacing(3)};
          }

          .color-icons-container {
            display: flex;
            justify-content: flex-end;
            padding: 0 16px;
          }

          .color-mode-button {
            border: none;
            display: flex;
            position: relative;
            align-items: center;
            overflow: hidden;
            width: 2.5em;
            height: 2.5em;
            cursor: pointer;
            outline: none;
            background: transparent;
          }

          .color-mode-out {
            position: absolute;
            right: 3em;
            opacity: 0;
            transition: 0.5s;
          }

          .color-mode-in {
            right: .25em;
            opacity: 1;
            transition: 0.5s;
            fill: ${getPalette().textColor};
          }

          .logo {
            fill: ${getPalette().textColor};
          }

          ul {
            list-style: none;
            padding: 0 ${getSpacing()};
            color: ${getPalette().textColor};
          }

          li, summary {
            padding: ${getSpacing()};
            margin: ${getSpacing()} 0;
            outline: none;
            user-select: none;
            cursor: pointer;
            border-bottom: 1px solid ${getPalette().textColor};
          }

          details ul {
            padding: 0 0 0 ${getSpacing()};
          }
        </style>
    `
  }

  toggleSideBar ():void {
    this.hideBar = !this.hideBar
    this.handleSideBarClass()
    this.handleToggleButtonClass()
  }

  toogleColorMode ():void {
    const colorMode = localStorage.getItem('colorMode') === 'light' ? 'dark' : 'light'
    localStorage.setItem('colorMode', colorMode)
    this.dispatchEvent(new CustomEvent('color-mode', {
      bubbles: true
    }))
  }

  handleSideBarClass ():void {
    const sideBar = this.shadowRoot?.querySelector('#sidebar')
    if (!this.hideBar) {
      sideBar?.classList.remove('is-hide')
    } else {
      sideBar?.classList.add('is-hide')
    }
  }

  handleToggleButtonClass ():void {
    const toggleButton = this.shadowRoot?.querySelector('.side-bar-handler')
    if (this.hideBar) {
      toggleButton?.classList.remove('is-rotated')
    } else {
      toggleButton?.classList.add('is-rotated')
    }
  }

  getInitialColorModeClass (type:string):string {
    if (localStorage.getItem('colorMode') === type) {
      return 'color-mode-out color-mode-in'
    }

    return 'color-mode-out'
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <div id="sidebar" class="sidebar">
        <div class="sidebar">
          <div class="is-sticky">
            <div class="color-icons-container">
              <button class="color-mode-button">
                <moon-icon
                  size="1.5em"
                  class="${this.getInitialColorModeClass('dark')}"
                ></moon-icon>
                <sun-icon
                  size="1.5em"
                  class="${this.getInitialColorModeClass('light')}"
                ></sun-icon>
              </button>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projets</li>
                <li>Contact</li>
                <details>
                  <summary>Language</summary>
                  <ul>
                    <li>English</li>
                    <li>Spanish</li>
                  </ul>
                </details>
              </ul>
            </div>
          </div>
        </div>
        <button class="side-bar-handler is-rotated">
          <logo-icon class="logo"></logo-icon>
        </button>
      </div>
    `
  }

  initColorModeButtonEvent ():void {
    const colorModeHandler = this.shadowRoot?.querySelector('.color-mode-button')
    colorModeHandler?.addEventListener('click', () => this.toogleColorMode())
  }

  initToggleSideBarButtonEvent ():void {
    const sideBarHandler = this.shadowRoot?.querySelector('.side-bar-handler')
    sideBarHandler?.addEventListener('click', () => this.toggleSideBar())
  }

  connectedCallback ():void {
    this.initToggleSideBarButtonEvent()
    this.initColorModeButtonEvent()
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

customElements.define('side-bar', SideBar)
