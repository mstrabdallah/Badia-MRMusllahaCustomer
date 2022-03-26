<template>
  <v-container class="py-10">
    <h1>Checkout</h1>
    <v-row>
      <v-col md="8">
        <v-card>
          <div class="Payment">
            <v-container fluid>
              <v-row align="center">
                <v-col cols="6">
                  <h3>Select Your Payment Method</h3>
                </v-col>

                <v-col cols="6">
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

                <v-col cols="6">
                  <h3>Select Your Address</h3>
                </v-col>

                <v-radio-group >
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

          <v-container>
            <div class="Adress" style="text-align: end">
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
                    <span class="text-h5">User Profile</span>
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
                            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
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
          </v-container>

          <v-container>
            <v-row>
              <v-col cols="6">
                <h3>Select Your Time</h3>
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
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      v-bind="attrs"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
                <!-- <p>
                  Date in ISO format: <strong>{{ date }}</strong>
                </p> -->
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col md="4">
        <div class="">
          <v-card class="mx-auto text-end" max-width="344" active-class="">
            <v-list-item>
              <v-list-item-icon>
                <!-- <font-awesome-icon far icon="user" class="mr-5" /> -->
              </v-list-item-icon>
              <v-list-item-title text="title" class="text-start">
                na
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <!-- <font-awesome-icon far icon="envelope" class="mr-5" /> -->
              </v-list-item-icon>
              <v-list-item-title text="title"> na </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon> </v-list-item-icon>
              <v-list-item-title text="title"> na </v-list-item-title>
            </v-list-item>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      select: { state: 'Cash' },
      items: [{ state: 'Cash' }, { state: 'Visa Card' }],
      dialog: false,

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,

      addressData: {
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
  computed: {
    ...mapGetters(['AllAddresses']),
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    ...mapActions(['addAddress', 'getAddress']),

    OnAddAddress() {
      console.log(this.addressData)
      this.addAddress(this.addressData)
    },

    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    // onSubmit(){
    //   this.addToCart(this.prodName)
    // }
  },
  mounted() {
    this.getAddress()
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
</style>
