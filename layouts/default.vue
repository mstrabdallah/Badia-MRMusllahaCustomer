
<template>
<v-app>
<div class="app" >
<Header />
  <Nuxt />
<Footer />
</div>
</v-app>
</template>
<script>
import Header from './header/header.vue'
import Footer from './footer/footer.vue'
export default{
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  components:{
    Header,
    Footer
  },
}
</script>

<style>
.app:lang(ar){
direction: rtl;
}
*{
  margin: 0px;
  padding: 0px;
  
}
.v-application a{
  color: none;
}
</style>
