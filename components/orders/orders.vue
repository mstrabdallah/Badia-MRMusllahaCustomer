<template>
  <div class="page container_cc">
    <h1 class="title_page">
      {{ $t('Order List') }}
    </h1>
    <v-card>
      <v-tabs
        color="deep-purple accent-4"
        :right="this.$i18n.locale === 'ar'"
        class="page_h"
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tab @click="changeTab('current=1')">{{ $t('current') }}</v-tab>
        <v-tab @click="changeTab('current=0')">{{ $t('Previous') }}</v-tab>

        <v-tab-item v-for="n in 2" :key="n">
          <div class="orderContent">
            <div class="text-center" v-if="AllListOforder.loading">
              <Loading />
            </div>
            <div v-else>
              <div>
                <div
                  v-if="
                    AllListOforder.data.data.length <= 0 &&
                    AllListOforder.loading == false
                  "
                >
                  <h2 class="text-center">
                    <div class="orders_count0 page">
                      <font-awesome-icon icon="truck" class="fa" />
                      <p>{{ $t('You do not have any prior requests') }}</p>
                      <NuxtLink :to="localePath('/')">
                        <v-btn>
                          {{ $t('Go To Home page') }}
                        </v-btn>
                      </NuxtLink>
                    </div>
                  </h2>
                </div>

                <div v-else-if="AllListOforder.data.data.length > 0">
                  <v-row>
                    <v-col
                      cols="12"
                      md="4"
                      v-for="item in AllListOforder.data.data"
                      :key="item"
                    >
                      <OrderItem :data="item" />
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </v-tab-item>
        
      </v-tabs>
      <!-- <div class="text-center" v-if="!AllListOforder.loading">
          <v-pagination
            v-model="AllListOforder.data.pagination.current_page"
            :length="AllListOforder.data.pagination.total_pages"
            v-if="AllListOforder.data.pagination.total_pages > 1"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            @input="changePage"
          ></v-pagination>
        </div> -->
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OrderItem from './vue/orderItem.vue'
import Loading from '../tools/loadingP.vue'
export default {
  head() {
    return {
      title: this.$i18n.t('Order List'),
    }
  },
  components: {
    Loading,
    OrderItem,
  },
  data() {
    return {
      counter: null,
      cartQuantity: {
        quantity: 0,
        id: '',
      },
      timeout: 2000,
      snackbar: false,
      snackbarError: false,
    }
  },

  computed: {
    ...mapGetters(['AllListOforder']),
  },
  methods: {
    ...mapActions(['ListOfOrder', 'DeleteCart', 'UpdateCart']),

    changeTab(e) {
      this.ListOfOrder({ paramters: e })
    },
    changePage(e) {
      this.ListOfOrder({ paramters: null, page: e })
    },
  },
  mounted() {
    this.ListOfOrder({ paramters: 'current=1', page: 1 })
  },
}
</script>

<style  scoped>
.orderContent {
  margin-top: 30px;
      padding: 20px;
}
.v-tab {
  margin: 0px !important;
}
.v-window__container {
  margin-top: 22px;
}
.orders_count0 {
  border: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.orders_count0 svg {
  font-size: 40px;
  margin-bottom: 20px;
}
.orders_count0 button {
  margin-top: 30px;
}

.v-btn {
  margin: 0 0.5rem;
}
.pending {
  color: rgb(255, 187, 0);
}
.accepted {
  color: rgb(13, 224, 48);
}
.on-going {
  color: rgb(1, 72, 94);
}
.reschedule {
  color: rgb(59, 59, 2);
}
.in-progress {
  color: rgb(214, 25, 57);
}
.canceled {
  color: yellow;
}
.completed {
  color: rgb(1, 107, 7);
}
</style>
