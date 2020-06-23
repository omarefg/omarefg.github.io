interface palette {
  backgroundColor: string,
  sideBarBackgroundColor: string,
  textColor: string
}

export function getPalette ():palette {
  const colorMode = localStorage.getItem('colorMode')
  let backgroundColor = '#f7f7f7'
  let sideBarBackgroundColor = '#eee'
  let textColor = '#323330'

  if (colorMode === 'dark') {
    backgroundColor = '#323330'
    sideBarBackgroundColor = '#444'
    textColor = '#f7f7f7'
  }

  return {
    backgroundColor,
    sideBarBackgroundColor,
    textColor
  }
}
