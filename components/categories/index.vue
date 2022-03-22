<template>
  <div>


    <h1
    center
    >Categories</h1>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 6"
            :key="n"
            cols="12"
            md="4"
          >

            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Top western road trips
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
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
export default {
   data: () => ({
       show: false,
    }),
    mounted:{

    }
}
</script>

<style>

</style>
