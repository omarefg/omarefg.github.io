export function getNumberFromStr (str:string):number {
  return Number(str.replace(/\D/g, ''))
}
