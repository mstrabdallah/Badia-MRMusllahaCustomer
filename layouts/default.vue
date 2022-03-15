<template>
  <div class="app">
    <v-app>
       <HeaderTop />
      <Header />
      <Nuxt />
      <Footer />
    </v-app>
  </div>
</template>
<script>
import HeaderTop from './header/header-top.vue'
import Header from "./header/header.vue";
import Footer from "./footer/footer.vue";
import { mapActions } from "vuex";
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
  components: {
    Header,
    Footer,
    HeaderTop
  },
  mounted() {
    this.$vuetify.rtl = this.$i18n.locale === 'ar' ? true:false;
    this.getAuth();
  },
  methods: {
    ...mapActions(["getAuth"]),
  },
};
</script>

 
<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400&display=swap');

.app:lang(ar) {
  direction: rtl;
}
* {
  margin: 0px;
  padding: 0px;
}
body,.v-application {
  font-size: 14px;
font-family: 'Almarai', sans-serif;
  color: #444;
}
ul {
  list-style-type: none;
}
ul,
p {
  margin: 0px;
  padding: 0px;
  margin-bottom: 0px;
}
a,
.v-application a {
  color: #444;
  text-decoration: none;
}
.container_cc {
  padding: 0px 100px;
}

.page {
  margin-top: 70px;
}
.page_cc {
  position: relative;

  min-height: 550px;
  border-radius: 4px;
  border: 1px solid #bf804b;
  padding-bottom: 30px;
  background: #f5f5f5;
}
.page h1 {
      min-height: 40px;
    min-width: 130px;
  text-align: center;
  background: #bf804b;
  width: max-content;
  margin-left: 20px;
  margin-top: -20px;
  padding: 5px 35px;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 30px;
  font-size: 26px;
}
.page h1:lang(ar){
 margin-right: 20px;
}
.span_color {
  color: #bf804b;
}

.flex {
  display: flex;
  align-items: center;
}

/* pages style */

.tickets_add {
    position: absolute;
    bottom: 11px;
    right: 10px;
    font-size: 31px;
    background-color: #2b4a4b !important;
    color: #fff;
    border-radius: 50%;
    width: 60px;
    height: 60px!important;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.tickets_add:lang(ar){
  right: auto;
  left: 10px;
}
/* bootstrap */

button.close {
  border: none;
  padding: 5px 13px;
  border-radius: 5px;
  cursor: pointer;
}

select {
  margin-top: 20px;
  padding: 6px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
}

/* vuetify */

.v-application .success {
  background-color: #2c4d4d !important;
  border-color: #2c4d4d !important;
}
.v-application .green--text.text--darken-1 {
    color: #2c4b4c !important;
    caret-color: #43A047 !important;
    border: 1px solid #2c4b4c;
}

.v-card__actions{
  margin-top: 30px;
}
.v-application ul, .v-application ol {
    padding: 0px;
}
.v-application .text-h5{
       font-family: unset!important;
}
.v-application .indigo {
    background-color: #2b4a4b !important;
}
.v-card{
      padding: 10px 0px 20px 0px;
}

.v-navigation-drawer{
      position: fixed;
}
/* fa */
.fa{

    font-size: 15px;
    margin: 0px 5px;

}
@media (max-width: 1100px) {
  .container_cc {
    padding: 0px 50px;
  }
}
</style>
 