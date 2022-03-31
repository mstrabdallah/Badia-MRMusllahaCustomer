<template>
  <div>
    <!--  -->

    <!-- Add Form -->
    <v-col cols="12">
      <div class="Adress" style="text-align: center">
        <v-dialog v-model="dialog" persistent max-width="1000px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="AddAddressBtn"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              {{$t('Add Address')}}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{$t('Add Address')}}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="addressData.street"
                      :label="$t('street')"
                      outlined
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      :label="$t('area')"
                      outlined
                      v-model="addressData.area"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      :label="$t('building_no')"
                      v-model="addressData.building_no"
                      persistent-hint
                      outlined
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="addressData.apartment_no"
                      :label="$t('apartment_no')"
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
                              v-model="addressData.city"
                            ></v-select>
                        </v-col> -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="addressData.postal_code"
                      :label="$t('postal_code')"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="addressData.address_line"
                      :label="$t('address_line')"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      outlined
                      v-model="addressData.notes"
                      :label="$t('notes')"
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
                {{$t('Close')}}
              </v-btn>
              <v-btn color="blue darken-1" text @click="OnAddAddress">
                {{$t('Save')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
         <template>
          <v-snackbar
            v-model="snackbar"
            color="blue"
            :timeout="2500"
            :value="true"
            absolute
            centered
            shaped
            bottom
            v-if="this.$store.state.addresses.addressMSG"
          >
            {{ this.$store.state.addresses.addressMSG }} Added
          </v-snackbar>
        </template>
      </div>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],

       timeout: 2000,
      snackbar: false,
      snackbarError: false,

      dialog: false,

      addressData: {
        city: '',
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
    ...mapGetters(['AllAddresses', 'AllCityDeatils']),
  },
  methods: {
    ...mapActions(['addAddress', 'getAddress']),

    OnAddAddress() {
      this.dialog = false;
      this.addAddress(this.addressData);
      setTimeout(() => (this.snackbar = true))
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
