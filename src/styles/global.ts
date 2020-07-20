import {
  fontSizeH1,
  fontSizeH2,
  fontSizeH3,
  fontWeightBold,
  fontWeightRegular,
  fontFamilyBase,
  fontSizeBase
} from './typography'

import { getPalette } from './colors'

export const globalStyles:string = `
  *::selection {
    color: ${getPalette().background};
    background: ${getPalette().text}
  }

  body, input, select, textarea {
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase};
    font-weight: ${fontWeightRegular};
    margin: 0;
    padding: 0;
    line-height: 1.65;
  }

  body {
    background-color: ${getPalette().background}
  }

  h1 {
    font-size: ${fontSizeH1};
    font-weight: ${fontWeightBold};
    line-height: .88em;
    margin: 0;
    text-transform: uppercase;
  }

  h2 {
    font-size: ${fontSizeH2};
    font-weight: ${fontWeightBold};
    line-height: 1.5;
    margin: 0;
  }

  h3 {
    font-size: ${fontSizeH3};
    font-weight: ${fontWeightBold};
    line-height: 1.5;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
