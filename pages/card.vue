<template>
  <v-container>
    <v-banner single-line>
      <v-avatar slot="icon" color=" accent-4" size="100">
        <img src="/images/02.png" />
      </v-avatar>

      <h4>Title</h4>
      <span>Price</span>
      <template v-slot:actions>
        <v-btn fab :rounded="false" small @click="decrement">
          <v-icon>mdi-minus</v-icon>
        </v-btn>

        <span class="counter">
          {{ counter }}
        </span>
        <v-btn fab @click="increment" small>
          <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-btn
          fab
          dark
          small
          :rounded="false"
          color="red"

        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-banner>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      counter: null,
    }
  },
  methods: {
    increment() {
      this.counter += 1
    },
    decrement() {
      if (this.counter <= 0) {
        return
      } else {
        this.counter -= 1
      }
    },
  },
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    cart() {
      return this.$store.getters.getCart
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice
    },
  },
}
</script>

<style scoped>
.price {
  background-color: #ff0000cc;
  color: white;
  font-weight: 900;
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
}
.counter {
  border: 1px solid #ccc;
  padding: 8px 20px;
  border-radius: 5px;
}
.v-btn--round {
  border-radius: 5px;
}
</style>
