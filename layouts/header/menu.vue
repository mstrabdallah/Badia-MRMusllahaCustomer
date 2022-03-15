<template>
  <v-sheet height="400" class="overflow-hidden">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn   dark @click.stop="drawer = !drawer"> <fa icon="bars"  /> </v-btn>
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
          <img src="/logo.png" />
        </NuxtLink>
      </v-list-item>

      <v-divider></v-divider>

       <v-list-item>
        <NuxtLink :to="localePath('/')">
          <fa icon="house" class="fa" />
          {{ $t("Home") }}
        </NuxtLink>
      </v-list-item>

      <v-list-item v-if="!this.$store.state.auth.checkAuth">
        <NuxtLink class="login_" :to="localePath('/login')">
         <fa icon="user" class="fa" />
        {{$t("Login")}}
        </NuxtLink>
      </v-list-item>

      <v-list-item v-if="this.$store.state.auth.checkAuth">
        <NuxtLink :to="localePath('/tickets')">
          <fa icon="message" class="fa" />
          {{ $t("My Tickets") }}
        </NuxtLink>
      </v-list-item>

      <v-list-item v-if="this.$store.state.auth.checkAuth">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" color="primary" icon>
              <fa icon="user" class="fa" />
              {{ $t("My Account") }}
            </div>
          </template>

          <v-list>
            <v-list-item>
              <div @click="Logout">
                <v-list-item-title >{{ $t("Logout") }}</v-list-item-title>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>

       <v-list-item>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" color="primary" icon>
              <fa icon="globe" class="fa" />
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
    </v-navigation-drawer>
  </v-sheet>
</template>
 <script>
 import {mapActions} from 'vuex'
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    ...mapActions(["Logout"]),
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
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