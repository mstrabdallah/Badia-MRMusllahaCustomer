<template>
  <v-container>
    <div v-if="this.$store.state.carts.cartLength <= 0">
      <h2 class="text-center">Wait for Your data item</h2>
    </div>
    <div class="loadingReg d-flex justify-center" centered v-if="this.$store.state.carts.loading">
      <v-progress-circular
        :size="50"
        color="#43A047"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-if="this.$store.state.carts.cartLength > 0">
      <h1 class="text-center" v-if="!this.$store.state.carts.loading">Your Cart Items</h1>
      <v-banner
        two-line
        v-for="(SingleCart, j) in AllListOfCarts.data.services"
        :key="j"
      >
        <v-avatar slot="icon" size="200" tile color=" accent-4">
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
            v-if="SingleCart.quantity > 1"
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

      <v-spacer></v-spacer>
      <v-banner>
        <div class="msg">
          <p></p>
        </div>
      </v-banner>
      <template>
        <v-snackbar
          v-model="snackbar"
          color="blue"
          :timeout="1500"
          :value="true"
          absolute
          centered
          shaped
          bottom
          v-if="this.$store.state.carts.msg"
        >
          {{ this.$store.state.carts.msg }}
        </v-snackbar>
      </template>
      <template>
        <v-snackbar
          v-model="snackbar"
          color="blue"
          :timeout="1500"
          :value="true"
          absolute
          centered
          shaped
          bottom
          v-if="!this.$store.state.carts.msg"
        >
          {{ this.$store.state.carts.msg }}
        </v-snackbar>
      </template>

      <v-banner two-line v-if="!this.$store.state.carts.loading">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Count of Items</th>
                <th class="text-left">Price</th>
                <th class="text-left">vat</th>
                <th class="text-left">Total Price</th>
                <th class="text-rigth"></th>

                <!-- <th class="text-right" expanded-item></th> -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ AllListOfCarts.cartLength }}</td>
                <td>{{ AllListOfCarts.data.price }}</td>
                <td>{{ AllListOfCarts.data.vat }}</td>
                <td>{{ AllListOfCarts.data.total_price }}</td>
                <td class="checkoutBtn" style="text-align: end">
                  <v-fab-transition>
                    <v-btn color="#30c88d" dark nuxt to="/Checkout">
                      Check Out
                    </v-btn>
                  </v-fab-transition>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!-- totalPrice : {{ AllListOfCarts.data.total_price }} -->
      </v-banner>

      <!-- <div class="text-right mt-10">
        <template>
                    <v-fab-transition>
                      <v-btn
                        color="#30c88d"
                        dark
                        bottom
                        right
                        class="v-btn--example"
                      >
                        Check Out
                      </v-btn>
                    </v-fab-transition>
                  </template>
      </div> -->
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
      timeout: 2000,
      snackbar: false,
    }
  },

  computed: {
    ...mapGetters(['AllListOfCarts']),
  },
  methods: {
    ...mapActions(['getListCart', 'DeleteCart', 'UpdateCart']),

    increment(quantity, id) {
      console.log(id)
      this.cartQuantity.quantity = quantity - 1 + 2

      this.cartQuantity.id = id
      this.UpdateCart(this.cartQuantity)

      if ((this.$store.state.carts.status = 200)) {
        setTimeout(() => (this.snackbar = true))
      }
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
        if ((this.$store.state.carts.status = 200)) {
          setTimeout(() => (this.snackbar = true))
        }

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
.checkoutBtn {
  text-align: end;
}
.v-data-table > .v-data-table__wrapper tbody tr td:last-child {
  text-align: end;
}
.loadingReg {
  margin: auto;
}
</style>
