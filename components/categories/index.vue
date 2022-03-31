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
    <h2 class="text-center mt-10">{{$t('Popular Services')}}</h2>
    <v-container>
      <v-row>
        <v-col
          v-for="(subCateg, i) in AllCategories.subCat"
          :key="i"
          :cols="i"
          md="4"
          class="text-center"
        >
          <v-hover v-slot="{ hover }" open-delay="200">
            <nuxt-link :to="`/Service/${subCateg.id}`">
              <v-card
                class="mx-auto"
                max-width="344"
                rounded-t-0
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="subCateg.image" height="200px"></v-img>

                <v-card-title> {{ subCateg.name }} </v-card-title>

                <!-- <v-card-subtitle> {{ subCateg.id }} </v-card-subtitle> -->

                <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="deep-purple accent-4"
                nuxt
                :to="`/Service/${subCateg.id}`"
              >
                {{ subCateg.name }}
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
  },
  methods: {
    ...mapActions(['getSubCategories']),
  },
  mounted() {
    this.getSubCategories(this.$route.query.parent)
  },
}
</script>
<style scoped>
.v-card__title {
  display: block;
}
</style>
