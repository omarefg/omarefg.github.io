<template lang="pug">
  header
    .container.is-fluid
      .navbar
        .navbar-brand
          .navbar-start
            router-link(:to="{ name: 'main' }")
              figure.image.is-64x64
                img(src="@/assets/logo.jpg" alt="logo")
          .navbar-burger(ref="burger" @touchstart="addActiveClass('burger', 'navbar-menu')")
            span
            span
            span
        .navbar-menu.is-shadowless(ref="navbar-menu")
          .navbar-end
            ul.navbar-item.is-paddingless
              li
                a.navbar-item.is-gray.dropdown.is-hoverable(aria-haspopup="true" aria-controls="dropdown-menu4")
                  b.dropdown-trigger {{ $t('language') }}
                  ul.dropdown-menu(id="dropdown-menu4" role="menu")
                    li.dropdown-content
                      a.dropdown-item.is-yellow(@click="selectLanguage('en')") {{ $t('english') }}
                      a.dropdown-item.is-yellow(@click="selectLanguage('es')") {{ $t('spanish') }}
              li
                router-link.navbar-item.is-gray(:to="{ name: 'blog'}")
                  b Blog
              li
                a.navbar-item.is-gray(href="mailto:omarefg92@gmail.com")
                  b {{ $t('contact') }}
              li
                a.navbar-item.social-menu.is-gray(@touchstart="addSocialActiveClass('social-list')")
                  b Social
                ul.social-list(ref="social-list")
                  li
                    a.navbar-item.is-yellow(href="https://www.platzi.com/@omarefg" target="_blank")
                      i.jjy-platzi
                  li
                    a.navbar-item.is-yellow(href="https://codepen.io/omarefg/" target="_blank")
                      i.jjy-codepen
                  li
                    a.navbar-item.is-yellow(href="https://www.linkedin.com/in/omarefg/" target="_blank")
                      i.jjy-linkedin
                  li
                    a.navbar-item.is-yellow(href="https://www.twitter.com/omarefg" target="_blank")
                      i.jjy-twitter
                  li
                    a.navbar-item.is-yellow(href="https://github.com/omarefg" target="_blank")
                      i.jjy-github
                  li
                    a.navbar-item.is-yellow(href="https://www.instagram.com/omarefg92/" target="_blank")
                      i.fth-instagram
</template>

<script>
  export default {
    mounted () {
    },
    methods: {
      selectLanguage (lang) {
        this.$i18n.locale = lang
      },
      addActiveClass (ref1, ref2) {
        this.$refs[ref1].classList.toggle('is-active')
        this.$refs[ref2].classList.toggle('is-active')
      },
      addSocialActiveClass (social) {
        this.$refs[social].classList.toggle('social-list-active')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #282828;
  $background: #f5f5f5;

  .navbar-start{
    position: relative;
    top: 0.75rem;
  }
  .navbar-start span{
    position: relative;
    bottom: 2.75rem;
    left: 0.75rem;
    color: $gray;
  }
  .social-list{
    transition: 1s;
    position: absolute;
    right: -20rem;
    opacity: .1;
    z-index: 5;
  }
  .social-list li{
    display: inline-block;
  }
  .dropdown-item{
    padding-top: .5rem;
  }
  .dropdown-content{
    padding: 0;
  }
  .social-list-active{
    transition: 1s;
    opacity: 1;
    left: 0 !important;
  }
  .is-yellow:hover{
    color: $yellow;
    transition: .3s;
  }
  .is-gray:hover{
    color: $gray;
    border-top: 2px solid $yellow;
  }
  @media screen and (min-width: 769px) {
    .social-list:hover{
      right: 0;
      opacity: 1;
    }
    .social-menu:hover ~.social-list{
      transition: 1s;
      right: 0;
      opacity: 1;
    }

  }
  @media screen and (max-width: 768px){
    .social-list{
      left: -280px;
      right: 0;
    }
    .navbar-start{
      top:0;
    }
    .navbar-menu{
      margin-bottom: 2rem;
    }
  }
</style>
