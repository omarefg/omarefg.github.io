<template lang="pug">
  #app(v-if="draw")
    div
      img(src="@/assets/banner - copia2.jpg" alt="header" width="1349")
    .container
      div
        h2
          b ABOUT
      div
        p Hi, I'm Omar! I'm a&nbsp;
          span(ref="word")
          span.word |
          |  Developer passionate about making web projects a reality. I believe websites are an indispensable tool for any industry, sometimes it's the first experience customers get, and I enjoy building software that make that experience really positive. I combine HTML, CSS & Javascript, always using the best practices to build fully functional and responsive websites, if you're interested in working with me don't hesitate to get in touch
</template>

<script>
export default {
  data () {
    return {
      draw: true,
      title: {
        words: ['Front-end', 'Web', 'JavaScript'],
        wordWrapper: this.$refs,
        wordWrapperContent: this.$refs,
        addingWord: false,
        counter: 0
      }
    }
  },

  mounted () {
    this.title.wordWrapper = this.title.wordWrapper.word
    this.title.wordWrapperContent = this.title.wordWrapperContent.word.innerHTML
    this.changeTitle()
  },

  methods: {
    changeTitle () {
      setInterval(() => {
        if (this.title.wordWrapperContent.length > 0 && !this.title.addingWord) {
          this.title.wordWrapper.innerHTML = this.title.wordWrapperContent.slice(0, -1)
          this.title.wordWrapperContent = this.title.wordWrapper.innerHTML
        } else {
          this.title.addingWord = true
        }
        if (this.title.addingWord) {
          if (this.title.wordWrapperContent.length < this.title.words[this.title.counter].length) {
            this.title.wordWrapper.innerHTML = this.title.words[this.title.counter].slice(0, this.title.wordWrapperContent.length + 1)
            this.title.wordWrapperContent = this.title.wordWrapper.innerHTML
          } else {
            if (this.title.counter < this.title.words.length) { this.title.counter++ }
            this.title.addingWord = false
          }
        }
        if (this.title.counter === this.title.words.length) {
          this.title.counter = 0
        }
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
  .word {
    animation: blinkAnim 500ms linear infinite;
  }
  @keyframes blinkAnim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
