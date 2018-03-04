<template lang="pug">
  footer
    .footer
      .container
        .content.has-text-centered
          h6
            a(href="https://drive.google.com/open?id=1kRxNBYWGnY-V1tYxLSeSqv39vzsXx4RU" target="_blank") Curriculum Vitae
          h6.subtitle 2018 - Copyright
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
