import { RoboHashUrlConfig, APICallConfig } from '../schemas/interfaces'

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
      'Content-Type': 'application/json'
    }),
    mode: config.mode || 'cors'
  }
  return fetch(config.url, options)
    .then(res => res.json())
    .then(({ body }) => body)
    .catch(error => { throw error })
}
