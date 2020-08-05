import Element from '../Element'
import { LanguageStats } from '../schemas/interfaces'

import '../components/organisms/Header'

class About extends Element {
  videoPlaybackRate: number
  stats:LanguageStats

  constructor () {
    super()
    this.stats = { data: [] }
    this.videoPlaybackRate = 0.2
    this.render()
    this.setVideoPlaybackRate()
  }

  getStyles ():string {
    return `
        <style>
          :host {
            width: 100%;
          }

          section {
            display: flex;
          }

          h1, h3, figure, embed, div, form, textarea, input {
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
          }

          .section-skills {
          }

          embed {
            width: 600px;
          }

        </style>
    `
  }

  setVideoPlaybackRate ():void {
    const video = this.shadowRoot?.querySelector('video') as HTMLVideoElement
    video.playbackRate = this.videoPlaybackRate
  }

  connectedCallback () {
    this.utils.api.getLanguagesStats()
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  getTemplate ():string {
    return `
      ${this.getStyles()}
      <main>
        <of-header></of-header>
        <section class="section-description">
          <h1>I have seen things, blablablaa</h1>
        </section>
        <section class="section-skills">
          <figure>
            <embed src="https://wakatime.com/share/@omarefg/6d91ba27-051a-42da-bb6f-adfcf791ecdf.svg"></embed>
          </figure>
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
