<template lang="pug">
  main
    of-about

    of-latest-posts
</template>

<script>
import OfAbout from '@/components/About'
import OfLatestPosts from '@/components/LatestPosts'

export default {
  components: { OfAbout, OfLatestPosts }
}
</script>
