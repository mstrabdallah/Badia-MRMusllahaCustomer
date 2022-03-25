<template>
  <v-container>
    <div>
      <v-banner
        single-line
        v-for="(SingleCart, j) in AllListOfCarts.data.services"
        :key="j"
      >
        <v-avatar slot="icon" color=" accent-4" size="100">
          <img :src="SingleCart.image" />
        </v-avatar>

        <h4>{{ SingleCart.title }}</h4>
        <span>Price: {{ SingleCart.price }}</span>
        <template v-slot:actions>
          <v-btn
            fab
            :rounded="false"
            small
            @click="decrement(SingleCart.quantity, SingleCart.id)"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>

          <span class="counter">
            {{ SingleCart.quantity }}
          </span>
          <v-btn
            fab
            @click="increment(SingleCart.quantity, SingleCart.id)"
            small
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <v-btn
            fab
            dark
            small
            :rounded="false"
            @click="Delete(SingleCart.id)"
            color="red"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-banner>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      counter: null,
      cartQuantity: {
        quantity: 0,
        id: '',
      },
    }
  },

  computed: {
    ...mapGetters(['AllListOfCarts']),
  },
  methods: {
    ...mapActions(['getListCart', 'DeleteCart', 'UpdateCart']),

    increment(quantity, id) {
      this.cartQuantity.quantity = quantity - 1 + 2

      this.cartQuantity.id = id
      this.UpdateCart(this.cartQuantity)
      setTimeout(() => this.getListCart(), 1000)

      // this.getListCart()
    },

    decrement(quantity, id) {
      if (quantity <= 0) {
        return
      } else {
        this.cartQuantity.quantity = quantity - 1

        this.cartQuantity.id = id
        this.UpdateCart(this.cartQuantity)

        setTimeout(() => this.getListCart(), 1000)

        // setTimeout(, 1000)
      }
    },

    Delete(id) {
      this.DeleteCart(id)
      setTimeout(() => this.getListCart(), 1000)

      // this.getListCart()
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice
    },

    // onSubmit(){
    //   this.addToCart(this.prodName)
    // }
  },
  mounted() {
    this.getListCart()
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
