<template>
  <div>

    <div v-if="allAuth.checkAuth">
      <IndexUser />
    </div>
    <div v-else>
      <Head />
      <Services />
      <!-- <MobileApp /> -->
    </div>


  </div>
</template>
<script>
import Head from "./vue/head.vue";
import Services from "./vue/Services.vue";
import MobileApp from "./vue/mobileApp.vue";
import Box from './vue/box.vue';
import IndexUser from "./indexUser.vue";
import { mapGetters } from "vuex";


export default {
  components: {
    Head,
    Services,
    MobileApp,
    Box,
    IndexUser,

  },
  computed: {
    ...mapGetters(["allAuth", "AllCityDeatils"]),
  },
};
</script>
<style scoped>
</style>
