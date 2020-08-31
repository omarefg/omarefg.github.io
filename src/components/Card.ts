import Element from '../Element'
import { getBooleanFromStr } from '../utils/attribute'
import './Button'

class Card extends Element {
  isTop: boolean
  description: string
  articleLink: string
  content: string
  src: string

  constructor () {
    super()
    this.isTop = getBooleanFromStr(this.getAttribute('is-top') || 'false')
    this.description = this.getAttribute('description') || ''
    this.articleLink = this.getAttribute('articleLink') || ''
    this.content = this.getAttribute('content') || ''
    this.src = this.getAttribute('src') || ''
    this.render()
  }

  getContainerClass ():string {
    if (this.isTop) {
      return 'container is-top'
    }
    return 'container'
  }

  getStyles ():string {
    return `
      <style>
        .container {
          display: flex;
          flex-direction: column-reverse;
        }

        .image-link {
          width: 50%;
          display: flex;
        }

        .details {
          width: 100%;
        }

        .details a {
          text-align: center;
        }

        img {
          flex: 1;
          width: 100%;
          object-fit: cover;
          margin-bottom: ${this.styles.spacing.getSpacing(2)};
        }

        h1 {
          margin: 0;
        }

        h3 {
          margin: 0;
        }

        .is-top {
          flex-direction: row;
          width: 100%;

        }

        .is-top .image-link {
          flex-grow: 0;
          flex-shrink: 0;
          display: block;
          margin: 0 0 2em 4em;
        }

        .is-top .details {
          width: 50%;
          flex-grow: 1;
          flex-shrink: 1;
          margin: 0 auto;
        }

        .is-top .details a {
          text-align: left;
        }

        .is-top img {
          margin: 0;
          height: 100%;
        }
      </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <article class="${this.getContainerClass()}">
        <div class="details">
          ${this.isTop ? `<h1>${this.title}</h1>` : ''}
          ${!this.isTop ? `<h3>${this.title}</h3>` : ''}
          <p>${this.description}</p>
          ${this.isTop ? `<p>${this.content.slice(0, 200)}</p>` : ''}
          <a href="${this.articleLink}">
            <of-button><span slot="content">Full story</span></of-button>
          </a>
        </div>
        <a class="image-link" href="${this.articleLink}">
          <img src="${this.src}"/>
        </a>
      </article>
    `
  }
}

customElements.define('of-card', Card)
