<template>
  <section id="serv" class="container_cc serv">

    <div
      class="text-center"
      v-if="AllCategories.loading"
    >
      <v-overlay>
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </div>
    <div v-else>
    <h2>{{$t('Popular Services')}}</h2>

    <v-container>
      <v-row>
        <v-col
          v-for="(Proudcts, i) in AllCategories.data.data"
          :key="i"
          :cols="i"
          md="4"
          class="text-center"
        >
          <v-hover v-slot="{ hover }" open-delay="200">
            <nuxt-link :to="`/Category?parent=${Proudcts.id}`">
              <v-card
                class="mx-auto"
                rounded-t-0
                max-width="344"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="Proudcts.image" height="200px"></v-img>

                <v-card-title> {{ Proudcts.name }} </v-card-title>

                <!-- <v-card-subtitle> {{ Proudcts.id }} </v-card-subtitle> -->

                <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="deep-purple accent-4"
                nuxt
                :to="`/Category?parent=${Proudcts.id}`"
              >
                {{ Proudcts.name }}
              </v-btn>
            </v-card-actions> -->
              </v-card>
            </nuxt-link>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['AllCategories']),
  }
}
</script>
<style scoped>
.serv {
  background: #f8f8f8;
  padding: 10px;
  padding-bottom: 50px;
  min-height: 100vh;
  align-items: center;
}
.serv h2 {
  text-align: center;
  padding: 20px;
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
.v-card__title {
  display: block;
}
</style>
