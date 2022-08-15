<template>
  <div>
    <div class="w-60 bg-sky-blue rounded-full h-2">
      <div class="bg-regal-blue h-2 rounded-full" :style="{ width: loadingBarWidth + '%' }" />
    </div>
    <div class="text-sm text-center"><b>{{ seconds }}</b> seconds</div>

  </div>

  <div class="offer-area flex flex-row py-6 px-16 border-2 border-sky-blue rounded mt-4">

    <label class="relative block">
      <span class="absolute inset-y-0 right-12 flex items-center pl-3 text-regal-blue font-medium">
        €
      </span>
      <input v-model.number="bid" type="number" class="border-2 border-regal-blue rounded h-10 w-60 px-4" />
    </label>

    <button @click="sendOffer" class="text-white bg-regal-blue rounded px-4 ml-4 h-10 font-medium">SEND</button>
  </div>
</template>

<script>
export default {
  name: 'OfferInput',
  emits: ["userOffer", "unasnweredOffer"],
  props: {
    offerStatus: {
      default: 'none'
    }
  },
  data() {
    return {
      maxSeconds: 15,
      seconds: 15,
      counter: null,
      bid: '',
    }
  },

  computed: {
    loadingBarWidth() {
      return parseFloat((this.seconds / this.maxSeconds) * 100).toFixed(0)
    }
  },

  methods: {
    startTimeCount() {
      this.counter = setInterval(() => {
        this.seconds === 0 ? this.unansweredOffer() : this.seconds--
      }, 1000);
    },
    clearCounter() {
      clearInterval(this.counter)
      this.counter = null
    },
    sendOffer() {
      if (typeof this.bid === 'number' && this.bid !== 0) {
        this.clearCounter()
        this.$emit('userOffer', this.bid)
      }
    },
    unansweredOffer() {
      this.clearCounter()
      this.$emit('unasnweredOffer')
    }
  },

  watch: {
    offerStatus() {
      this.maxSeconds = 15
      this.seconds = 15
      this.bid = ''
      clearInterval(this.counter)
      this.startTimeCount()
    }
  }
}
</script>

<style scoped>
.offer-area {
  width: fit-content;
}
</style>