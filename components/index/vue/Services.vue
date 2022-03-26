<template>
  <section id="serv" class="container_cc serv">
    <h2>popular services</h2>

    <v-container>
      <v-row>
        <v-col
          v-for="(Proudcts, i) in AllCategories.data.data"
          :key="i"
          :cols="i"
          md="4"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img :src="Proudcts.image" height="200px"></v-img>

            <v-card-title> {{ Proudcts.name }} </v-card-title>

            <v-card-subtitle> {{ Proudcts.id }} </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="deep-purple accent-4"
                nuxt
                :to="`/Category?parent=${Proudcts.id}`"
              >
                {{ Proudcts.name }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['AllCategories']),
  },
  methods: {
    ...mapActions(['getCategories']),
    // onSubmit(){
    //   this.addToCart(this.prodName)
    // }
  },
  mounted() {
    setTimeout(() => this.getCategories(), 2000)

  },
}
</script>
<style scoped>
.serv {
  background: #f8f8f8;
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
  align-items: center;
}
.serv h2 {
  text-align: center;
  padding: 40px;
  font-weight: bold;
  font-size: 2em;
}
.sec_body {
  align-items: center;
}
.crad_s {
  padding: 0px;
  margin-bottom: 30px;
}
</style>
