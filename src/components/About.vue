<template lang="pug">
  section
    div
      img.headerBanner(src="@/assets/banner.jpg" alt="header")
    .container
      .content.is-large
        h4
          b {{ $t('about') }}
        p {{ $t('about1') }}&nbsp;
          span(ref="word")
          span.word |
          |  {{ $t('about2') }}
          br
          br
          | {{ $t('about3') }}
          br
          br
          | {{ $t('about4') }}&nbsp;
          a {{ $t('about5') }}
</template>

<script>
  export default {
    data () {
      return {
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
  $yellow: #ddd60f;
  $gray: #e1e1e1;

  .headerBanner{
    width: 100% !important;
  }
  @keyframes blinkAnim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  .word {
    animation: blinkAnim 500ms linear infinite;
  }
  .content h4{
    color: $yellow;
    border-bottom: 1px solid $gray;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  .content p{
    margin-bottom: 5rem;
  }
  .content a{
    border-bottom: 2px solid $yellow;
    color: #4a4a4a;
  }

  @media screen and (max-width:768px){
    .container{
      margin-right: 20px;
      margin-left: 20px;
    }
  }
</style>
