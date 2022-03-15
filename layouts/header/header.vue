<template>
  <header class="header flex container_cc ">
    <div class="header_p">
      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/logo.svg" />
      </NuxtLink>

      <div class="search">
        <input type="text" placeholder="ابحث" />
      </div>

      <nav class="menu">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')">
            <font-awesome-icon   far icon="house" />
              {{ $t("Home") }}
            </NuxtLink>
          </li>

          <li v-if="!this.$store.state.auth.checkAuth">
            <NuxtLink class="login_" :to="localePath('/login')">{{
              $t("Login")
            }}</NuxtLink>
          </li>

          <li v-if="this.$store.state.auth.checkAuth">
            <NuxtLink :to="localePath('/tickets')">
              <font-awesome-icon   far icon="message" />
              {{ $t("My Tickets") }}
            </NuxtLink>
          </li>

          <li v-if="this.$store.state.auth.checkAuth">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" color="primary" icon>
              <font-awesome-icon   far icon="user" />
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
  data: () => ({}),
  methods: {
    ...mapActions(["Logout"]),
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    Menu
  },
};
 </script>


<style scoped>
header{
      padding: 0px 100px;
    box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
    z-index: 99;
}
.header_p {
    display: flex;
    align-items: center;
    height: 80px;
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
.menu{
  display: flex;
    justify-content: flex-end;
    flex: 1;
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
    height: 50px;
    align-items: center;
    display: flex;
}
.search input {
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 22px;
  width: 300px;
      margin: 0px 30px;
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
