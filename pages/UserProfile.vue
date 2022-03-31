<template>
  <v-container class="py-10">
    <div
        class="text-center"
        v-if="allAuth.loadingupdate == true"
      >
        <v-overlay>
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
      </div>
    <v-row>
      <ProfileUserInfo />
      <v-divider vertical></v-divider>
      <v-col md="8">
        <div>
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel v-model="panel">
              <v-expansion-panel-header>{{$t('Pesonal Information')}}</v-expansion-panel-header>
              <UserDetails />
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>{{$t('My Address')}}</v-expansion-panel-header>
              <v-expansion-panel-content>

                <!-- User Address Iformations -->
                <v-list
                  two-line
                  v-for="(addressData, i) in AllAddresses.data.data"
                  :key="i"
                >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-map-marker </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{
                        addressData.address_line
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        >{{ addressData.apartment_no }} ,
                        {{ addressData.building_no }}, {{ addressData.street }},
                        {{ addressData.area }},
                        {{ addressData.city.name }}</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-action>
                      <!-- Update Form -->
                      <div>
                        <v-dialog
                          v-model="dialog"
                          persistent
                          max-width="1000px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              @click="() => OnEditAddd(addressData.id)"
                            >
                              <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                      v-model="currentAddress.street"
                                      label="street"
                                      outlined
                                      required
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                      label="area"
                                      outlined
                                      v-model="currentAddress.area"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                      label="building_no"
                                      v-model="currentAddress.building_no"
                                      persistent-hint
                                      outlined
                                      required
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                      v-model="currentAddress.apartment_no"
                                      label="apartment_no"
                                      outlined
                                      required
                                    ></v-text-field>
                                  </v-col>

                                  <!-- <v-col cols="12" sm="6" md="6">
                           <v-select
                              :items="AllCityDeatils.data.data"
                              label="City"
                              item-text="name"
                              item-value="id"
                              v-model="currentAddress.city"
                            ></v-select>
                        </v-col> -->
                                  <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                      v-model="currentAddress.postal_code"
                                      label="postal_code"
                                      outlined
                                    ></v-text-field>
                                  </v-col>

                                  <v-col cols="12">
                                    <v-text-field
                                      v-model="currentAddress.address_line"
                                      label="address_line"
                                      outlined
                                    ></v-text-field>
                                  </v-col>

                                  <v-col cols="12">
                                    <v-textarea
                                      outlined
                                      v-model="currentAddress.notes"
                                      label="notes"
                                      value="If you would to add any notes ... Write it here."
                                    ></v-textarea>
                                  </v-col>

                                  <v-checkbox
                                    v-model="currentAddress.checkbox"
                                    label="Is Default"
                                  ></v-checkbox>
                                </v-row>
                              </v-container>
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                              >
                                Close
                              </v-btn>
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="EditAddress(addressData.id)"
                              >
                                Update
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </div>
                    </v-list-item-action>
                    <v-list-item-action>
                      <v-btn
                        dark
                        :rounded="false"
                        @click="DeleteAdd(addressData.id)"
                        color="red"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <UserAddress />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- Payment Methods -->
            <!-- <v-expansion-panel>
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
            </v-expansion-panel> -->
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserDetails from '../components/user/vue/UserDetails.vue'
import ProfileUserInfo from '../components/user/vue/ProfileUserInfo.vue'
import UserAddress from '../components/userAddress/index.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      // items: ['Foo', 'Bar', 'Fizz', 'Buzz'],

      dialog: false,
      panel: [0],

      currentAddress: {
        street: '',
        area: '',
        building_no: '',
        apartment_no: '',
        address_line: '',
        postal_code: '',
        notes: '',
        checkbox: false,
      },
    }
  },

  components: {
    UserDetails,
    ProfileUserInfo,
    UserAddress,
  },

  computed: {
    ...mapGetters(['allAuth', 'AllAddresses']),
  },
  methods: {
    ...mapActions([
      'getMe',
      'getListCart',
      'addAddress',
      'getAddress',
      'UpdateAddress',
      'DeleteAddress',
    ]),

    DeleteAdd(id) {
      this.DeleteAddress(id)
    },
    OnEditAddd(id) {
      var s = this.AllAddresses.data.data.filter((el) => el.id == id)
      this.currentAddress = s[0]
      //  this.addressId = id;
    },
    EditAddress(id) {
      console.log('jjkkk', id)
      console.log(this.currentAddress)
      this.UpdateAddress(id, this.currentAddress)
    },
    // onSubmit(){
    //   this.addToCart(this.prodName)
    // }
  },
  mounted() {
    // this.getAddress()
    // this.getListCart()
    // this.getListOfTime()
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
