<template lang="pug">
  header
    .container.is-fluid.navbar
      .navbar-menu.columns
        .navbar-start.column
          .logo
            a(href="index.html")
              img(src="@/assets/logo.png" alt="logo" height="95")
              h1.letra_logo OF
        .lista.navbar-end.column#lista
          ul.menu-list
            li
              a(href="blog.html")
                b BLOG
            li
              a(href="mailto:omarefg92@gmail.com")
                b CONTACT
            li
              a.redes_sociales#redes_sociales(touchstart="menuCan()")
                b SOCIAL
              ul.social.menu-list#social
                li
                  a(href="https://www.platzi.com/@omarefg" target="_blank")
                    i.jjy-platzi
                li
                  a(href="https://codepen.io/omarefg/" target="_blank")
                    i.jjy-codepen
                li
                  a(href="https://www.linkedin.com/in/omarefg/" target="_blank")
                    i.jjy-linkedin
                li
                  a(href="https://www.twitter.com/omarefg" target="_blank")
                    i.jjy-twitter
                li
                  a(href="https://github.com/omarefg" target="_blank")
                    i.jjy-github
                li
                  a(href="https://www.instagram.com/omarefg92/" target="_blank")
                    i.fth-instagram
    .banner
      img(src="@/assets/banner - copia2.jpg" alt="header" width="1349")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .menu-list{
    border: none !important;
  }
</style>
