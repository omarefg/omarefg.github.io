import { language } from '../schemas/types'

export function getBooleanFromStr (str: string):boolean {
  if (str === 'true') {
    return true
  }

  return false
}

export function getLanguageFromStr (str: string):language {
  switch (str) {
    case 'es': return 'es'
    default: return 'en'
  }
}
