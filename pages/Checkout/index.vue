<template>
  <v-container class="py-10">
    <h1>Checkout</h1>
    <v-row>
      <v-col md="8">
        <v-card>
          <div class="Payment">
            <v-container fluid>
              <v-row align="center">
                <v-col cols="12" sm="6" md="6">
                  <h3>Select Your Payment Method</h3>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="select"
                    :hint="`${select.state}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  ></v-select>
                </v-col>

                <v-col cols="12" lg="6">
                  <h3>Select Your Address</h3>
                </v-col>

                <v-radio-group>
                  <v-radio
                    v-for="(address, i) in AllAddresses.data.data"
                    :key="i"
                    :label="address.address_line"
                    :value="address.id"
                    v-model="address.id"
                  ></v-radio>
                </v-radio-group>
              </v-row>
            </v-container>
          </div>


          <!-- This is palce of old add address -->

          <!-- <v-col cols="6"></v-col> -->
          <!-- <v-col cols="12">
            <div class="Adress" style="text-align: center; margin-left: 140px">
              <v-dialog v-model="dialog" persistent max-width="1000px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="AddAddressBtn"
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Add Address
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Add Address</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="addressData.street"
                            label="street"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            label="area"
                            v-model="addressData.area"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            label="building_no"
                            v-model="addressData.building_no"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="addressData.apartment_no"
                            label="apartment_no"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            v-model="addressData.postal_code"
                            label="postal_code"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            v-model="addressData.address_line"
                            label="address_line"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-textarea
                            outlined
                            v-model="addressData.notes"
                            label="notes"
                            value="If you would to add any notes ... Write it here."
                          ></v-textarea>
                        </v-col>

                        <v-checkbox
                          v-model="addressData.checkbox"
                          label="Is Default"
                        ></v-checkbox>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="OnAddAddress">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-col> -->

            <UserAddress   style="margin-left: 80px"/>



          <v-container>
            <v-row>
              <v-col cols="6" lg="6">
                <h3>Select Day</h3>
              </v-col>

              <v-col cols="12" lg="6">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateFormatted"
                      label="Date"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <div
                class="loadingReg "
                v-if="this.$store.state.ckeckoutModule.loading"

              >
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate

                ></v-progress-circular>
              </div>
              <template v-else>
                <v-col cols="12" lg="6" v-if="AllListOfTime.time">
                  <h3>Select Your Time</h3>
                </v-col>
                <v-col cols="12" lg="6">
                  <p class="red--text" v-if="this.$store.state.ckeckoutModule.DateMessage">
                    Please Pick the Right Time
                  </p>
                  <v-radio-group>
                    <v-radio
                      v-for="(time, i) in AllListOfTime.time.data"
                      :key="i"
                      :label="time"
                      :value="time"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col md="4">
        <div class="">
          <v-card class="mx-auto text-end" max-width="344" active-class="">
            <v-list-item>
              <v-list-item-title> Price: </v-list-item-title>
              <v-list-item-title text="title" class="text-start">
                {{ AllListOfCarts.data.price }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title> Taxes: </v-list-item-title>
              <v-list-item-title text="title">
                {{ AllListOfCarts.data.vat }}
              </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-title class="title">
                Total Price:
              </v-list-item-title>
              <v-list-item-title text="title" class="text-start title">
                {{ AllListOfCarts.data.total_price }}
              </v-list-item-title>
            </v-list-item>
          </v-card>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserAddress from '../../components/userAddress/index.vue'

export default {
  data() {
    return {
      select: { state: 'Cash On Service' },
      items: [{ state: 'Cash On Service' }],
      dialog: false,


      date: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      ).toISOString(),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 20)
      ),
      menu1: false,
      dateSended: '',

      // addressData: {
      //   street: '',
      //   area: '',
      //   building_no: '',
      //   apartment_no: '',
      //   address_line: '',
      //   postal_code: '',
      //   notes: '',
      //   checkbox: false,
      // },
    }
  },
  components:{
    UserAddress
  },
  computed: {
    ...mapGetters(['AllAddresses', 'AllListOfCarts', 'AllListOfTime']),
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      if ((this.$store.state.ckeckoutModule.status = 500)) {
        setTimeout(() => (this.snackbar = true))
      }
      this.getListOfTime(this.dateFormatted)
    },
  },
  methods: {
    ...mapActions(['addAddress', 'getAddress', 'getListCart', 'getListOfTime']),

    // OnAddAddress() {
    //   this.addAddress(this.addressData)
    // },

    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}-${month}-${day}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    // OnPickDate(e) {},

    // onSubmit(){
    //   this.addToCart(this.prodName)
    // }
  },
  mounted() {
    // this.getAddress()
    this.getListCart()
    // this.getListOfTime()
  },
}
</script>

<style>
.v-dialog > .v-card > .v-card__text {
  padding: 0px;
}
.Adress {
  text-align: end;
}
.loadingReg{
  margin: auto;
}
</style>
