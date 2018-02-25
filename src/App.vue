<template lang="pug">
  #app
    of-header

    of-about

    of-latest-posts

    of-blog

    of-article1  

    of-footer
</template>

<script>
import OfHeader from '@/components/layout/Header'
import OfFooter from '@/components/layout/Footer'
import OfAbout from '@/components/About'
import OfLatestPosts from '@/components/LatestPosts'
import OfBlog from '@/components/Blog'
import OfArticle1 from '@/components/articles/article1'

export default {
  name: 'app',

  components: {
    OfHeader,
    OfFooter,
    OfAbout,
    OfLatestPosts,
    OfBlog,
    OfArticle1
  }

}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
