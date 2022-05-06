<template>
  <div class="box_page">
    <div v-if="allUsers.loading">
      <Loading />
    </div>
    <div v-else>
      <div class="showComp" v-if="allUsers.companies.length === 0">
        <NoData data="You do not have any affiliated companies" />
      </div>

      <div v-else>
        <v-row>
          <v-col
            v-for="(item, i) in allUsers.companies"
            :key="i"
            cols="12"
            md="4"
            sm="6"
          >
            <nuxt-link :to="localePath(`/companies/${item.id}`)">
              <div class="showComp_">
                <div class="showComp_logo">
                  <v-img :src="item.logo" />
                </div>
                <div class="showComp_name">
              

                  <div class="showComp_item">
                    <p>{{ $t('Company Name') }}</p>
                    <strong>{{ item.name}}</strong>
                  </div>

                  <div class="showComp_item">
                    <p>{{ $t('company code') }}</p>
                    <p>{{ item.code }}</p>
                  </div>

                  <div class="showComp_item">
                    <p>{{ $t('category') }}</p>
                    <p>{{ item.category.name }}</p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NoData from '../../tools/no-data.vue'
import Loading from '../../tools/loadingP.vue'
export default {
  components: {
    NoData,
    Loading,
  },
  computed: {
    ...mapGetters(['allUsers']),
  },
  mounted() {
    this.getCompany()
  },
  methods: {
    ...mapActions(['getCompany']),
  },
}
</script>

<style>
.showComp_ {
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
  padding: 15px;
  cursor: pointer;
}
.showComp_:hover {
  transition: 0.5ms;
  box-shadow: 0px 0px 7px 0px rgb(71 71 71 / 26%);
}
.showComp_item {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f3f3f3;
    padding-top: 10px;
    margin-top: 10px;

}
</style>