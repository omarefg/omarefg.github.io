import echarts from 'echarts'
import OfElement from '../Element'

import '../components/Header'
import '../components/Link'
import '../components/AboutDescription'

const descriptions: string[] = [
  'Server Side Rendering',
  'Web Components',
  'React Native',
  '',
  'JavaScript',
  'Frontend',
  'Software',
  'Backend',
  'DevOps',
  'Node',
  'Docker',
  'React',
  'Linux',
  'Redux',
  'GraphQL',
  '',
  '',
  'HTML',
  'CSS',
  'PWA',
  'React Router',
  'Svelte',
  'Sapper',
  'SQL',
  'Express',
  'NoSQL',
  '',
  '',
  'Android',
  'iOS',
  'AWS',
  '',
  '',
  '',
  'Firebase',
  'SASS',
  'Next',
  '',
  '',
  'CI/CD',
  'UI/UX',
  'Vue'
]

class About extends OfElement {
  videoPlaybackRate: number;
  chartsObserver: IntersectionObserver
  chartsObserverOptions: IntersectionObserverInit

  constructor () {
    super()
    this.videoPlaybackRate = 0.2
    this.render()
    this.setVideoPlaybackRate()
    this.chartsObserverOptions = { threshold: 0.2 }
    this.chartsObserver = new IntersectionObserver(this.observerCallback, this.chartsObserverOptions)
  }

  getStyles ():string {
    return `
        <style>
          ${this.styles.global.globalStyles}

          :host {
            width: 100%;
          }

          section {
            display: flex;
          }

          h1, h2, h3, figure, embed, div, form, textarea, input {
            z-index: 100;
          }

          video {
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            filter: brightness(0.2) blur(3px);
          }

          .section-description {
            height: calc(100vh - 64px);
            position: relative;
            display: grid;
            grid-template-rows: repeat(6, auto);
            grid-template-columns: repeat(6, auto);
          }

          .section-skills {
            flex-direction: column;
          }

          canvas {
            width: 600px;
            z-index: 1;
          }

          #editors-stats {
            height: 400px;
            background-color: red;
          }
        </style>
    `
  }

  setVideoPlaybackRate ():void {
    const video = this.shadowRoot?.querySelector('video') as HTMLVideoElement
    video.playbackRate = this.videoPlaybackRate
  }

  getDescriptions (description: string):string {
    return `
      <about-description>
        <template>${description}</template>
      </about-description>
    `
  }

  addAnimationsToDescriptions (event: MouseEvent): void {
    const section = event.currentTarget as HTMLElement
    const { pageX, pageY } = event
    const { offsetTop, offsetLeft, clientWidth, clientHeight } = section
    const relX = pageX - offsetLeft
    const relY = pageY - offsetTop
    section.querySelectorAll('about-description').forEach(description => {
      const title = description.shadowRoot?.querySelector('.visible') as HTMLElement
      if (title?.innerText) {
        this.utils.gsap.parallaxIt({
          element: title,
          relX,
          relY,
          clientHeight,
          clientWidth,
          movement: this.utils.number.getRandomInt(-100, -50),
          transition: this.utils.number.getRandomFloat(0, 1.5)
        })
      }
    })
  }

  observerCallback (entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      console.log(entry)
    })
  }

  connectedCallback (): void {
    const descriptionSection = this.shadowRoot?.querySelector('.section-description') as HTMLElement
    descriptionSection.addEventListener('mousemove', this.addAnimationsToDescriptions.bind(this))
    // const editorsStat = this.shadowRoot?.querySelector('#editors-stats') as HTMLElement
    // this.chartsObserver.observe(editorsStat)
    this.utils.api.apiCall({
      url: `${this.utils.api.apiUrl}${this.utils.api.statsEndpoint}`
    })
      .then(stats => {
        console.log(stats)
      })
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <main>
        <of-header></of-header>
        <section class="section-description">
          ${this.utils.number.shuffleArray(descriptions).map(this.getDescriptions.bind(this)).join('')}
        </section>
        <section class="section-skills">
          <div id="editors-stats"></div>
          <div id="myChart" style="display: block; width: 1200px; height: 400px;"></div>
          <div>
            <hi>Skills</h1>
            <h3>aja. blabla bla</h3>
          </div>
        </section>
        <section>
          <form>
            <input/>
            <input/>
            <textarea></textarea>
          </form>
        </section>
        <video autoplay muted loop playback>
          <source src=${require('../assets/video1.mp4')} type="video/mp4">
        </video>
      </main>
    `
  }
}

customElements.define('of-about', About)
