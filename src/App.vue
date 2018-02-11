<template lang="pug">
  #app
    of-header
</template>

<script>
import OfHeader from '@/components/layout/Header'

export default {
  name: 'app',

  components: { OfHeader },

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
