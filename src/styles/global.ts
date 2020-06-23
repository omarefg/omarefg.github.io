import {
  fontSizeH1,
  fontSizeH2,
  fontSizeH3,
  fontWeightBold,
  fontWeightRegular,
  fontFamilyBase,
  fontSizeBase
} from './typography'

export const globalStyles:string = `
  body, input, select, textarea {
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase};
    font-weight: ${fontWeightRegular};
    margin: 0;
    padding: 0;
    line-height: 1.65;
  }

  h1 {
    font-size: ${fontSizeH1};
    font-weight: ${fontWeightBold};
    line-height: 1.3;
  }

  h2 {
    font-size: ${fontSizeH2};
    font-weight: ${fontWeightBold};
    line-height: 1.5;
  }

  h3 {
    font-size: ${fontSizeH3};
    font-weight: ${fontWeightBold};
    line-height: 1.5;
  }
`
