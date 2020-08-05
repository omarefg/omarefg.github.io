export type language = 'en' | 'es'
export type booleanAttribute = 'true' | 'false'
export type colorMode = 'dark' | 'light'
export type mapFunction = ((value: string, index: number, array: string[]) => unknown)
export type httpVerb = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE'
export type requestMode = 'same-origin' | 'no-cors' | 'cors' | 'navigate'
