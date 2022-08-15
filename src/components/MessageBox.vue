<template>
  <div :class="[messageContainerStyle]" class="flex flex-column w-full items-center">
    <img v-if="message.sender === 'bot'" class="w-12" alt="bot logo" src="@/assets/images/bot.png">
    <div :class="[messageBoxStyle]" class="message-box py-2 px-4 rounded flex">
      {{ message.content }}
    </div>
    <div v-if="message.sender !== 'bot'"
      class="ml-2 bg-regal-blue w-12 h-12 flex justify-center items-center text-white rounded-full">
      J
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => ({ sender: 'bot', content: 'deafult content' })
    }
  },
  computed: {
    messageContainerStyle() {
      return this.message.sender === 'bot' ? 'justify-start' : 'justify-end'
    },
    messageBoxStyle() {
      return this.message.sender === 'bot' ? 'border-2 border-bot-orange text-start' : 'bg-sky-blue  flex justify-end'
    },
  }
}
</script>

<style scoped>
.message-box {
  height: fit-content;
  min-width: 200px;
  max-width: 600px;
}

</style>