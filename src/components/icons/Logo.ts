class LogoIcon extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    return `
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.787092 7.46203V0.347565L6.95664 3.84476C10.3499 5.76821 13.1164 7.35204 13.1045 7.36437C13.0782 7.39154 0.821277 14.5765 0.801222 14.5765C0.79344 14.5765 0.787079 11.375 0.787079 7.46203H0.787092ZM6.48299 10.0445C9.03969 8.60604 11.1291 7.41938 11.1261 7.40746C11.1214 7.38897 2.56011 2.74205 1.97075 2.43812L1.76271 2.33084V7.51114C1.76271 11.6424 1.76997 12.6882 1.79858 12.6756C1.81831 12.6669 3.9263 11.4829 6.48299 10.0445V10.0445Z"
        />
      </svg>
    `
  }
}

customElements.define('logo-icon', LogoIcon)
