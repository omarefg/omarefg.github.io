<template>
  <div id="app">
    <side-bar/>
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/organisms/SideBar'

export default {
  name: 'app',
  components: { SideBar },
  mounted: () => {
    const colorMode = localStorage.getItem('colorMode') || 'light'
    document.body.classList.add(`is-${colorMode}-mode`)
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';

#app {
  display: flex;
  min-height: 100vh;
}
</style>
