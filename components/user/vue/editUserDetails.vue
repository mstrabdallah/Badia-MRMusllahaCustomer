<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-card-text style="height: 100px; position: relative">
          <v-fab-transition>
            <v-btn
              v-show="!hidden"
              color="#223535"
              dark
              absolute
              top
              right
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{$t('Edit User Details')}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  :label="$t('Name')"
                  prefix=""
                  outlined
                  v-model="userEdit.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  :label="$t('Email')"
                  v-model="userEdit.email"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <!-- <v-col cols="12">
                  <v-file-input
                    label="Your Image"
                    filled
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </v-col> -->
              <!-- <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="first name*"
                    v-model="UserFirstName"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="middle name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="last name*"
                    v-model="UserLastName"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col> -->

              <!-- <v-col cols="12">
                  <v-text-field
                    ref="address"
                    v-model="address"
                    :rules="[
                      () => !!address || 'This field is required',
                      () =>
                        (!!address && address.length <= 25) ||
                        'Address must be less than 25 characters',
                      addressCheck,
                    ]"
                    label="Address Line"
                    placeholder="Snowy Rock Pl"
                    counter="25"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    ref="city"
                    v-model="city"
                    :rules="[
                      () => !!city || 'This field is required',
                      addressCheck,
                    ]"
                    label="City"
                    placeholder="El Paso"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    ref="state"
                    v-model="state"
                    :rules="[() => !!state || 'This field is required']"
                    label="State/Province/Region"
                    required
                    placeholder="TX"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    ref="zip"
                    v-model="zip"
                    :rules="[() => !!zip || 'This field is required']"
                    label="ZIP / Postal Code"
                    required
                    placeholder="79938"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-autocomplete
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    label="Country"
                    placeholder="Select..."
                    required
                  ></v-autocomplete>
                </v-col> -->


              <!-- <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Mobile Number"
                    v-model="WorkUserMobile"
                    prefix=""
                  ></v-text-field>
                </v-col> -->

              <!-- <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Work Email"
                    v-model="WorkUserEmail"
                    required
                  ></v-text-field>
                </v-col> -->
              <!-- <v-col cols="12">
                                  <v-text-field
                                    label="Password*"
                                    type="password"
                                    required
                                  ></v-text-field>
                                </v-col> -->
              <!-- <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump',
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col> -->
            </v-row>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            {{$t('Close')}}
          </v-btn>
          <v-btn color="blue darken-1" text @click="UpdateUserDetail">
            {{$t('Update')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    errorMessages: '',
    name: null,

    formHasErrors: false,
    dialog: false,
    hidden: false,
    panel: [0, 1],

    userEdit: {
      name: '',
      email: '',
    },
    UserEmail: null,
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
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    ...mapActions(['getMe', 'addAddress', 'getAddress', 'UpdateUserInfo']),

    completeUserData() {
      this.userEdit.name = this.allAuth.user.name
      this.userEdit.email = this.allAuth.user.email
    },
    UpdateUserDetail() {
      // console.log(this.userEdit);
      this.dialog = false;
      this.UpdateUserInfo(this.userEdit);
    },
  },

  computed: {
    ...mapGetters(['allAuth', 'AllAddresses']),
  },

  mounted() {
    this.completeUserData()
  },
}
</script>


<style>
</style>
