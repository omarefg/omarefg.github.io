<template lang="pug">
section.container
  header
    div
      img(src="@/assets/book.jpg" alt="header" height="")

  div.entrada
    h1.title.is-centered ¿Por qué todos deberíamos tener una página web?
    h4.subtitle Octubre - 2017
    a
      button.button(type="button" name="button") {{ $t('readMore') }}
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  $yellow: #ddd60f;
  $gray: #282828;

  button{
    cursor: pointer;
    background-color: transparent;
    border: 1px solid $gray;
    color: $yellow;
    padding: 5px 10px;
    transition: .3s;
  }
  button:hover{
    font-size: 18px;
    transition: .3s;
    color: $yellow;
    border: 1px solid $gray;
  }
  .entrada{
    text-align: center;
    border-bottom: 1px solid #282828;
    padding: 50px 0;
    margin: 50px 0;
  }
</style>
