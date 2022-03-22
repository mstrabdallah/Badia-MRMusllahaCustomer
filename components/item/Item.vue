<template>
  <tr>
    
      <v-btn color="indigo" fab class="white--text" x-small >
        <v-icon small>add_shopping_cart</v-icon>
      </v-btn>
    
  </tr>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    changeValue(val) {
      if (val) {
        this.count++
      } else {
        if (this.count > 1) {
          this.count--
        }
      }
    },
    addToCart() {
      this.$store.dispatch("addToCard", {count: this.count, ...this.item})
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
