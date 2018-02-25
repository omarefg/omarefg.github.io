<template lang="pug">
  section
    div
      img(src="@/assets/banner - copia2.jpg" alt="header" width="1349")
    .container
      .ofTitle
        h2
          b.content.is-large {{ $t('about') }}
      div.ofContent
        p.content.is-medium {{ $t('about1') }}&nbsp;
          span(ref="word")
          span.word |
          |  {{ $t('about2') }}
          br
          br
          | {{ $t('about3') }}
          br
          br
          | {{ $t('about4') }}&nbsp;
          a.ofContact {{ $t('about5') }}
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
      },
      twoPosts: false,
      threePosts: false
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

  .ofTitle{
    color: $yellow;
    border-bottom: 1px solid $gray;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  .ofContent{
    margin-bottom: 5rem;
  }
  .ofContact{
    border-bottom: 2px solid $yellow;
    color: #4a4a4a;
  }

  .post{
    display: inline-block;
    width: 33.33%;
  }
  .postTitle{
    width: 250px;
  }
</style>
