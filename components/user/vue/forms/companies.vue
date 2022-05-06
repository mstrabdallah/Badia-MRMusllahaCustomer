<template>
  <div class="form_account">
    <h3 class="mb-5">
      {{ $t('Your affiliate companies') }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="changeInfoFunction"
        v-model="valid"
        lazy-validation
      >
        <div v-if="allUsers.loading">
          <Loading :type="1" />
        </div>
        <div v-else>
          <div class="showComp" v-if="allUsers.companies.length === 0">
            <NoData :type="1" data="You do not have any affiliated companies" />
            <!-- {{ $t("You do not have any affiliated companies") }} -->
          </div>

          <div v-else>
            <div v-for="(item, i) in allUsers.companies" :key="i">
              <div class="showComp_">
                <div class="showComp_logo">
                  <v-img :src="item.logo" />
                </div>
                <div class="showComp_name">
                  <h3>
                    {{item.name}}
                    </h3>
                    <p>{{item.code}}</p></div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="form_account_body">
          <Msg api="addCompany" />

          <div class="searchForComp">
            <v-text-field
              v-model="data.company_code"
              :label="$t('company code')"
              :rules="[$rules.required]"
              required
              outlined
              dense
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="sub"
              @click="addCompanyFunction"
              :loading="allUsers.loadingComp"
              type="submit"
            >
              {{ $t('Add') }}
            </v-btn>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Msg from '../../../tools/msgApi.vue'
import Loading from '../../../tools/loadingP.vue'
import NoData from '../../../tools/no-data.vue'
export default {
  components: {
    Msg,
    Loading,
    NoData,
  },
  data() {
    return {
      data: {
        company_code: null,
      },
    }
  },
  computed: {
    ...mapGetters(['allAuth', 'allUsers']),
  },
  mounted() {
    this.getCompany()
  },
  methods: {
    ...mapActions(['getCompany', 'addCompany']),

    addCompanyFunction(e) {
      e.preventDefault()
      if (this.$refs.form.validate() === false) return false
      this.addCompany(this.data)
    },
  },
}
</script>

<style scoped>
.showComp_name p {
    color: #ccc;
}
.showComp_name {
    padding: 0px 15px;
}
.showComp_ {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    background: #fafafa;
    padding: 10px;
    border-radius: 7px;
}
.v-image{
    width: 60px;
}
.searchForComp {
  display: flex;
  margin-top: 20px;
}
.form_account {
  max-width: 100%;
}
.showComp {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ededed;
  border-bottom: none;
}
</style>
