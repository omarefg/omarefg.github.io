<template lang="pug">
  section.container
    header
      figure.image
        img(src="@/assets/book.jpg" alt="header")

    .columns.is-multiline
      .column.is-12
        h1.title.is-centered {{ $t('article1Title') }}
        h4.subtitle {{ $t('article1Subtitle') }}
        router-link(:to="{ name: 'article1' }")
          button.button(type="button" name="button") {{ $t('readMore') }}
    .columns.is-multiline
      .column.is-12
        h1.title.is-centered {{ $t('articlePlatzi1Title') }}
        h4.subtitle {{ $t('articlePlatzi1Subtitle') }}
        a(href="https://goo.gl/85m7jE" target="_blank")
          button.button(type="button" name="button") {{ $t('readMore') }}
</template>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #282828;

  header{
    margin-bottom: 5rem;
    margin-top: 50px;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border: 1px solid $gray;
    color: $yellow;
    padding: 5px 10px;
    transition: .3s;
  }
  .column{
    text-align: center;
    border-bottom: 1px solid #282828;
    padding: 50px 0 25px 0;
  }
  .columns:last-child{
    margin-bottom: 10rem;
  }
  @media screen and (min-width:769px){
    button:hover{
      font-size: 18px;
      transition: .3s;
      color: $yellow;
      border: 1px solid $gray;
    }
  }
  @media screen and (max-width:768px){
    .container{
      margin-right: 20px;
      margin-left: 20px;
    }
  }
</style>
