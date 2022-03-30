<template>
  <v-sheet class="overflow-hidden menu_header">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn   dark @click.stop="drawer = !drawer"><font-awesome-icon icon="bars"  /> </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
       top
      temporary
      :right="$i18n.locale === 'ar'"
    >
      <v-list-item>
        <NuxtLink :to="localePath('/')" class="logo">
          <img src="/logo.svg" />
        </NuxtLink>
      </v-list-item>

      <v-divider></v-divider>
      <ul>



        <NuxtLink :to="localePath('/')">
       <v-list-item link>

         <font-awesome-icon icon="house" class="fa" />
          {{ $t("Home") }}
      </v-list-item>
        </NuxtLink>

        <NuxtLink link class="login_" :to="localePath('/login')">
      <v-list-item v-if="!this.$store.state.auth.checkAuth">
        <font-awesome-icon icon="user" class="fa" />
        {{$t("Login")}}
      </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/cart')">
        <v-list-item link v-if="this.$store.state.auth.checkAuth">
          <font-awesome-icon icon="cart-plus" class="fa" />
          {{ $t("CheckOut") }}
      </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/listOrder')">
      <v-list-item link v-if="this.$store.state.auth.checkAuth">
          <font-awesome-icon icon="cart-shopping" class="fa" />
          {{ $t('Order List')}}
      </v-list-item>
        </NuxtLink>



        <!-- <v-list-item link v-if="this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/cart')">
              <Checkout />
            </NuxtLink>
          </v-list-item> -->

<v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>

              <v-list-item-title>{{ $t("My Account") }}</v-list-item-title>

          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>



      <v-list-item link v-if="this.$store.state.auth.checkAuth">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" color="primary" icon>
             <font-awesome-icon icon="user" class="fa" />
              {{ $t("My Account") }}
            </div>
          </template>

          <v-list>
            <v-list-item link>
              <div @click="Logout">
                <v-list-item-title >{{ $t("Logout") }}</v-list-item-title>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>

       <v-list-item link>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" color="primary" icon>
             <font-awesome-icon icon="globe" class="fa" />
              {{ $t("Language") }}
            </div>
          </template>

          <v-list>
            <v-list-item :disabled="$i18n.locale === 'en'">
              <a :href="switchLocalePath('en')">
                <v-list-item-title>English</v-list-item-title>
              </a>
            </v-list-item>

            <v-list-item :disabled="$i18n.locale === 'ar'">
              <a :href="switchLocalePath('ar')">
                <v-list-item-title>العربية</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>

          </ul>
    </v-navigation-drawer>
  </v-sheet>
</template>
 <script>
import { mapActions, mapGetters } from "vuex";
import Checkout from "../../components/checkout/checkout.vue"
export default {
  data() {
    return {
      drawer: false,
       cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    };
  },
  computed:{
...mapGetters(['allUsers'])
  },
  methods: {
    ...mapActions(["Logout","changeMenuHeader"]),
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.changeMenuHeader(true)
    },
    onClose() {
      this.changeMenuHeader(false)
    },
  },
};
</script>

<style scoped>
.logo {
  margin: auto;
  display: block;
  display: flex;
    display: flex;
    justify-content: center;
    padding-top: 22px;
}
.logo img {
  width: 100px;
}

 a.nuxt-link-exact-active {
  color: #bf804b;
  padding-bottom: 10px;
}
.v-list-item{
      font-size: 17px;
}
</style>
