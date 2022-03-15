<template>
    <div
    class="mx-auto overflow-hidden"
    height="400"
    width="344"
  >
    <v-system-bar color=" darken-3"></v-system-bar>

    <v-app-bar
      color=" accent-4"
      
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

     
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class=" text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    
  </div>

</template>

<script>
export default {
    computed: {
        availableLocales () {
            // console.log(this.$i18n.locales)
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  },
    },
   data: () => ({
      drawer: false,
      group: null,
      dialog: false,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
//    data() {
//     return { isRed: false };
//   }
// data: {
//     lang: this.$i18n.locales.code,
    
//   }


}
</script>

<style lang="scss" >

.nav_dir{
    justify-content: end;
}
.nav-link, .v-application a{
    font-weight: 500;

    color: #223535;
}
.nav-item{
    border-bottom: 2px solid transparent;
}
.nav-item:hover{
    border-bottom: 2px solid #c1804c;
    
}
.dropdown-menu.show{
    top: 113%;
    left: -65px;
    right: 0;
}
.img-logo{
        width: 140px;
        height: 60px;
        img{
            position: relative;
            height: 100%;
            width: 100%;
        }
    }

    a.nuxt-link-active {
  font-weight: bold;
    color: #c1804c;

}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #c1804c;
}
.nav-link:focus, .nav-link:hover{
  color: #c1804c;

}

</style>