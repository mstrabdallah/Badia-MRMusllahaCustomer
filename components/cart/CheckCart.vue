<template>
  <v-container class="py-10">
    <div v-if="this.$store.state.carts.cartLength <= 0">
      <h2 class="text-center">You Don't Have Any Items Yet</h2>
    </div>

    <v-row v-else>
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

                <v-radio-group v-model="addressID">
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

          <UserAddress style="margin-left: 80px" />

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

              <template v-if="this.$store.state.ckeckoutModule.loading">
                <v-col cols="12" lg="6">
                  <h3>Select Your Time</h3>
                </v-col>
                <v-col cols="12" lg="6">
                  <p class="red--text">Please Pick the Right Day</p>
                </v-col>
              </template>

              <template v-else>
                <v-col cols="12" lg="6" v-if="AllListOfTime.time">
                  <h3>Select Your Time</h3>
                </v-col>
                <v-col cols="12" lg="6">
                  <p
                    class="red--text"
                    v-if="this.$store.state.ckeckoutModule.DateMessage"
                  >
                    Please Pick the Right Day
                  </p>
                  <v-radio-group v-model="timePicked">
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

        <div class="">
          <v-card class="mx-auto text-center" max-width="344" active-class="">
            <v-fab-transition>
              <v-btn color="#30c88d" dark @click="onSubmitOrder">
                Order It Now
              </v-btn>
            </v-fab-transition>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserAddress from '../../components/userAddress/index.vue'

export default {
  data() {
    return {
      select: { state: 'cash on' },
      items: [{ state: 'cash' }],
      dialog: false,
      addressID: '',
      timePicked: '',
      dataForm: {
        address: '',
        date: '',
        time: '',
        payment: '',
      },
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
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
    }
  },
  methods: {
    ...mapActions([
      'addAddress',
      'getAddress',
      'getListCart',
      'getListOfTime',
      'CheckOut',
    ]),

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
    onSubmitOrder() {
      this.dataForm.address = this.addressID
      this.dataForm.payment = this.select.state
      this.dataForm.time = this.timePicked
      console.log(this.dataForm)
      this.CheckOut(this.dataForm)
    },
  },
  components: {
    UserAddress,
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
      this.dataForm.date = this.dateFormatted
      this.getListOfTime(this.dateFormatted)
    },
  },

  async mounted() {
    this.getAddress()
    await this.getListCart()
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
.loadingReg {
  margin: auto;
}
</style>
