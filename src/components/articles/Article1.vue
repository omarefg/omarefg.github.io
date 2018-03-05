<template lang="pug">
  div
    figure.image
      img(src="@/assets/post1.jpg" alt="postimg" width="100%")
    .container
      .content.is-medium
        h1.title {{ $t('article1Title') }}
        h2.subtitle {{ $t('article1Subtitle') }}
        p {{ $t('article1Content') }}&nbsp;
          a(href="https://google.com" target="_blank") {{ $t('article1Content1') }}
          |{{ $t('article1Content2') }}
          br
          br
          |{{ $t('article1Content3') }}
          br
          br
          |{{ $t('article1Content4') }}
          br
          br
          |{{ $t('article1Content5') }}
          br
          br
          |{{ $t('article1Content6') }}
          br
          br
          |{{ $t('article1Content7') }}
          br
          br
          |{{ $t('article1Content8') }}
</template>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #282828;

  .image{
    margin-top: 25px;
    overflow: hidden;
    height: 600px;
  }
  .image img{
    opacity: .75;
  }
  .content h1{
    color: $gray;
    font-family: 'Open Sans', sans-serif;
  }
  .content h2{
    color: $yellow;
    font-family: 'Open Sans', sans-serif;
  }
  .content p{
    margin: 50px 0;
    color: #282828;
    font-family: 'Open Sans', sans-serif;
    text-align: justify;
  }
  .content a{
    color: $yellow;
  }

  @media screen and (max-width:768px){
    .image{
      margin-top: 0;
      height: 15rem;
    }
    .container{
      margin-right: 20px;
      margin-left: 20px;
    }
  }
</style>
