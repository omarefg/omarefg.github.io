<template lang="pug">
  header
    .container.is-fluid.navbar
      .navbar-menu.m-t-lg
        .navbar-start
          a.navbar-menu.logo
            img.navbar-item(src="@/assets/logo.png" alt="logo")
            h1.title OF
        .navbar-end
          ul.navbar-menu
            li
              a.navbar-item(href="blog.html")
                b BLOG
            li
              a.navbar-item(href="mailto:omarefg92@gmail.com")
                b CONTACT
            li
              a.navbar-item(touchstart="menuCan()")
                b SOCIAL
              ul.navbar-menu
                li
                  a.navbar-item(href="https://www.platzi.com/@omarefg" target="_blank")
                    i.jjy-platzi
                li
                  a.navbar-item(href="https://codepen.io/omarefg/" target="_blank")
                    i.jjy-codepen
                li
                  a.navbar-item(href="https://www.linkedin.com/in/omarefg/" target="_blank")
                    i.jjy-linkedin
                li
                  a.navbar-item(href="https://www.twitter.com/omarefg" target="_blank")
                    i.jjy-twitter
                li
                  a.navbar-item(href="https://github.com/omarefg" target="_blank")
                    i.jjy-github
                li
                  a.navbar-item(href="https://www.instagram.com/omarefg92/" target="_blank")
                    i.fth-instagram
    .div
      img(src="@/assets/banner - copia2.jpg" alt="header" width="1349")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .title{
    position: relative;
    top: 1.9rem;
    right: 4.6rem;
    font-size: 22px;
  }
  .logo{
    position: relative;
    bottom: 1.5rem;
  }

</style>
