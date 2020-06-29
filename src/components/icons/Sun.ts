import Element from '../../Element'

class SunIcon extends Element {
  size: number | string

  constructor () {
    super()
    this.size = this.getAttribute('size') || '32px'
    this.render()
  }

  getTemplate ():string {
    return `
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="256" cy="256" r="139" />
          <path
            d="m256 81.643c8.284 0 15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15s-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15z"
          />
          <path
            d="m497 241h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
          />
          <path
            d="m256 430.357c-8.284 0-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15s15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15z"
          />
          <path
            d="m81.643 256c0-8.284-6.716-15-15-15h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15z"
          />
          <path
            d="m389.896 137.104c3.839 0 7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.93 2.93 6.769 4.394 10.607 4.394z"
          />
          <path
            d="m400.502 379.29c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.858-5.858 15.355 0 21.213l36.518 36.517c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.465 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z"
          />
          <path
            d="m111.497 379.289-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.856-5.858-15.355-5.858-21.212 0z"
          />
          <path
            d="m111.498 132.71c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-36.517-36.517c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213z"
          />
          <path
            d="m322.912 94.993c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.179-7.65-.445-16.429-8.095-19.608-7.649-3.178-16.428.444-19.608 8.095l-19.818 47.688c-3.178 7.651.446 16.43 8.095 19.609z"
          />
          <path
            d="m484.303 334.636-47.688-19.818c-7.651-3.179-16.429.444-19.608 8.095-3.179 7.65.445 16.429 8.095 19.608l47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.649-.445-16.428-8.095-19.607z"
          />
          <path
            d="m189.088 417.007c-7.651-3.178-16.429.444-19.608 8.095l-19.818 47.688c-3.179 7.65.445 16.429 8.095 19.608 1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.178-7.649-.446-16.428-8.095-19.607z"
          />
          <path
            d="m27.697 177.364 47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.65-.445-16.429-8.095-19.608l-47.688-19.817c-7.65-3.177-16.429.445-19.608 8.095s.445 16.429 8.095 19.608z"
          />
          <path
            d="m417.163 189.465c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139l47.734-19.707c7.657-3.161 11.303-11.931 8.142-19.589-3.162-7.658-11.934-11.302-19.589-8.141l-47.734 19.707c-7.658 3.162-11.303 11.932-8.142 19.589z"
          />
          <path
            d="m342.124 425.304c-3.161-7.658-11.933-11.301-19.589-8.141-7.658 3.161-11.303 11.931-8.142 19.589l19.707 47.735c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.932 8.142-19.589z"
          />
          <path
            d="m94.837 322.535c-3.161-7.657-11.929-11.304-19.589-8.141l-47.735 19.707c-7.657 3.161-11.303 11.931-8.142 19.589 2.389 5.785 7.978 9.28 13.871 9.28 1.906 0 3.846-.366 5.718-1.139l47.735-19.707c7.658-3.162 11.303-11.932 8.142-19.589z"
          />
          <path
            d="m169.876 86.696c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.931 8.142-19.589l-19.707-47.735c-3.162-7.658-11.934-11.302-19.589-8.141-7.658 3.161-11.303 11.932-8.142 19.589z"
          />
        </g>
      </svg>
    `
  }
}

customElements.define('sun-icon', SunIcon)
