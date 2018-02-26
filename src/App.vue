<template lang="pug">
  #app
    of-header

    router-view

    of-footer
</template>

<script>
import OfHeader from '@/components/layout/Header'
import OfFooter from '@/components/layout/Footer'

export default {
  name: 'app',

  components: { OfHeader, OfFooter }

}
</script>

<style lang="scss">
  @import './scss/main.scss';
  body{
    font-family: 'Open Sans', sans-serif;
  }
</style>
