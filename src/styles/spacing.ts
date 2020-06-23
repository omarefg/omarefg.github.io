import { getNumberFromStr } from '../utils/number'

export const unit:string = '8px'
export const borderRadiusUnit:string = `${getNumberFromStr(unit) / 2}px`

export function getSpacing (times:number = 1):string {
  return `${getNumberFromStr(unit) * times}px`
}

export function getBorderRadius (times:number = 1):string {
  return `${getNumberFromStr(borderRadiusUnit) * times}px`
}
