<template>
  <article :class="['container', { 'is-top': isTop }]">
    <div class="details">
      <h1 v-if="isTop">{{ title }}</h1>
      <h3 v-if="!isTop">{{ title }}</h3>
      <p>{{ description }}</p>
      <p v-if="isTop">{{ content.slice(0, 200) }}</p>
      <router-link :to="{ name: 'article1' }">
        <of-button>Full story</of-button>
      </router-link>
    </div>
    <router-link
      class="image-link"
      :to="{ name: 'article1' }"
    >
      <img :src="src"/>
    </router-link>
  </article>
</template>

<script>
import OfButton from '@/components/atoms/Button'

export default {
  props: {
    isTop: {
      type: Boolean,
      default: false
    },
    src: String,
    path: String,
    title: String,
    description: String,
    content: {
      type: String,
      default: ''
    }
  },
  components: { OfButton }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column-reverse;
}

.image-link {
  width: 50%;
  display: flex;
}

.details {
  width: 100%;

  a {
    text-align: center;
  }
}

img {
  flex: 1;
  width: 100%;
  object-fit: cover;
  margin-bottom: spacing(2);
}

h1 {
  margin: 0;
}

h3 {
  margin: 0;
}

.is-top {
  flex-direction: row;
  width: 100%;

  .image-link {
    flex-grow: 0;
    flex-shrink: 0;
    display: block;
    margin: 0 0 2em 4em;
  }

  .details {
    width: 50%;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0 auto;

    a {
      text-align: left;
    }
  }

  img {
    margin: 0;
    height: 100%;
  }
}

</style>
