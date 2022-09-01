<template>
  <h1>{{ messageStore.message }}</h1>
  <h2>{{ messageStore.reversedMessage }}</h2>
</template>

<script>
import { mapStores } from 'pinia'
import { messageStore } from '../store/index.js'

export default {
  computed: {
    ...mapStores(messageStore)
  }
}
</script>
