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
              fab
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
          <span class="text-h5">Edit User Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
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

              <v-col cols="6">
                <v-text-field
                  label="Name"
                  prefix=""
                  v-model="name"
                  required
                ></v-text-field>
              </v-col>

              <!-- <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Mobile Number"
                    v-model="WorkUserMobile"
                    prefix=""
                  ></v-text-field>
                </v-col> -->

              <v-col cols="6">
                <v-text-field
                  label="Email"
                  v-model="UserEmail"
                  required
                ></v-text-field>
              </v-col>

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
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Update
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
    // countries: [
    //   'Afghanistan',
    //   'Albania',
    //   'Algeria',
    //   'Andorra',
    //   'Angola',
    //   'Anguilla',
    //   'Antigua &amp; Barbuda',
    //   'Argentina',
    //   'Armenia',
    //   'Aruba',
    //   'Australia',
    //   'Austria',
    //   'Azerbaijan',
    //   'Bahamas',
    //   'Bahrain',
    //   'Bangladesh',
    //   'Barbados',
    //   'Belarus',
    //   'Belgium',
    //   'Belize',
    //   'Benin',
    //   'Bermuda',
    //   'Bhutan',
    //   'Bolivia',
    //   'Bosnia &amp; Herzegovina',
    //   'Botswana',
    //   'Brazil',
    //   'British Virgin Islands',
    //   'Brunei',
    //   'Bulgaria',
    //   'Burkina Faso',
    //   'Burundi',
    //   'Cambodia',
    //   'Cameroon',
    //   'Cape Verde',
    //   'Cayman Islands',
    //   'Chad',
    //   'Chile',
    //   'China',
    //   'Colombia',
    //   'Congo',
    //   'Cook Islands',
    //   'Costa Rica',
    //   'Cote D Ivoire',
    //   'Croatia',
    //   'Cruise Ship',
    //   'Cuba',
    //   'Cyprus',
    //   'Czech Republic',
    //   'Denmark',
    //   'Djibouti',
    //   'Dominica',
    //   'Dominican Republic',
    //   'Ecuador',
    //   'Egypt',
    //   'El Salvador',
    //   'Equatorial Guinea',
    //   'Estonia',
    //   'Ethiopia',
    //   'Falkland Islands',
    //   'Faroe Islands',
    //   'Fiji',
    //   'Finland',
    //   'France',
    //   'French Polynesia',
    //   'French West Indies',
    //   'Gabon',
    //   'Gambia',
    //   'Georgia',
    //   'Germany',
    //   'Ghana',
    //   'Gibraltar',
    //   'Greece',
    //   'Greenland',
    //   'Grenada',
    //   'Guam',
    //   'Guatemala',
    //   'Guernsey',
    //   'Guinea',
    //   'Guinea Bissau',
    //   'Guyana',
    //   'Haiti',
    //   'Honduras',
    //   'Hong Kong',
    //   'Hungary',
    //   'Iceland',
    //   'India',
    //   'Indonesia',
    //   'Iran',
    //   'Iraq',
    //   'Ireland',
    //   'Isle of Man',
    //   'Israel',
    //   'Italy',
    //   'Jamaica',
    //   'Japan',
    //   'Jersey',
    //   'Jordan',
    //   'Kazakhstan',
    //   'Kenya',
    //   'Kuwait',
    //   'Kyrgyz Republic',
    //   'Laos',
    //   'Latvia',
    //   'Lebanon',
    //   'Lesotho',
    //   'Liberia',
    //   'Libya',
    //   'Liechtenstein',
    //   'Lithuania',
    //   'Luxembourg',
    //   'Macau',
    //   'Macedonia',
    //   'Madagascar',
    //   'Malawi',
    //   'Malaysia',
    //   'Maldives',
    //   'Mali',
    //   'Malta',
    //   'Mauritania',
    //   'Mauritius',
    //   'Mexico',
    //   'Moldova',
    //   'Monaco',
    //   'Mongolia',
    //   'Montenegro',
    //   'Montserrat',
    //   'Morocco',
    //   'Mozambique',
    //   'Namibia',
    //   'Nepal',
    //   'Netherlands',
    //   'Netherlands Antilles',
    //   'New Caledonia',
    //   'New Zealand',
    //   'Nicaragua',
    //   'Niger',
    //   'Nigeria',
    //   'Norway',
    //   'Oman',
    //   'Pakistan',
    //   'Palestine',
    //   'Panama',
    //   'Papua New Guinea',
    //   'Paraguay',
    //   'Peru',
    //   'Philippines',
    //   'Poland',
    //   'Portugal',
    //   'Puerto Rico',
    //   'Qatar',
    //   'Reunion',
    //   'Romania',
    //   'Russia',
    //   'Rwanda',
    //   'Saint Pierre &amp; Miquelon',
    //   'Samoa',
    //   'San Marino',
    //   'Satellite',
    //   'Saudi Arabia',
    //   'Senegal',
    //   'Serbia',
    //   'Seychelles',
    //   'Sierra Leone',
    //   'Singapore',
    //   'Slovakia',
    //   'Slovenia',
    //   'South Africa',
    //   'South Korea',
    //   'Spain',
    //   'Sri Lanka',
    //   'St Kitts &amp; Nevis',
    //   'St Lucia',
    //   'St Vincent',
    //   'St. Lucia',
    //   'Sudan',
    //   'Suriname',
    //   'Swaziland',
    //   'Sweden',
    //   'Switzerland',
    //   'Syria',
    //   'Taiwan',
    //   'Tajikistan',
    //   'Tanzania',
    //   'Thailand',
    //   `Timor L'Este`,
    //   'Togo',
    //   'Tonga',
    //   'Trinidad &amp; Tobago',
    //   'Tunisia',
    //   'Turkey',
    //   'Turkmenistan',
    //   'Turks &amp; Caicos',
    //   'Uganda',
    //   'Ukraine',
    //   'United Arab Emirates',
    //   'United Kingdom',
    //   'United States',
    //   'Uruguay',
    //   'Uzbekistan',
    //   'Venezuela',
    //   'Vietnam',
    //   'Virgin Islands (US)',
    //   'Yemen',
    //   'Zambia',
    //   'Zimbabwe',
    // ],
    errorMessages: '',
    name: null,

    formHasErrors: false,
    dialog: false,
    hidden: false,
    panel: [0, 1],

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
    ...mapActions(['getMe', 'addAddress', 'getAddress']),
  },

  computed: {
    ...mapGetters(['allAuth', 'AllAddresses']),
  },
}
</script>


<style>
</style>
