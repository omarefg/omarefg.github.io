import { Palette, Theme } from '../schemas/interfaces'
import { colorMode } from '../schemas/types'

export function getColorMode ():colorMode {
  return 'dark'
}

const themes:Theme = {
  light: {
    background: '#fff',
    text: '#111',
    primaryColor: '#ddd60f'
  },
  dark: {
    background: '#111',
    text: '#fff',
    primaryColor: '#8a0303'
  }
}

export function getPalette ():Palette {
  return {
    ...themes[getColorMode()]
  }
}
