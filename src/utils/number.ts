export function getNumberFromStr (str:string):number {
  return Number(str.replace(/\D/g, ''))
}

export function shuffleArray (array: any[]) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function getRandomInt (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomFloat (min: number, max: number): number {
  return Math.random() * (max - min) + min
}
