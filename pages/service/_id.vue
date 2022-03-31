<template>
  <section>
    <div
      class="text-center"
      v-if="allservices.loading"
    >
      <v-overlay>
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </div>
    <div v-else>
    <v-item-group>
      <v-container>
        <div
            class="loadingReg d-flex justify-center"
            centered
            v-if="this.$store.state.servieses.loading"
          >
            <v-progress-circular
              :size="50"
              color="#43A047"
              indeterminate
            ></v-progress-circular>
        </div>
        <v-row>
          <v-col
            v-for="(Proudcts, i) in allservices.data"
            :key="i"
            :cols="i"
            md="4"
          >
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card class="mx-auto" max-width="344"  :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }">
              <v-img :src="Proudcts.image" height="200px"></v-img>

              <v-card-title class="text-truncate"> {{ Proudcts.title }} </v-card-title>

              <v-card-subtitle> {{ Proudcts.description }} </v-card-subtitle>
              <v-card-subtitle>
                <span bold>Price:</span> {{ Proudcts.price }}
              </v-card-subtitle>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  class="mx-2"
                  dark
                  color="#30c88d"
                  @click="onSubmit(Proudcts.id)"
                >
                  <v-icon dark> mdi-cart-outline </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
             </v-hover>
          </v-col>
        </v-row>
        <template>
          <v-snackbar
            v-model="snackbar"
            color="blue"
            :timeout="2500"
            :value="true"
            absolute
            centered
            shaped
            bottom
            v-if="this.$store.state.servieses.serviceMsg"
          >
            {{ this.$store.state.servieses.serviceMsg }}
          </v-snackbar>
        </template>
      </v-container>
    </v-item-group>
    </div>
  </section>
</template>

<style scoped>
.head_ps {
  min-height: 300px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.service {
  margin: auto;
  background: #fff;
  margin-top: -100px;
  border-radius: 19px;
  display: block;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
  border: 1px solid #f5f5f5;
  padding: 20px;
}
</style>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      timeout: 2000,
      snackbar: false,
      snackbarError: false,
    }
  },

  validate({ params }) {
    return !isNaN(params.id)
  },
  computed: {
    ...mapGetters(['allservices', 'AllListOfCarts']),
  },
  methods: {
    ...mapActions(['getListCart', 'getservices', 'addToCart']),
    onSubmit(id) {
      this.addToCart(id)
      setTimeout(() => (this.snackbar = true))

      if (this.$cookies.get('user')) {
      }
    },
    // addToCart(id){
    //   alert("what is",id)
    // }
  },
  mounted() {
    // alert(this.$route.params.id)
    this.getservices(this.$route.params.id)
    // this.getListCart()
  },
}
</script>
