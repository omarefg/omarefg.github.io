interface palette {
  backgroundColor: string,
  sideBarBackgroundColor: string,
  textColor: string
}
interface theme {
  light: palette,
  dark: palette
}
type mode = 'dark' | 'light'

function getMode ():mode {
  if (localStorage.getItem('colorMode') === 'dark') {
    return 'dark'
  }
  return 'light'
}

const themes:theme = {
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

export function getPalette ():palette {
  return {
    ...themes[getMode()]
  }
}
