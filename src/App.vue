<template lang="pug">
  #app
    of-header

    pm-about

    of-footer
</template>

<script>
import OfHeader from '@/components/layout/Header'
import OfFooter from '@/components/layout/Footer'
import PmAbout from '@/components/About'

export default {
  name: 'app',

  components: { OfHeader, OfFooter, PmAbout },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import './css/index.css';
  @import './scss/main.scss';
</style>
