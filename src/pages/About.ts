import echarts from 'echarts'
import Element from '../Element'
import { AboutDescriptionInterface } from '../schemas/interfaces.ts'

import '../components/organisms/Header'
import '../components/atoms/Link'
import '../components/atoms/AboutDescription'

const descriptions: AboutDescriptionInterface[] = [
  {
    titleText: 'DevOps',
    top: '',
    bottom: '',
    left: '',
    right: ''
  },
  {
    titleText: 'Frontend',
    top: '',
    bottom: '',
    left: '',
    right: ''
  },
  {
    titleText: 'Backend',
    top: '',
    bottom: '',
    left: '',
    right: ''
  },
  {
    titleText: 'Software',
    top: '',
    bottom: '',
    left: '',
    right: ''
  },
  {
    titleText: 'Automation',
    top: '',
    bottom: '',
    left: '',
    right: ''
  }
]

class About extends Element {
  videoPlaybackRate: number

  constructor () {
    super()
    this.videoPlaybackRate = 0.2
    this.render()
    this.setVideoPlaybackRate()
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
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
          }

          .section-skills {
          }

          canvas {
            width: 600px;
            z-index: 1;
          }
        </style>
    `
  }

  setVideoPlaybackRate ():void {
    const video = this.shadowRoot?.querySelector('video') as HTMLVideoElement
    video.playbackRate = this.videoPlaybackRate
  }

  getDescriptions (description: AboutDescriptionInterface):string {
    return `
      <about-description
        top="${description.top}"
        left="${description.left}"
        bottom="${description.bottom}"
        right="${description.right}"
      >
        <template>${description.titleText}</template>
      </about-description>
    `
  }

  connectedCallback () {
    // this.utils.api.apiCall({
    //   url: 'https://api.omarefg.com/api/stats'
    // })
    //   .then(res => {
    //     // @ts-ignore
    //     const myChart = echarts.init(this.shadowRoot?.getElementById('myChart'))
    //     var option = {
    //       xAxis: {
    //         type: 'category',
    //         // @ts-ignore
    //         data: res.codingActivityStats.map(cs => cs.range.date)
    //       },
    //       yAxis: {
    //         type: 'value'
    //       },
    //       series: [{
    //         // @ts-ignore
    //         data: res.codingActivityStats.map(cs => cs.grand_total.total_seconds / 60 / 60),
    //         type: 'line',
    //         smooth: true
    //       }]
    //     }
    //     // @ts-ignore
    //     myChart.setOption(option)
    //     console.log(res)
    //   })
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <main>
        <of-header></of-header>
        <section class="section-description">
          <h1>Omar Flores</h1>
          ${descriptions.map(this.getDescriptions.bind(this)).join('')}
        </section>
        <section class="section-skills">
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
