<template lang="pug">
  section.container
    .content.is-large
      h4 {{ $t('latestPosts') }}
    .columns.is-marginless
      .column.is-one-third
        a(href="https://platzi.com/tutoriales/1646-backend-nodejs/4553-documenta-tu-api-con-postman/" target="_blank")
          figure.image
            img(src="@/assets/post3.jpg" alt="post2")
          h5.subtitle {{ $t('articlePlatzi2Title') }}
        h6 {{ $t('articlePlatzi2Subtitle') }}

      .column.is-one-third
        a(href="https://goo.gl/85m7jE" target="_blank")
          figure.image
            img(src="@/assets/post2.jpg" alt="post2")
          h5.subtitle {{ $t('articlePlatzi1Title') }}
        h6 {{ $t('articlePlatzi1Subtitle') }}

      .column.is-one-third
        router-link(:to="{ name: 'article1' }")
          figure.image
            img(src="@/assets/post1.jpg" alt="post1")
          h5.subtitle {{ $t('article1Title') }}
        h6 {{ $t('article1Subtitle') }}

</template>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #e1e1e1;

  .content h4{
    color: $yellow;
    border-bottom: 1px solid $gray;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  .columns{
    margin-bottom: 5rem;
  }

  @media screen and (max-width:768px){
    .container{
      margin-right: 20px;
      margin-left: 20px;
    }
  }
</style>
