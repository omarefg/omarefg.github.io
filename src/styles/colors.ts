import { Palette, Theme } from '../schemas/interfaces'
import { colorMode } from '../schemas/types'

export function getColorMode ():colorMode {
  if (localStorage.getItem('colorMode') === 'light') {
    return 'light'
  }
  return 'dark'
}

const themes:Theme = {
  light: {
    backgroundColor: '#f7f7f7',
    sideBarBackgroundColor: '#eee',
    textColor: '#323330'
  },
  dark: {
    backgroundColor: '#323330',
    sideBarBackgroundColor: '#444',
    textColor: '#f7f7f7'
  }
}

export function getPalette ():Palette {
  return {
    ...themes[getColorMode()]
  }
}
