<template>
  <header class="header container_cc" :class="scrolled ? 'headerFixed' : ''">
    <div class="header_p">
      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/logo.svg" />
      </NuxtLink>

      <div class="search">
        <input type="text" placeholder="Search For Services" />

        <v-select
          class="select_head"
          :items="AllCityDeatils.data.data"
          label="Location"
          item-text="name"
          item-value="id"
          v-model="city"
          outlined
          dense
          @change="onChangeCity"

          prepend-inner-icon="mdi-map-marker"
        >


        </v-select>
      </div>

      <nav class="menu">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')">
              {{ $t('Home') }}
            </NuxtLink>
          </li>

          <li v-if="this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/about')">{{
              $t('About')
            }}</NuxtLink>
          </li>

          <li v-if="this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/cart')">
              <Checkout />
            </NuxtLink>
          </li>

          <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/about')">{{ $t('About') }}</NuxtLink>
          </li>

          <!-- <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/card')">
              <Checkout />
            </NuxtLink>
          </li> -->

          <li v-if="this.$store.state.auth.checkAuth">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" color="primary" icon>
                  <font-awesome-icon icon="user" class="fa" />
                  {{ $t('My Account') }}
                </div>
              </template>
              <v-list>
                <v-list-item>
                    <NuxtLink  :to="localePath('/UserProfile')">{{ $t('UserProfile') }}</NuxtLink>

                </v-list-item>
              </v-list>
                <v-list-item>
                    <NuxtLink  :to="localePath('/listOrder')">{{ $t('Order List') }}</NuxtLink>

                </v-list-item>
              </v-list>
              <v-list>
                <v-list-item>
                  <div style="cursor: pointer" @click="Logout">
                    <v-list-item-title >{{ $t('Logout') }}</v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu>
          </li>

          <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink class="login_" :to="localePath('/register')">{{
              $t('Register')
            }}</NuxtLink>
          </li>

          <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink class="login_" :to="localePath('/login')">{{
              $t('Login')
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="mob_nav">
        <Menu />
      </div>
    </div>
  </header>
</template>

<script>
import 'axios';

import Menu from './menu.vue'
import Checkout from '../../components/checkout/checkout.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    // items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    city:null,
    scrolled: false,
  }),

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.getCity();
    // this.getAllUsers()
  },


  // computed:{
  // ...mapGetters(['all'])
  // },
  methods: {
    ...mapActions(['Logout', 'getCity', 'UpdateCity']),
    handleClick(index) {
      this.items[index].click.call(this)
    },

    handleScroll() {
      if (window.scrollY < 41) {
        this.scrolled = false
      } else {
        this.scrolled = true
      }
    },

    onChangeCity(){
      console.log(this.city);
      this.UpdateCity(this.city)
    }

  },
  computed: {
    ...mapGetters(['AllCityDeatils']),
    },
  components: {
    Menu,
  },
}
</script>

<style scoped>
header {
  padding: 0px 100px;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
  z-index: 99;
  background: #fff;
  position: absolute;
  top: 41px;
  width: 100%;
}
.headerFixed {
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0px;
}

.header_p {
  display: flex;
  align-items: center;
  height: 80px;
}
.headerFixed .header_p {
  height: 60px;
  transition: 1s;
}
.header_p li a.nuxt-link-exact-active {
  color: #bf804b;
  padding-bottom: 10px;
}
.menu ul li[data-v-f21a83aa] {
  text-align: center;
  line-height: normal;
}
a.nuxt-link-exact-active.login_ {
  border: 1px solid #bf804b;
}
.login_ {
  border: 1px solid #ccc;
  padding: 7px 30px;
  border-radius: 5px;
}

.signup_ {
  border: 1px solid #ccc;
  padding: 7px 30px;
  border-radius: 5px;
}
.menu {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

.menu ul {
  font-size: 16px;
  display: flex;
}
.menu ul li:lang(en) {
  margin-left: 3em;
}

.menu ul li:lang(ar) {
  margin-right: 3em;
}

.menu ul li a:hover {
  color: #bf804b;
}

.logo img {
  height: 50px;
  align-items: center;
  display: flex;
}
.search {
  display: flex;
  align-items: center;
}
.search:lang(en) {
  margin-left: 30px;
}
.search:lang(ar) {
  margin-right: 30px;
}
.select_head {
  margin: 0px 3px;
}

.search input {
  border: 1px solid #9e9e9e;
  padding: 9px 20px;
  border-radius: 8px;
  width: 200px;
  margin: 0px;
}

.select_head {
  height: 40px;
  border-radius: 6px;
}
.mob_nav {
  display: none;
  font-size: 20px;
  color: #bf804b;
}
.theme--light.v-list-item--disabled {
  color: rgba(0, 0, 0, 0.38);
  background: #bf804b;
  color: #fff;
}
.select_head[data-v-f21a83aa]{
  width: 200px;
}

@media (max-width: 768px) {
  .search {
    display: none;
  }
  .mob_nav {
    display: block;
  }
  .menu ul {
    display: none;
  }
}
</style>
