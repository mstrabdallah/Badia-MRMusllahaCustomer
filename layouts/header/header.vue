<template>
  <header class="header container_cc" :class="scrolled ? 'headerFixed' : ''">
    <div class="header_p">
      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/logo.svg" />
      </NuxtLink>

      <div class="search">
        <!-- <input type="text" placeholder="Search For Services" /> -->

        <v-select
          class="select_head"
          :items="AllCityDeatils.data.data"
          :label="$t('Location')"
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
          <li class="box_op_header d-none d-sm-block">
            <NuxtLink :to="localePath('/')">
              <font-awesome-icon icon="house" class="fa" />
              <span class="navM_">{{ $t("Home") }}</span>
            </NuxtLink>
          </li>

          <li v-if="this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/about')">
              <font-awesome-icon icon="user-secret" class="fa" />
              <span class="navM_">{{ $t("About") }}</span>
            </NuxtLink>
          </li>





          <!-- <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/cart')">
              <Checkout />
            </NuxtLink>
          </li> -->
          <li v-if="this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/cart')">
              <v-badge
                  overlap
                  :content="`${$store.state.carts.cartLength}`"
                >
                  <v-btn icon>
                    <v-icon  >mdi-cart-outline</v-icon>
                  </v-btn>
                </v-badge>
            </NuxtLink>
          </li>

         <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/about')">
              <font-awesome-icon icon="user-secret" class="fa" />
              <span class="navM_">{{ $t("About") }}</span>
            </NuxtLink>
          </li>


          <li v-if="this.$store.state.auth.checkAuth">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on"  >
                  <font-awesome-icon icon="user" class="fa" />
                  {{ $t('My Account') }}
                </div>
              </template>

              <v-list>
                  <NuxtLink :to="localePath('/UserProfile')">
                <v-list-item link>
                  <v-list-item-title>
                    {{$t('UserProfile')}}
                  </v-list-item-title>
                </v-list-item>
                  </NuxtLink>
              </v-list>

              <v-list>
                  <NuxtLink :to="localePath('/listOrder')">
                  <v-list-item link>
                  <v-list-item-title>
                  {{
                    $t('Order List')
                  }}
                  </v-list-item-title>
                  </v-list-item>
                  </NuxtLink>

              </v-list>
              <v-list>
                <v-list-item link>
                  <div style="margin:auto" @click="Logout">
                    <v-list-item-title>{{ $t('Logout') }}</v-list-item-title>
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
          <li class="box_op_header">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div v-if="$i18n.locale === 'ar'" class="flex">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    width="24px"
                    src="/saflag.png"
                  />
                </div>
                <div class="flex" v-else>
                  <img
                    v-bind="attrs"
                    v-on="on"
                    width="24px"
                    src="/usflag.png"
                  />
                </div>
              </template>
              <v-list>
                <v-list-item :disabled="this.$i18n.locale === 'ar'">
                  <a @click="changeLanguage('ar')">
                    <img width="24px" src="/saflag.png" />
                  </a>
                </v-list-item>
                <v-list-item>
                  <a @click="changeLanguage('en')">
                    <img width="24px" src="/usflag.png" />
                  </a>
                </v-list-item>
              </v-list>
            </v-menu>
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
import 'axios'

import Menu from './menu.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    // items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    city: null,
    scrolled: false,
  }),

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    // this.getCity()
    // this.getAllUsers()
  },

  // computed:{
  // ...mapGetters(['all'])
  // },
  methods: {
    ...mapActions(['Logout', 'getCity', 'UpdateCity','changeLanguage']),
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

    onChangeCity() {
      this.UpdateCity(this.city)
    },
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
.header {
  /* padding: 0px 100px; */
  box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
  border: 1px solid #efefef;
  z-index: 3;
  background: #fff;
  width: 100%;
  position: fixed;
}
.headerFixed {
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0px;
}
.stock-span{
  position: relative;
  bottom: 20px;
  left: 1px;
  background-color: aquamarine;
  border-radius: 50%;
  padding: 5px;
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
  color: #30c88c;
  padding-bottom: 10px;
}
.menu ul li[data-v-f21a83aa] {
  text-align: center;
  line-height: normal;
}
a.nuxt-link-exact-active.login_ {
  border: 1px solid #30c88c;
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
  /* font-size: 16px; */
  display: flex;
  font-size: 14px;
  align-items: center;
}
.menu ul li:lang(en) {
  margin-left: 3em;

}

.menu ul li:lang(ar) {
  margin-right: 3em;
}

.menu ul li a:hover {
  color: #30c88c;
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
  color: #30c88c;
}
.theme--light.v-list-item--disabled {
  color: rgba(0, 0, 0, 0.38);
  background: #30c88c;
  color: #fff;
}

.select_head[data-v-f21a83aa] {
  width: 200px;
}
.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle{
  text-align: center;
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
