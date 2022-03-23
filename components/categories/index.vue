<template>
  <div>


    <h1
    class="text-center mt-5"
    >Categories</h1>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="(Proudcts,i) in allProudcts.data" :key="i"
            :cols="i"
            md="4"
          >

            <v-card
              class="mx-auto"
              max-width="344"

            >
              <v-img
                :src="Proudcts.image"
                height="200px"
              ></v-img>

              <v-card-title class="text-truncate">
                {{Proudcts.title}}
              </v-card-title>

              <v-card-subtitle class="text-truncate">
                {{Proudcts.description}}
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  nuxt
                  to="/Categories/services"
                >
                  GO To Services
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
   data: () => ({
       show: false,
    }),

    computed:{
    ...mapGetters(['allProudcts'])

  },
  methods:{
    ...mapActions(['getProducts'])
  },
  mounted(){
    this.getProducts();
  }
}
</script>

<style>

</style>
