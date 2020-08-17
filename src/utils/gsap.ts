import { TweenMax } from 'gsap'
import { ParallaxItConfig } from '../schemas/interfaces'

export function parallaxIt (config: ParallaxItConfig) {
  const {
    element,
    movement,
    relX,
    relY,
    clientWidth,
    clientHeight,
    transition
  } = config

  TweenMax.to(element, 1, {
    x: (relX - clientWidth / 2) / clientWidth * movement,
    y: (relY - clientHeight / 2) / clientHeight * movement,
    transition
  })
}
