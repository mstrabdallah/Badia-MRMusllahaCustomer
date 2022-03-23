<template>
  <section>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="(Proudcts, i) in allProudcts.data"
            :key="i"
            :cols="i"
            md="4"
          >
            <v-card class="mx-auto" max-width="344">
              <v-img :src="Proudcts.image" height="200px"></v-img>

              <v-card-title> {{ Proudcts.title }} </v-card-title>

              <v-card-subtitle> {{ Proudcts.description }} </v-card-subtitle>
              <v-card-subtitle>
                <span bold>Price:</span> {{ Proudcts.price }}
              </v-card-subtitle>

              <v-card-actions>
                <v-spacer></v-spacer>
                <form @submit.prevent="onSubmit">
                  <v-text-field


                    v-model="prodName"
                    :value="Proudcts.id"
                    single-line
                  >
                  </v-text-field>

                  <v-btn type="submit" class="mx-2" fab dark color="indigo">
                    <v-icon dark> mdi-cart-outline </v-icon>
                  </v-btn>
                </form>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
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
  data(){
    return {
      prodName:null
    }
  },
  computed: {
    ...mapGetters(['allProudcts']),
  },
  methods: {
    ...mapActions(['getProducts', 'addToCart']),
    onSubmit(){
      this.addToCart(this.prodName)
    }
  },
  mounted() {
    this.getProducts()
    // this.addToCart()
  },
}
</script>
