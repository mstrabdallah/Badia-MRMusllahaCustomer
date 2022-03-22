<template>
  <section>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="n in 2" :key="n" cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title> Top western road trips </v-card-title>

              <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
              <v-card-subtitle> <span bold>Price:</span> 1,000 EGP </v-card-subtitle>

              <v-card-actions>

                <v-spacer></v-spacer>

                <v-btn class="mx-2" fab dark  color="indigo"  >
                  <v-icon
                    dark
                    > mdi-cart-outline </v-icon>
                </v-btn>



              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </section>
</template>

<script>

export default {
// computed: {
//     ...mapGetters(["products"]),
//     product() {
//       return this.products.filter(
//         (product) => product.id === parseInt(this.$route.params.id)
//       )[0];
//     },
//   },
//   methods: mapActions(["addToCart"]),
};

</script>
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
.v-card__actions{
  margin-top:0px;
}
</style>

