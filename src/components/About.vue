<template lang="pug">
  #app(v-if="draw")
    div
      img(src="@/assets/banner - copia2.jpg" alt="header" width="1349")
    .container
      div
        h2
          b ABOUT
      div
        p Hi, I'm Omar! I'm a {{ title }} Developer passionate about making web projects a reality. I believe websites are an indispensable tool for any industry, sometimes it's the first experience customers get, and I enjoy building software that make that experience really positive. I combine HTML, CSS & Javascript, always using the best practices to build fully functional and responsive websites, if you're interested in working with me don't hesitate to get in touch
</template>

<script>
export default {
  data () {
    return {
      title: 'Front-end',
      draw: true
    }
  },

  mounted () {
    this.changeTitle()
  },

  methods: {
    changeTitle () {
      const interval = setInterval(() => {
        clearInterval(interval)
        setTimeout(() => { this.title = 'Front-end' }, 500)
        setTimeout(() => { this.title = 'Front-en' }, 1000)
        setTimeout(() => { this.title = 'Front-e' }, 1500)
        setTimeout(() => { this.title = 'Front-' }, 2000)
        setTimeout(() => { this.title = 'Front' }, 2500)
        setTimeout(() => { this.title = 'Fron' }, 3000)
        setTimeout(() => { this.title = 'Fro' }, 3500)
        setTimeout(() => { this.title = 'Fr' }, 4000)
        setTimeout(() => { this.title = 'F' }, 4500)
        setTimeout(() => { this.title = '' }, 5000)
        setTimeout(() => { this.title = 'W' }, 5500)
        setTimeout(() => { this.title = 'We' }, 6000)
        setTimeout(() => { this.title = 'Web' }, 6500)
        setTimeout(() => { this.title = 'We' }, 10500)
        setTimeout(() => { this.title = 'W' }, 11000)
        setTimeout(() => { this.title = '' }, 12000)
        setTimeout(() => { this.title = 'J' }, 12500)
        setTimeout(() => { this.title = 'Ja' }, 13000)
        setTimeout(() => { this.title = 'Jav' }, 14000)
        setTimeout(() => { this.title = 'Java' }, 14500)
        setTimeout(() => { this.title = 'JavaS' }, 15000)
        setTimeout(() => { this.title = 'JavaSc' }, 15500)
        setTimeout(() => { this.title = 'JavaScr' }, 16000)
        setTimeout(() => { this.title = 'JavaScri' }, 16500)
        setTimeout(() => { this.title = 'JavaScrip' }, 17000)
        setTimeout(() => { this.title = 'JavaScript' }, 17500)
        setTimeout(() => { this.title = 'JavaScrip' }, 21500)
        setTimeout(() => { this.title = 'JavaScri' }, 22000)
        setTimeout(() => { this.title = 'JavaScr' }, 22500)
        setTimeout(() => { this.title = 'JavaSc' }, 23000)
        setTimeout(() => { this.title = 'JavaS' }, 23500)
        setTimeout(() => { this.title = 'Java' }, 24000)
        setTimeout(() => { this.title = 'Jav' }, 24500)
        setTimeout(() => { this.title = 'Ja' }, 25000)
        setTimeout(() => { this.title = 'J' }, 25500)
        setTimeout(() => { this.title = '' }, 26000)
        setTimeout(() => { this.title = 'F' }, 26500)
        setTimeout(() => { this.title = 'Fr' }, 27000)
        setTimeout(() => { this.title = 'Fro' }, 27500)
        setTimeout(() => { this.title = 'Fron' }, 28000)
        setTimeout(() => { this.title = 'Front' }, 28500)
        setTimeout(() => { this.title = 'Front-' }, 29000)
        setTimeout(() => { this.title = 'Front-e' }, 29500)
        setTimeout(() => { this.title = 'Front-en' }, 30000)
        setTimeout(() => { this.title = 'Front-end' }, 30500)
      }, 1000)
      setInterval(() => {
        setTimeout(() => { this.title = 'Front-end' }, 500)
        setTimeout(() => { this.title = 'Front-en' }, 1000)
        setTimeout(() => { this.title = 'Front-e' }, 1500)
        setTimeout(() => { this.title = 'Front-' }, 2000)
        setTimeout(() => { this.title = 'Front' }, 2500)
        setTimeout(() => { this.title = 'Fron' }, 3000)
        setTimeout(() => { this.title = 'Fro' }, 3500)
        setTimeout(() => { this.title = 'Fr' }, 4000)
        setTimeout(() => { this.title = 'F' }, 4500)
        setTimeout(() => { this.title = '' }, 5000)
        setTimeout(() => { this.title = 'W' }, 5500)
        setTimeout(() => { this.title = 'We' }, 6000)
        setTimeout(() => { this.title = 'Web' }, 6500)
        setTimeout(() => { this.title = 'We' }, 10500)
        setTimeout(() => { this.title = 'W' }, 11000)
        setTimeout(() => { this.title = '' }, 12000)
        setTimeout(() => { this.title = 'J' }, 12500)
        setTimeout(() => { this.title = 'Ja' }, 13000)
        setTimeout(() => { this.title = 'Jav' }, 14000)
        setTimeout(() => { this.title = 'Java' }, 14500)
        setTimeout(() => { this.title = 'JavaS' }, 15000)
        setTimeout(() => { this.title = 'JavaSc' }, 15500)
        setTimeout(() => { this.title = 'JavaScr' }, 16000)
        setTimeout(() => { this.title = 'JavaScri' }, 16500)
        setTimeout(() => { this.title = 'JavaScrip' }, 17000)
        setTimeout(() => { this.title = 'JavaScript' }, 17500)
        setTimeout(() => { this.title = 'JavaScrip' }, 21500)
        setTimeout(() => { this.title = 'JavaScri' }, 22000)
        setTimeout(() => { this.title = 'JavaScr' }, 22500)
        setTimeout(() => { this.title = 'JavaSc' }, 23000)
        setTimeout(() => { this.title = 'JavaS' }, 23500)
        setTimeout(() => { this.title = 'Java' }, 24000)
        setTimeout(() => { this.title = 'Jav' }, 24500)
        setTimeout(() => { this.title = 'Ja' }, 25000)
        setTimeout(() => { this.title = 'J' }, 25500)
        setTimeout(() => { this.title = '' }, 26000)
        setTimeout(() => { this.title = 'F' }, 26500)
        setTimeout(() => { this.title = 'Fr' }, 27000)
        setTimeout(() => { this.title = 'Fro' }, 27500)
        setTimeout(() => { this.title = 'Fron' }, 28000)
        setTimeout(() => { this.title = 'Front' }, 28500)
        setTimeout(() => { this.title = 'Front-' }, 29000)
        setTimeout(() => { this.title = 'Front-e' }, 29500)
        setTimeout(() => { this.title = 'Front-en' }, 30000)
        setTimeout(() => { this.title = 'Front-end' }, 30500)
      }, 34500)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
