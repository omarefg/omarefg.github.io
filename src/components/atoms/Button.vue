<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
</script>

<style lang="scss" scoped>
  button {
    background-color: transparent;
    padding: spacing() spacing(3);
    border-radius: $borderRadius;
    @include colorMode() {
      border: 1px solid theme('textColor');
      color: theme('textColor');
    }
  }
</style>
