<template lang="pug">
  section.container
    .ofTitle
      h2
        b.content.is-large {{ $t('latestPosts') }}
    .ofContent.columns.is-multiline
      .post.column.is-4
        router-link(:to="{ name: 'article1' }")
          img(src="@/assets/post1min.png" alt="post1" width="250")
          .postTitle
            h5.subtitle ¿Por qué todos deberíamos tener una página web?
        h6 Octubre - 2017

      .post.column.is-4(v-if="twoPosts")
        router-link(:to="{ name: 'article1' }")
          img(src="@/assets/post1min.png" alt="post1" width="250")
          .postTitle
            h5.subtitle ¿Por qué todos deberíamos tener una página web?
        h6 Octubre - 2017

      .post.column.is-4(v-if="threePosts")
        router-link(:to="{ name: 'article1' }")
          img(src="@/assets/post1min.png" alt="post1" width="250")
          .postTitle
            h5.subtitle ¿Por qué todos deberíamos tener una página web?
        h6 Octubre - 2017


</template>

<script>
export default {
  data () {
    return {
      twoPosts: false,
      threePosts: false
    }
  }
}
</script>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #e1e1e1;

  .ofTitle{
    color: $yellow;
    border-bottom: 1px solid $gray;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  .ofContent{
    margin-bottom: 5rem;
  }
  .post{
    display: inline-block;
    width: 33.33%;
  }
  .postTitle{
    width: 250px;
  }
</style>
