import Element from '../Element'

import '../components/organisms/Header'
import '../components/organisms/Slider'

const banners = [
  {
    image: require('../assets/banner1.jpg'),
    title: 'Escribimos para recordar que estamos vivos',
    subtitle: 'Mira mi blog',
    path: '/blog'
  },
  {
    image: require('../assets/banner2.jpg'),
    title: 'Trabajamos para vivir, trabajar nos da un propósito',
    subtitle: 'Mira mi portafolio',
    path: '/projects'
  },
  {
    image: require('../assets/banner3.jpg'),
    title: '¿Quién eres?',
    subtitle: 'Sobre mi',
    path: '/about'
  }
]

class Home extends Element {
  constructor () {
    super()
    this.render()
  }

  getStyles ():string {
    return `
        <style>
          :host {
            width: 100%;
          }
        </style>
    `
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <main>
        <of-header></of-header>
        <of-slider>
          <template>${JSON.stringify(banners)}</template>
        <of-slider/>
      </main>
    `
  }
}

customElements.define('of-home', Home)
