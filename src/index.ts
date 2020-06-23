import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import App from './App'
import { globalStyles } from './styles/global'

const globalStylesElement = document.createElement('style')
globalStylesElement.innerHTML = globalStyles

document.head.appendChild(globalStylesElement)
document.getElementById('app')?.appendChild(new App())
