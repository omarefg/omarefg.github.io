<template lang="pug">
  section.container
    .ofTitle
      h2
        b.content.is-large {{ $t('latestPosts') }}
    .ofContent.columns.is-multiline
      .post.column.is-4
        a(href="#")
          img(src="@/assets/post1min.png" alt="post1" width="250")
        div.postTitle
          a(href="#")
            h5.subtitle ¿Por qué todos deberíamos tener una página web?
        div
          h6 Octubre - 2017
      .post.column(v-if="twoPosts")
        a(href="#")
          img(src="@/assets/post1min.png" alt="post1" width="250")
        div.postTitle
          a(href="#")
            h5.subtitle ¿Por qué todos deberíamos tener una página web?
        div
          h6 Octubre - 2017
      .post.column(v-if="threePosts")
        a(href="#")
          img(src="@/assets/post1min.png" alt="post1" width="250")
        div.postTitle
          a(href="#")
            h5.subtitle ¿Por qué todos deberíamos tener una página web?
        div
          h6 Octubre - 2017
</template>

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
