<template>
  <div>
    <div :class="['sidebar', {'is-hide': hideBar}]">
      <div class="is-sticky">
        <div class="color-icons-container">
          <button
            class="color-mode-button"
            v-on:click="toogleColorMood"
          >
            <moon-icon
              size="1.5em"
              :class="['color-mode-out', { 'color-mode-in': colorMode === 'dark' }]"
            />
            <sun-icon
              size="1.5em"
              :class="['color-mode-out', { 'color-mode-in': colorMode === 'light' }]"
            />
          </button>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projets</li>
            <li>Contact</li>
            <details>
              <summary>Language</summary>
              <ul>
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </details>
          </ul>
        </div>
      </div>
    </div>
    <button
      :class="['side-bar-handler', {'is-rotated': !hideBar}]"
      v-on:click="toggleSideBar"
    >
      <logo-icon class="logo"/>
    </button>
  </div>
</template>

<script>
import LogoIcon from '@/components/icons/Logo'
import MoonIcon from '@/components/icons/Moon'
import SunIcon from '@/components/icons/Sun'

export default {
  data () {
    return {
      hideBar: false,
      colorMode: localStorage.getItem('colorMode') || 'light'
    }
  },
  methods: {
    toggleSideBar () {
      this.hideBar = !this.hideBar
    },
    toogleColorMood () {
      const colorMode = this.colorMode === 'light' ? 'dark' : 'light'
      localStorage.setItem('colorMode', colorMode)
      document.body.classList.remove(`is-${this.colorMode}-mode`)
      document.body.classList.add(`is-${colorMode}-mode`)
      this.colorMode = colorMode
    }
  },
  components: {
    LogoIcon,
    MoonIcon,
    SunIcon
  }
}

</script>

<style lang="scss" scoped>
.sidebar {
  width: 280px;
  position: relative;
  transition: .5s;
  height: 100%;
  @include colorMode() {
    background-color: theme('sideBarBackgroundColor')
  }
}

.is-hide {
  margin-left: -280px;
}

.is-rotated {
  transform: rotate(180deg);
}

.side-bar-handler {
  position: fixed;
  top: spacing(2);
  left: spacing(2);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: .5s;
}

.is-sticky {
  position: sticky;
  top: spacing(3);
}

.color-icons-container {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
}

.color-mode-button {
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  width: 2.5em;
  height: 2.5em;
  cursor: pointer;
  outline: none;
  background: transparent;
}

.color-mode-out {
  position: absolute;
  right: 3em;
  opacity: 0;
  transition: 0.5s;
}

.color-mode-in {
  right: .25em;
  opacity: 1;
  transition: 0.5s;
  @include colorMode() {
    fill: theme('textColor')
  }
}

.logo {
  @include colorMode() {
    fill: theme('textColor')
  }
}

ul {
  list-style: none;
  padding: 0 spacing();
  @include colorMode() {
    color: theme('textColor')
  }
}

li, summary {
  padding: spacing();
  margin: spacing() 0;
  outline: none;
  user-select: none;
  cursor: pointer;
  @include colorMode() {
    border-bottom: 1px solid theme('textColor');
  }
}

details ul {
  padding: 0 0 0 spacing();
}
</style>
