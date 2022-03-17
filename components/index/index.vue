<template>
  <div>
    <Head />
    <Services />
    <MobileApp />
   
  </div>
</template>
<script>
import Head from "./vue/head.vue";
import Services from "./vue/Services.vue";
import MobileApp from "./vue/mobileApp.vue";
import Box from './vue/box.vue'

export default {
  components: {
    Head,
    Services,
    MobileApp,
  Box
  },
};
</script>
<style scoped>
</style>