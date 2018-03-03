<template lang="pug">
  div
    figure.image
      img(src="@/assets/post1min.png" alt="postimg" width="100%")
    .container
      .content.is-medium
        h1.title ¿Por qué todos deberíamos tener una página web?
        h2.subtitle Octubre - 2017
        p En el mundo en el que vivimos, cuando necesitamos un servicio lo primero que hacemos es acudir a&nbsp;
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
