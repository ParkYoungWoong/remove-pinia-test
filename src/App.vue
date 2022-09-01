<template>
  <button @click="messageStore.handler">
    Handle
  </button>
  <Container />
</template>

<script>
import { mapStores } from 'pinia'
import { messageStore } from './store/index.js'
import Container from './components/Container.vue'

export default {
  components: {
    Container
  },
  computed: {
    ...mapStores(messageStore)
  }
}
</script>
