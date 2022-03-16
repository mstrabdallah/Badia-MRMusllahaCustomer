<template>
  <v-container class="py-10">
      <v-row>
        <v-col md="4">
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
                  <font-awesome-icon far icon="envelope" class="mr-5" />
                </v-list-item-icon>
                <v-list-item-title text="title">{{UserEmail}}</v-list-item-title>
              </v-list-item>

              <v-list-item >
                <v-list-item-icon>
                  <font-awesome-icon far icon="mobile-screen-button" class="mr-5" />
                </v-list-item-icon>
                <v-list-item-title text="title">+ 96 {{PersonalUserMobile}}</v-list-item-title>
              </v-list-item>

              <v-list-item >
                <v-list-item-icon>
                  <font-awesome-icon far icon="earth-asia" class="mr-5" />
                </v-list-item-icon>
                <v-list-item-title text="title">{{address}},{{state}},{{city}},{{country}}</v-list-item-title>
              </v-list-item>
            </v-card>
        </div>
        </v-col>

          <v-divider
            vertical
          ></v-divider>
          <v-col md="8">

          <div>
            <v-expansion-panels
              v-model="panel"
              multiple
            >
              <v-expansion-panel>
                <v-expansion-panel-header>Pesonal Information</v-expansion-panel-header>

                 <editUserDetails />

              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>About Me</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Some content
                  </v-expansion-panel-content>

              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>Bank Account</v-expansion-panel-header>
                <v-expansion-panel-content>


                 <v-sheet class="pa-5">
                    <v-switch
                      v-model="switch1"
                      inset

                    >
                      <template v-slot:label>
                        <div> <strong class="primary--text">Credit/Depit/ATM</strong> Card</div>
                      </template>
                      </v-switch>




                    <v-switch
                      v-model="switch2"
                      inset
                    >



                      <template v-slot:label>
                        <div> <strong class="primary--text">Cash On Delivery</strong> </div>
                      </template>
                    </v-switch>
                  </v-sheet>



                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import editUserDetails from '../components/user/vue/editUserDetails.vue'
  export default {
    data: () => ({
          name: null,
          address: null,
          city: null,
          state: null,
          zip: null,
          country: null,

          dialog: false,
          hidden: false,
          panel: [0, 1],
          WorkUserEmail:null,
          UserEmail:null,
          WorkUserMobile:null,
          PersonalUserMobile:'',
          UserLastName:'',
          UserFirstName:'',

          switch1: true,
        switch2: false,
    }),
    components:{
      editUserDetails
  },
    computed: {

    },

    watch: {

    },

    methods: {

    },
  }
</script>


<style>

.relative{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
.v-card__title{
  display: inherit;
}
.v-tab{
  width: 100%;
}
</style>
