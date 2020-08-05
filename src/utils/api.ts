import { RoboHashUrlConfig, APICallConfig } from '../schemas/interfaces'
import $ from 'jquery'

export function getRoboHashUrl (config?:RoboHashUrlConfig):string {
  const configuration = config || {}
  const innerWord = configuration.word || 'omarefg'
  const innerSet = configuration.set || 'set1'
  const innerSize = configuration.size || '200'
  const innerBgset = configuration.bgset || ''

  return `https://robohash.org/${innerWord}.png?set=${innerSet}&size=${innerSize}x${innerSize}&bgset=${innerBgset}`
}

export function apiCall (config: APICallConfig): Promise<Response> {
  const options = {
    method: config.method || 'GET',
    headers: config.headers || new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080/about'
    }),
    mode: config.mode || 'cors'
  }
  return fetch(config.url, options)
}

// export function getLanguagesStats (): Promise<Response> {
//   return apiCall({
//     url: 'https://wakatime.com/share/@omarefg/3a2946ce-c9b5-4803-948a-90d4d24dc7e8.json'
//   })
// }

declare global {
  interface Window { myJsonpCallback: any; }
}

export function getLanguagesStats (): Promise<Response> {
  window.myJsonpCallback = function (response: any, status: any) {
    console.log(response, status, 'ajaaa')
    document.body.removeChild(scriptEl)
  }

  var scriptEl = document.createElement('script')
  scriptEl.setAttribute('src',
    'https://wakatime.com/share/@omarefg/c1116e11-9b41-4567-a69f-2ecd91c98532.json?callback=myJsonpCallback')
  document.body.appendChild(scriptEl)

  // $.ajax({
  //   type: 'GET',
  //   url: 'https://wakatime.com/share/@omarefg/c1116e11-9b41-4567-a69f-2ecd91c98532.json',
  //   dataType: 'jsonp',
  //   success: function (response: any) {
  //     console.log(response.data)
  //   }
  // })

  return fetch('https://wakatime.com/share/@omarefg/422d8f8b-6135-4023-91b8-9256f984c02b.json', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,es-CO;q=0.8,es;q=0.7',
      'sec-fetch-dest': 'script',
      'sec-fetch-mode': 'no-cors',
      'sec-fetch-site': 'cross-site',
      cookie: '_ga=GA1.2.1539137236.1594576932; remember_token=591fd214-e2ff-498f-938b-30da3c31da1a|d82d6e9a7e424ebfb4c1ecd2d7600d937e8c80b9ef129c9e1f25afa43905ec765abdb00c402cce3af64de833a50c30d5598ac16c308df46fe4a290b4560de791; _gid=GA1.2.33602316.1596546645; github_csrf_token=bd5c78b2ca150d17caa06575cb043ca7; gitlab_csrf_token=84dbe6e8c7fd89a58b52f0761ffbe41f; bitbucket_csrf_token=dc152a9fef2fe83efe23a48608b7db19; slack_csrf_token=88f27ece18c324f0f63eb8fe6e53a2d3; office365_csrf_token=6ff04181c80ec94fe28777bf657976a4; csrftoken=98637b1575e4ec3d893679c53b45c3529d91d4cbd27db024c47e85bbff8051b7'
    },
    referrer: 'http://localhost:8080/about',
    referrerPolicy: 'no-referrer-when-downgrade',
    body: null,
    method: 'GET',
    mode: 'cors'
  })
}
