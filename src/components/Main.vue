<template lang="pug">
  main
    of-about

    of-latest-posts
</template>

<script>
import OfAbout from '@/components/about'
import OfLatestPosts from '@/components/LatestPosts'

export default {
  components: { OfAbout, OfLatestPosts }
}
</script>
