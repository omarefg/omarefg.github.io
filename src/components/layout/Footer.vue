<template lang="pug">
  footer
    .footer
      .container
        .content.has-text-centered
          h6
            a(href="https://drive.google.com/file/d/1Ry_NuGeTQ2H-VRWmPyygdbsRkTV62tAQ/view?usp=sharing" target="_blank") Curriculum Vitae
          h6.subtitle {{ new Date().getFullYear() }} - Copyright
          h6.title Omar Flores
</template>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #282828;

  .footer{
    padding-bottom: 1rem;
    padding-top: 3rem;
  }
  a{
    border-top: 1px solid $yellow;
    margin-bottom: 1rem;
    color: $gray;
    transition: .3s;
  }
  .content{
    color: $gray;
  }

  @media screen and (min-width: 768px){
    a:hover{
      color: $yellow;
      border: none;
      font-size: 18px;
      border-top: 1px solid $yellow;
      border-right: 1px solid $yellow;
      padding-right: 20px;
    }
  }
</style>
