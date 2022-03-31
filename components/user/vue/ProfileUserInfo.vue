<template>
  <v-col md="4">
        <div class="">
          <v-card class="mx-auto text-end" max-width="344" active-class="">
            <div class="pa-7 rounded-circle d-inline-block">
              <img src="/images/07.png" class="relative" />
            </div>

            <v-list-item>
              <v-list-item-icon>
                <font-awesome-icon far icon="user" class="mr-5" />
              </v-list-item-icon>
              <v-list-item-title text="title" class="text-start">
                {{ allAuth.user.name }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <font-awesome-icon far icon="envelope" class="mr-5" />
              </v-list-item-icon>
              <v-list-item-title text="title">
                {{ allAuth.user.email }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <font-awesome-icon
                  far
                  icon="mobile-screen-button"
                  class="mr-5"
                />
              </v-list-item-icon>
              <v-list-item-title text="title">
                {{ allAuth.user.phone }}
              </v-list-item-title>
            </v-list-item>

            <!-- <v-list-item>
              <v-list-item-icon>
                <font-awesome-icon far icon="earth-asia" class="mr-5" />
              </v-list-item-icon>
              <v-list-item-title text="title"
                >{{ address }},{{ state }},{{ city }},{{
                  country
                }}</v-list-item-title
              >
            </v-list-item> -->
          </v-card>
        </div>
      </v-col>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['allAuth', 'AllAddresses']),
  },
  methods: {
    ...mapActions([
      'getMe',
      // 'getListCart',
      // 'addAddress',
      // 'getAddress',
      // 'UpdateAddress',
      // 'DeleteAddress',

    ]),},
    mounted() {
    // this.getAddress()
    // this.getListCart()
    // this.getListOfTime()
  },

}
</script>

<style>

</style>
