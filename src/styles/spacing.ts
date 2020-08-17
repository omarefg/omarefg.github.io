import { getNumberFromStr } from '../utils/number'

export const unit:string = '8px'
export const borderRadiusUnit:string = `${getNumberFromStr(unit) / 2}px`

export function getSpacing (times:number = 1):string {
  return `${getNumberFromStr(unit) * times}px`
}

export function getBorderRadius (times:number = 1):string {
  return `${getNumberFromStr(borderRadiusUnit) * times}px`
}

export function vh (value: number): number {
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  return (value * height) / 100
}

export function vw (value: number): number {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  return (value * width) / 100
}
