<template>
  <v-container>
    <section  class="head bg">
    <h2>{{$t('service-on')}}</h2>
    <p>
      {{$t('Home-header')}}
      {{$t('Home-header2')}}

    </p>

    <div class="groups_but">
      <v-btn outlined >
         <NuxtLink :to="localePath('/about')">
         {{$t('About Us')}}
         </NuxtLink>

      </v-btn>

    </div>

    <a class="but_down" href="#serv"><font-awesome-icon icon="angle-down" class="fa" /></a>

  </section>
      <Services />

  </v-container>
</template>

<script>
import Services from "./vue/Services.vue";
import { mapGetters } from "vuex";

export default {
components: {
    Services,
  },
  computed: {
    ...mapGetters(["allAuth", "AllCityDeatils"]),
  },
}
</script>

<style>
.head {
  /* min-height: calc(100vh - 120px); */
  padding: 250px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
      position: relative;
}

.bg {
  /* background-image: url(https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_2880,h_1368/https://motorarbitrage.com.au/wp-content/uploads/hero-image.jpg);   */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.head h2{

    margin-top: -200px;
 padding-bottom: 20px;
    color: #444;
    font-weight: 900;
    font-size: 4.5em;
}
.head p{
        text-align: center;
}
.groups_but{
    margin-top: 30px;
}

.but_down{
 position: absolute;
    bottom: 70px;
    background: #cccccc24;
    padding: 20px;
    border-radius: 50%;

}
.but_down svg{
    font-size: 20px;
}
</style>
