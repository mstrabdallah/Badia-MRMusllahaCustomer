<template>
  <!-- <v-col md="4">
          <div class="">
            <v-card
              class="mx-auto text-end"
              max-width="344"
            >
              <div
                    class="pa-7 rounded-circle d-inline-block"
                  >
                <img
                  src="/images/07.png"
                  class="relative"
                />
              </div>

              <v-list-item >
                <v-list-item-icon>
                  <font-awesome-icon far icon="user" class="mr-5" />
                </v-list-item-icon>
                <v-list-item-title text="title" class="text-start">{{UserFirstName +' '+ UserLastName}}</v-list-item-title>
              </v-list-item>

              <v-list-item >
                <v-list-item-icon>
                  <font-awesome-icon far icon="user" class="mr-5" />
                </v-list-item-icon>
                <v-list-item-title text="title">{{UserEmail}}</v-list-item-title>
              </v-list-item>

              <v-list-item >
                <v-list-item-icon>
                  <font-awesome-icon far icon="user" class="mr-5" />
                </v-list-item-icon>
                <v-list-item-title text="title">+ 96 {{PersonalUserMobile}}</v-list-item-title>
              </v-list-item>

              <v-list-item >
                <v-list-item-icon>
                  <font-awesome-icon far icon="user" class="mr-5" />
                </v-list-item-icon>
                <v-list-item-title text="title">{{address}},{{state}},{{city}},{{country}}</v-list-item-title>
              </v-list-item>
            </v-card>
        </div>
        </v-col> -->

  <v-expansion-panel-content>
    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo"> mdi-phone </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ allAuth.user.phone }}</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ allAuth.user.phone }}</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo"> mdi-email </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ allAuth.user.email }}</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ allAuth.user.email }}</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-divider inset></v-divider> -->
      <EditUserDetails />
      <!-- <v-divider inset></v-divider> -->
    </v-list>
  </v-expansion-panel-content>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import EditUserDetails from './editUserDetails.vue'
export default {
  components: {
    EditUserDetails,
  },
  data: () => ({
    errorMessages: '',
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
    dialog: false,
    hidden: false,
    panel: [0, 1],
    WorkUserEmail: null,
    UserEmail: null,
    WorkUserMobile: null,
    PersonalUserMobile: null,
    UserLastName: null,
    UserFirstName: null,
  }),
  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      }
    },
  },

  watch: {
    // name() {
    //   this.errorMessages = ''
    // },
  },

  methods: {
    ...mapActions(['getMe', 'addAddress', 'getAddress']),

    },

  computed: {
    ...mapGetters(['allAuth', 'AllAddresses']),
  },
}
</script>
