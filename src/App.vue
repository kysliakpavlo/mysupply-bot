<template>
  <div class="mt-10 mx-2 p-10 border-2">
    <MessageBox v-for="(message, i) in messages" :key="i" :message="message" class="my-4" />
    <div v-show="isStart" class="w-full flex flex-col justify-center items-center mt-24">
      <OfferInput :offer-status="offerStatus" @user-offer="userOffer" @unasnwered-offer="unasnweredOffer"/>
    </div>
  </div>
  <div class="w-full flex flex-col justify-center items-center mt-10">
    <button @click="startNegotiation"
      class="bg-neutral-200 px-12 py-4 text-2xl border-neutral-400 border-2 text-neutral-600 ">
      Start Over Negotiation
    </button>
  </div>
</template>

<script>
import MessageBox from './components/MessageBox.vue';
import OfferInput from './components/OfferInput.vue';
export default {
  name: 'App',
  components: {
    MessageBox,
    OfferInput
  },
  data() {
    return {
      messages: [],
      isStart: false,
      offerStatus: 'none',
    }
  },
  created() {
    this.startNegotiation()
  },
  methods: {
    startNegotiation() {
      this.messages = []
      this.isStart = false
      this.messages.push(
        { sender: 'bot', content: 'Hello' },
      )
      setTimeout(() => {
        this.messages.push(
          { sender: 'bot', content: 'The current price of 10.000€ is too high. Please make lower bid. What is your bid?' },
        )
        this.isStart = true
        this.offerStatus = 'start' + Date.now()
      }, 1500)
    },
    userOffer(e) {
      this.isStart = false // + '€'
      this.messages.push(
        { sender: 'user', content: `${e}€` },
      )
      setTimeout(() => {
        if (e > 3000) {
          this.messages.push(
            { sender: 'bot', content: `Your bid is ${e}€ is too high. Please make lower bid. What is your bid?` },
          )
          this.isStart = true
          this.offerStatus = 'start' + e
        } else {
          this.messages.push(
            { sender: 'bot', content: `You got the deal with ${e}€. \n Congratulations!` },
          )
        }
      }, 2000)
    },
    unasnweredOffer() {
      this.isStart = false
      this.messages.push(
        { sender: 'bot', content: 'Please, hurry up make a bid' },
      ),
      setTimeout(()=>{
        this.isStart = true
        this.offerStatus = 'start' + Date.now()
      }, 1500)
    }
  }
}
</script>

<style>
.offer-area {
  width: fit-content;
}
</style>
