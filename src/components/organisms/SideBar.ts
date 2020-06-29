import Element from '../../Element'
import { language } from '../../schemas/types'
import { Posts } from '../../schemas/interfaces'

import '../icons/Logo'
import '../icons/Moon'
import '../icons/Sun'

class SideBar extends Element {
  hideBar: boolean

  constructor () {
    super()
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
            background-color: ${this.styles.colors.getPalette().sideBarBackgroundColor};
          }

          .is-hide {
            margin-left: -280px;
          }

          .is-rotated {
            transform: rotate(60deg);
          }

          .side-bar-handler {
            position: fixed;
            top: ${this.styles.spacing.getSpacing(2)};
            left: ${this.styles.spacing.getSpacing(2)};
            background-color: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            transition: .5s;
          }

          .is-sticky {
            position: sticky;
            top: ${this.styles.spacing.getSpacing(3)};
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
            fill: ${this.styles.colors.getPalette().textColor};
          }

          .logo {
            fill: ${this.styles.colors.getPalette().textColor};
          }

          ul {
            list-style: none;
            padding: 0 ${this.styles.spacing.getSpacing(3)};
            color: ${this.styles.colors.getPalette().textColor};
          }

          li, summary {
            padding: ${this.styles.spacing.getSpacing(0.5)};
            margin: ${this.styles.spacing.getSpacing(0.5)} 0;
            outline: none;
            user-select: none;
          }

          details li {
            padding-left: ${this.styles.spacing.getSpacing(3)};
          }

          .level-2 {
            padding-left: ${this.styles.spacing.getSpacing(2)}
          }

          a {
            color: ${this.styles.colors.getPalette().textColor};
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
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

  setLanguage (lang: language):void {
    const lastLanguage = localStorage.getItem('lang')
    if (lastLanguage !== lang) {
      localStorage.setItem('lang', lang)
      this.dispatchEvent(new CustomEvent('lang-mode', {
        bubbles: true
      }))
    }
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

  getLastPosts () {
    return (Object.keys(this.getData().posts) as (keyof Posts)[])
      .map((title: keyof Posts) => {
        const post = this.getData().posts[title]
        return `<li class="level-2">
            <a target="${post.target}" href="${post.path}">${post.title}</a>
          </li>`
      }).slice(0, 10).join('')
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
                <li><a href="/">${this.getData().sidebar.home}</a></li>
                <li><a href="/posts">Posts</a></li>
                ${this.getLastPosts()}
                <li><a href="/projects">${this.getData().sidebar.projects}</a></li>
                <details id="lang-list">
                  <summary>${this.getData().sidebar.language}</summary>
                  <li data-lang="en">${this.getData().sidebar.english}</li>
                  <li data-lang="es">${this.getData().sidebar.spanish}</li>
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

  initLanguagesEvent ():void {
    const langList = this.shadowRoot?.getElementById('lang-list')
    const items = langList?.querySelectorAll('li')
    items?.forEach(item => {
      item.addEventListener('click', () => {
        this.setLanguage(this.utils.attribute.getLanguageFromStr(item.dataset.lang || ''))
      })
    })
  }

  connectedCallback ():void {
    this.initToggleSideBarButtonEvent()
    this.initColorModeButtonEvent()
    this.initLanguagesEvent()
  }
}

customElements.define('side-bar', SideBar)
