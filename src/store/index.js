import { defineStore } from 'pinia'

// defineStore(이름, 옵션)
export const messageStore = defineStore('message', {
  // data
  state: () => ({
    message: 'Hello World!'
  }),
  // computed
  getters: {
    reversedMessage: (state) => {
      return state.message.split('').reverse().join('')
    }
  },
  // methods
  actions: {
    handler() {
      this.message += '!'
    }
  }
})
