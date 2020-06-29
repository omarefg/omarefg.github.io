import styles from './styles/index'
import utils from './utils/index'
import { Styles, Utils, DB } from './schemas/interfaces'
import getData from './db/index'

class Element extends HTMLElement {
  styles: Styles;
  utils: Utils;

  constructor () {
    super()
    this.styles = styles
    this.utils = utils
    this.attachShadow({ mode: 'open' })
  }

  getData ():DB {
    return getData()
  }

  getTemplate (): string {
    return ''
  }

  connectedCallback () {

  }

  update ():void {
    this.render()
    this.connectedCallback()
  }

  render () {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = this.getTemplate()
    }
  }
}

export default Element
