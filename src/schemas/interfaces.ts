import { colorMode, language } from './types'

export interface Sidebar {
  home: string;
  contact: string;
  language: string;
  english: string;
  spanish: string;
  about: string;
  projects: string;
}

export interface Post {
  title: string;
  date: string;
  content?: string;
  path: string;
  src: string;
  target?: string;
}

export interface InnerPost {
  en: Post;
  es: Post;
}

export interface Posts {
  'why-should-everyone-have-a-website': Post;
  'access-dom-elements-using-refs-in-vue': Post;
  'document-your-api-with-postman': Post;
}

export interface DB {
  posts: Posts;
}

export interface Languages {
  en: DB;
  es: DB;
}

export interface Palette {
  background: string;
  text: string;
}

export interface Theme {
  light: Palette;
  dark: Palette;
}

export interface Breakpoints {
  extraSmall: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface Colors {
  getPalette(): Palette;
  getColorMode(): colorMode;
}

export interface GlobalStyles {
  globalStyles: string;
}

export interface Spacing {
  getSpacing(times?:number): string;
  getBorderRadius(): string;
}

export interface Typography {
  fontWeightRegular: string;
  fontWeightBold: string;
  fontFamilyBase: string;
  fontSizeBase: string;
  fontSizeSmall: string;
  fontSizeH1: string;
  fontSizeH2: string;
  fontSizeH3: string;
}

export interface Animations {
  shake: string;
}

export interface Styles {
  breakpoints: Breakpoints;
  colors: Colors;
  global: GlobalStyles;
  spacing: Spacing;
  typography: Typography;
  animations: Animations
}

export interface Attribute {
  getBooleanFromStr(str:string): boolean;
  getLanguageFromStr(str:string): language;
}

export interface Number {
  getNumberFromStr(str:string): number;
}

export interface Router {
  getRoute(): string;
  postRoutes: any;
}

export interface RoboHashUrlConfig {
  word?: string;
  set?: string;
  size?: string;
  bgset?: string;
}

export interface API {
  getRoboHashUrl(config?:RoboHashUrlConfig): string;
}

export interface Utils {
  attribute: Attribute;
  number: Number;
  router: Router;
  api: API;
}
