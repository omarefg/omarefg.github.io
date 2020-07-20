import { Palette, Theme } from '../schemas/interfaces'
import { colorMode } from '../schemas/types'

export function getColorMode ():colorMode {
  return 'dark'
}

const themes:Theme = {
  light: {
    background: '#fff',
    text: '#111'
  },
  dark: {
    background: '#111',
    text: '#fff'
  }
}

export function getPalette ():Palette {
  return {
    ...themes[getColorMode()]
  }
}
