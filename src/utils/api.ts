import { RoboHashUrlConfig } from '../schemas/interfaces'

export function getRoboHashUrl (config?:RoboHashUrlConfig):string {
  const configuration = config || {}
  const innerWord = configuration.word || 'omarefg'
  const innerSet = configuration.set || 'set1'
  const innerSize = configuration.size || '200'
  const innerBgset = configuration.bgset || ''

  return `https://robohash.org/${innerWord}.png?set=${innerSet}&size=${innerSize}x${innerSize}&bgset=${innerBgset}`
}
