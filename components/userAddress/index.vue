<template>
   <v-col cols="12">
            <div class="Adress" style="text-align: center;">
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
          </v-col>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialog: false,

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

  },
 methods: {
    ...mapActions(['addAddress', 'getAddress']),

    OnAddAddress() {
      this.addAddress(this.addressData)
    },
 },
 mounted() {
    this.getAddress()
    // this.getListCart()
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
</style>
