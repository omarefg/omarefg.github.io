<template lang="pug">
  #app
    of-header

    of-about

    of-latest-posts

    of-blog  

    of-footer
</template>

<script>
import OfHeader from '@/components/layout/Header'
import OfFooter from '@/components/layout/Footer'
import OfAbout from '@/components/About'
import OfLatestPosts from '@/components/LatestPosts'
import OfBlog from '@/components/Blog'

export default {
  name: 'app',

  components: { OfHeader, OfFooter, OfAbout, OfLatestPosts, OfBlog },

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
