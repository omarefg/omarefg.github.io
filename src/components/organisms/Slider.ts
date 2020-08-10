import OFElement from '../../Element'
import '../atoms/Link'

interface Image {
  image: string,
  title: string,
  subtitle: string,
  path: string
}

class Slider extends OFElement {
  images: Image[]
  imagesAttribute: string
  classes: string[]

  constructor () {
    super()
    this.imagesAttribute = this.children[0]?.innerHTML || ''
    this.images = this.imagesAttribute ? JSON.parse(this.imagesAttribute) : []
    this.classes = ['is-active', 'is-coming', 'is-hide']
    this.render()
    this.addEventToImages()
  }

  getStyles ():string {
    return `
        <style>
          ${this.styles.global.globalStyles}

          h1 {
            font-size: 50px;
            margin: 20px 0 12px 0;
            text-shadow: 0 0 5px ${this.styles.colors.getPalette().background};
          }

          .slider-image {
            position: absolute;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            align-items: flex-start;
          }

          .is-active {
            right: 0;
            width: 100vw;
            transition: .3s;
            transition-timing-function: ease-in;
          }

          .is-coming {
            right: 0;
            width: 10vw;
            z-index: 100;
            border-left: 3px solid white;
            cursor: pointer;
            transition: .3s;
            transition-timing-function: ease-in;
          }

          .is-coming:hover {
            width: 15vw;
          }

          .is-hide {
            width: 0;
            transition: .3s;
            transition-timing-function: ease-in;
            opacity: 0;
          }

          .loader-bar-container {
            position: absolute;
            bottom: 16px;
            left: 16px;
            display: flex;
            justify-content: space-between;
          }

          .loader-bar {
            width: 25vw;
            max-width: 200px;
            margin-right: 8px;
            background-color: gray;
            border-radius: 32px;
            overflow: hidden;
          }

          .loader-bar div {
            height: 5px;
            background-color: ${this.styles.colors.getPalette().primaryColor};
          }

          .is-empty {
            width: 0;
          }

          .is-filled {
            width: 100%;
            transition: .3s;
          }

          .text-container {
            width: 600px;
            padding: 32px;
          }

          .btn {
            transition: transform .2s cubic-bezier(.86, 0, .07, 1);
            letter-spacing: .12em;
            outline: 0;
            font-family: Rajdhani,sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            box-sizing: border-box;
            position: relative;
            width: auto;
            margin: 0;
            line-height: 2em;
            padding: 9px 51px;
          }

          .btn:hover {
            color: ${this.styles.colors.getPalette().primaryColor}!important;
          }

          .btn:hover .item-sec {
            clip-path: inset(50% 0 0 0);
            transform: translateY(3%);
            opacity: 1;
            transition: clip-path .2s,transform .2s cubic-bezier(.86,0,.07,1);
          }

          .btn:hover .item-prim {
            clip-path: inset(0 0 50% 0);
            transform: translateX(-3%) translateY(-3%);
            transition: clip-path .2s,transform .2s cubic-bezier(.86,0,.07,1);
          }

          .item-prim {
            color: inherit;
          }

          .item-sec {
            position: absolute!important;
            bottom: 5px;
            left: 52px;
            opacity: 0;
          }
        </style>
    `
  }

  getImageDiv (image: Image, index: number): string {
    const styles = `
      background: url(${image.image});
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: bottom;
    `
    const className = this.classes[index]
    return `
        <div
          class="slider-image ${className}"
          style="${styles}"
          id="slider-image-${index}"
        >
          <div class="text-container">
            <h1>${image.title}</h1>
            <of-link href="${image.path}">
              <template>${image.subtitle}</template>
            </of-link>
          </div>
        </div>
        `
  }

  getLoaderBar (_image: Image, index: number): string {
    return `
      <div class="loader-bar">
        <div
          class="${index === 0 ? 'is-filled' : 'is-empty'}"
          id="loader-bar-${index}"
        >
        </div>
      </div>
    `
  }

  setLoaderBars (id: number): void {
    const loaderBars = this.shadowRoot?.querySelectorAll('.loader-bar')
    loaderBars?.forEach(loaderBar => {
      const child = loaderBar.childNodes[1] as HTMLDivElement
      const loaderBarId = Number(child?.id.replace('loader-bar-', ''))
      child.classList.remove('is-filled')
      child.classList.add('is-empty')
      if (loaderBarId <= id) {
        child.classList.add('is-filled')
        child.classList.remove('is-empty')
      } else {
        child.classList.add('is-empty')
        child.classList.remove('is-filled')
      }
    })
  }

  addEventToImages ():void {
    const images = this.shadowRoot?.querySelectorAll('.slider-image')
    images?.forEach(image => {
      image.addEventListener('click', (event) => {
        const target = event.currentTarget as HTMLDivElement
        if (!target.classList.contains('is-active')) {
          const id = Number(target.id.replace('slider-image-', ''))
          const totalImages = images.length - 1
          const leftId = id === 0 ? totalImages : id - 1
          const rightId = id === totalImages ? 0 : id + 1
          const left = this.shadowRoot?.querySelector(`#slider-image-${leftId}`) || new Element()
          const right = this.shadowRoot?.querySelector(`#slider-image-${rightId}`)
          target.classList.remove('is-coming')
          left?.classList.remove('is-active')
          target.classList.add('is-active')
          left?.classList.add('is-hide')
          this.setLoaderBars(id)
          setTimeout(() => {
            right?.classList.remove('is-hide')
            right?.classList.add('is-coming')
          }, 100)
        }
      })
    })
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      ${this.images && this.images.map(this.getImageDiv.bind(this)).join('')}
      <div class="loader-bar-container">
        ${this.images && this.images.map(this.getLoaderBar.bind(this)).join('')}
      </div>
    `
  }
}

customElements.define('of-slider', Slider)
