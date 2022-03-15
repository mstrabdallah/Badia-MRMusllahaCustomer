<template >
  <header class="header container_cc">
    <div class="header_p">
      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/images/logo.png" />
      </NuxtLink>

      <nav class="menu">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')">
            <font-awesome-icon   far icon="house"  />
              <!-- <fa icon="house" class="fa" /> -->
              {{ $t("Home") }}
            </NuxtLink>
          </li>

          <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink class="login_" :to="localePath('/login')">{{
              $t("Login")
            }}</NuxtLink>
          </li>

          <!-- <li v-if="this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/tickets')">
            
              <fa icon="message" class="fa" />
              {{ $t("My Tickets") }}
            </NuxtLink>
          </li> -->

          <li v-if="this.$store.state.auth.checkAuth">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" color="primary" icon>
                  <!-- <fa icon="user" class="fa" /> -->
                  {{ $t("My Account") }}
                </div>
              </template>

              <v-list>
                <v-list-item>
                  <div @click="Logout">
                    <v-list-item-title>{{ $t("Logout") }}</v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu>
          </li>

          <li>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" color="primary" icon>
                  <font-awesome-icon icon="globe" class="fa" />
                  {{ $t("Language") }}
                </div>
              </template>

              <v-list>
                <v-list-item >
                  <NuxtLink :to="switchLocalePath('ar')">
                    <v-list-item-title>English</v-list-item-title>
                  </NuxtLink>
                </v-list-item>

                <v-list-item >
                  <NuxtLink :to="switchLocalePath('en')">
                    <v-list-item-title>العربية</v-list-item-title>
                  </NuxtLink>
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
import Menu from "./menu.vue";
import { mapActions } from "vuex";
export default {
  data: () => ({
    // lang: this.$i18n.locales.code,
  }),
  
  methods: {
    ...mapActions(["Logout"]),
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    Menu,
  },
  computed: {
        availableLocales () {
            // console.log(this.$i18n.locales)
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  },
  }
};
</script>


<style scoped>
.header_p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
}

.header_p li a.nuxt-link-exact-active {
  color: #bf804b;
  padding-bottom: 10px;
}

a.nuxt-link-exact-active.login_ {
  border: 1px solid #bf804b;
}
.login_ {
  border: 1px solid #ccc;
  padding: 7px 30px;
  border-radius: 5px;
}

.menu ul {
  font-size: 16px;
  display: flex;
}
.menu ul li:lang(en) {
  margin-left: 5em;
}

.menu ul li:lang(ar) {
  margin-right: 5em;
}

.menu ul li a:hover {
  color: #bf804b;
}

.logo img {
  width: 11em;
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

@media (max-width: 768px) {
  .mob_nav {
    display: block;
  }
  .menu ul {
    display: none;
  }
}
</style>