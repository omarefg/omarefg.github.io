<template lang="pug">
  section.container
    .ofTitle
      h2
        b.content.is-large {{ $t('latestPosts') }}
    .columns.is-marginless

      .column
        router-link(:to="{ name: 'article1' }")
          figure.image
            img(src="@/assets/post1min.png" alt="post1")
          h5.subtitle ¿Por qué todos deberíamos tener una página web?
        h6 Octubre - 2017

      .column
        router-link(:to="{ name: 'article1' }")
          figure.image
            img(src="@/assets/post1min.png" alt="post1")
          h5.subtitle ¿Por qué todos deberíamos tener una página web?
        h6 Octubre - 2017

      .column
        router-link(:to="{ name: 'article1' }")
          figure.image
            img(src="@/assets/post1min.png" alt="post1")
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
  .columns{
    margin-bottom: 5rem;
  }
</style>
