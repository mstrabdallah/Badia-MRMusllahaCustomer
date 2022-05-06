<template>
  <section id="serv" class="container_cc">
    <div class="subCat_ page">
      <HeadSub />

      <div class="sub_comp">
        <v-btn elevation="2" >{{$t('I Company Client')}}</v-btn>
      </div>

      <template v-if="AllCategories.loading">
        <LoadingP />
      </template>
      <v-row v-else>
        <template v-if="AllCategories.subCat.length === 0">
          <NoData data="There are no subcategories here" :type="1" />
        </template>
        <v-col
          v-else
          v-for="(subCateg, i) in AllCategories.subCat"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          class="text-center"
        >
          <nuxt-link :to="localePath(`/Service/${subCateg.id}`)">
            <div class="subCategorie_">
              <v-img :src="subCateg.image" max-height="125"></v-img>
              <h3>{{ subCateg.name }}</h3>
            </div>
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: this.$i18n.t('Subcategories'),
    }
  }
}
</script>
<style scoped>
 
</style>
