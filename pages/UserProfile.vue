<template>
  <v-container class="py-10">
    <v-row>
      <v-col md="4">
        <div class="">
          <v-card class="mx-auto text-end" max-width="344" active-class=""

          >
            <div class="pa-7 rounded-circle d-inline-block">
              <img src="/images/07.png" class="relative" />
            </div>

            <v-list-item>
              <v-list-item-icon>
                <font-awesome-icon far icon="user" class="mr-5" />
              </v-list-item-icon>
              <v-list-item-title text="title" class="text-start">
                {{allAuth.user.name}}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <font-awesome-icon far icon="envelope" class="mr-5" />
              </v-list-item-icon>
              <v-list-item-title text="title">
                {{  allAuth.user.email}}
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
              <v-list-item-title text="title"
                >
                {{ allAuth.user.phone }}
                </v-list-item-title
              >
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

      <v-divider vertical></v-divider>
      <v-col md="8">
        <div>
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel>
              <v-expansion-panel-header
                >Pesonal Information</v-expansion-panel-header
              >

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
                  <v-switch v-model="switch1" inset>
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Credit/Depit/ATM</strong>
                        Card
                      </div>
                    </template>
                  </v-switch>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        ref="card-number"
                        v-model="cardNumber"
                        label="Card Number"
                        placeholder="0000 0000 0000 0000"
                        counter="25"
                        :disabled="!switch1"
                        required
                      ></v-text-field>
                    </v-col>

                    <!-- <v-col
                                  cols="12"
                                  sm="6"
                                  md="6"
                                >
                                  <v-text-field
                                    label="EXPAIRY DATE*"
                                    v-model="ExpairyDate"
                                    placeholder="MM/YY"
                                    type="date"
                                    required
                                  ></v-text-field>
                                </v-col> -->

                    <v-col cols="11" sm="6">
                      <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        :disabled="!switch1"
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="date"
                            label="ExpairyDate"
                            prepend-icon="mdi-calendar"
                            readonly
                            :disabled="!switch1"
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" type="month" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="modal = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        label="CVV CODE"
                        v-model="CvvCode"
                        placeholder=" "
                        :disabled="!switch1"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="Name On Card*"
                        v-model="NameOnCard"
                        persistent-hint
                        placeholder="Ex: John"
                        :disabled="!switch1"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-switch v-model="switch2" inset>
                    <template v-slot:label>
                      <div>
                        <strong class="primary--text">Cash On Delivery</strong>
                      </div>
                    </template>
                  </v-switch>
                </v-sheet>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Save
                  </v-btn>
                </v-card-actions>
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
import { mapActions, mapGetters } from 'vuex'


export default {
  // data: () => ({
  //   date: new Date().toISOString().substr(0, 7),
  //   menu: false,
  //   modal: false,

  //   name: null,
  //   address: null,
  //   city: null,
  //   state: null,
  //   zip: null,
  //   country: null,

  //   dialog: false,
  //   hidden: false,
  //   panel: [0, 1],
  //   WorkUserEmail: null,
  //   UserEmail: null,
  //   WorkUserMobile: null,
  //   PersonalUserMobile: '',
  //   UserLastName: '',
  //   UserFirstName: '',

  //   switch1: true,
  //   switch2: false,
  // }),
  components: {
    editUserDetails,
  },


 computed: {
    ...mapGetters(['allAuth']),
  },
  methods: {
    ...mapActions(['getMe']),
    // onSubmit(){
    //   this.addToCart(this.prodName)
    // }
  },
  mounted() {
    // this.getMe()

  },
}
</script>


<style>
.relative {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
.v-card__title {
  display: inherit;
}
.v-tab {
  width: 100%;
}
</style>
