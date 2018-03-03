<template lang="pug">
  header
    .container.is-fluid
      .navbar
        .navbar-brand
          .navbar-burger(ref="burger" @touchstart="addActiveClass('burger')")
            span
            span
            span
        .navbar-menu.m-t-lg
          .navbar-start
            router-link.navbar-menu.logo(:to="{ name: 'main' }")
              img.navbar-item.image.is-128x128(src="@/assets/logo.png" alt="logo")
              h1.title OF
          .navbar-end
            ul.navbar-menu
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
                a.navbar-item.social-menu.is-gray
                  b Social
                ul.navbar-menu.social-list
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
  methods: {
    selectLanguage (lang) {
      this.$i18n.locale = lang
    },
    addActiveClass (ref1) {
      this.$refs[ref1].classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #282828;
  $background: #f5f5f5;

  .title{
    position: relative;
    top: 3rem;
    right: 5.8rem;
    font-size: 28px;
  }
  .logo{
    position: relative;
    bottom: 1.5rem;
  }
  .social-list{
    transition: 1s;
    position: absolute;
    right: -20rem;
    opacity: .1;
  }
  .social-menu:hover ~.social-list{
    transition: 1s;
    right: 0;
    opacity: 1;
  }
  .social-list:hover{
    right: 0;
    opacity: 1;
  }
  .is-yellow:hover{
    color: $yellow;
    transition: .3s;
  }
  .is-gray:hover{
    color: $gray;
    border-top: 2px solid $yellow;
  }
  .dropdown-item{
    padding-top: .5rem;
  }
  .dropdown-content{
    padding: 0;
  }
</style>
