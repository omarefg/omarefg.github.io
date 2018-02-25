<template lang="pug">
  div
    .ofTitle
      .ofSubTitle
        h1.title ¿Por qué todos deberíamos tener una página web?
        h2.subtitle
          b Octubre - 2017
      .banner
        img(src="@/assets/post1min.png" alt="postimg" width="1349")

    .container
      p.text En el mundo en el que vivimos, cuando necesitamos un servicio lo primero que hacemos es acudir a&nbsp;
        a(href="https://google.com" target="_blank") Google
        |, ya sea para buscar información al respecto, precios, o ver si podemos adquirirlo desde la comodidad de nuestro hogar.
        br
        br
        |Hoy en día es impensable un modelo de negocio que exista sin presencia en Internet.
        br
        br
        |Una página web, redes sociales  y una estrategia de marketing digital bien ejecutada garantizan poder llegar a la audiencia a la que se desea y generar un mejor impacto.
        br
        br
        |Incluso, ésto no sólo aplica para el sector comercial, también para el talento humano.
        br
        br
        |Actualmente, con un mercado laboral globalizado, quien tiene mejores oportunidades es el profesional que mejor sabe vender sus conocimientos y habilidades. Una buena preparación siempre debe ir de la mano de buena presencia en Internet y una estrategia de marketing digital bien ejecutada.
        br
        br
        |Cada día son más los profesionales que tienen una página web personal donde exhiben sus triunfos laborales y se vuelven más cotizados por las mejores empresas.
        br
        br
        |Es un hecho que quien lo haga va a tener un mayor alcance, va a generar más confianza y por ende tendrá acceso a mejores ofertas laborales.
</template>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #282828;

  a{
    color: $yellow;
  }
  p{
    text-align: justify;
  }
  .banner{
    margin-top: 25px;
    overflow: hidden;
    height: 600px;
    position: relative;
  }
  .banner img{
    opacity: .75;
    position: absolute;
    top: 0;
  }
  .ofTitle{
    position: relative;
  }
  .ofSubTitle{
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 25px;
    font-family: 'Open Sans', sans-serif;
  }
  .ofTitle h1{
    color: $gray;
    margin-left: 70px;
  }
  .ofTitle h2{
    color: $yellow;
    margin-left: 70px;
  }
  .text{
    margin: 50px 0;
    color: #282828;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
  }
</style>
