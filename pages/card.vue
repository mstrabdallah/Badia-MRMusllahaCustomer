<template>
  <v-container>
    <h1 class="text-center">Your Cart Items</h1>
    <div
        v-if="this.$store.state.carts.cartLength > 0">
      <v-banner
        two-line
        v-for="(SingleCart, j) in AllListOfCarts.data.services"
        :key="j"
      >
        <v-avatar slot="icon" size="200" tile color=" accent-4" >
          <img :src="SingleCart.image" />
        </v-avatar>
        <!-- <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img :src="SingleCart.image"></v-img>
          </v-avatar> -->

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
    <div
        v-if="this.$store.state.carts.cartLength <= 0">
          <h2>not data item</h2>
    </div>
     <v-fab-transition>
      <v-btn

        color="#cd3"
        dark
        bottom
        right
        class="v-btn--example"
      >
        Check Out
      </v-btn>
    </v-fab-transition>
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
      console.log(id);
      this.cartQuantity.quantity = quantity - 1 + 2

      this.cartQuantity.id = id
      this.UpdateCart(this.cartQuantity)
      // setTimeout(() => this.getListCart(), 2000)

      // this.getListCart()
    },

    decrement(quantity, id) {
      if (quantity <= 0) {
        return
      } else {
        this.cartQuantity.quantity = quantity - 1
        this.cartQuantity.id = id
        this.UpdateCart(this.cartQuantity)
        // setTimeout(() => this.getListCart(), 2000)

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
