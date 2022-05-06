<template>
  <div>
    <v-dialog v-model="AllListOforder.ReScheduleShow" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined class="MoreDetails" v-on="on" v-bind="attrs">
          {{ $t('ReSchedule') }}
        </v-btn>
      </template>
      <v-card>
        <div v-if="AllListOforder.loadingReschedule">
          <Loading />
        </div>
        <div v-else class="ReSchedule">
          <h2>{{ $t('ReSchedule') }}</h2>

          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <template>
                  <v-row no-gutters>
                    {{ $t('Please select the appropriate date') }}
                  </v-row>
                </template>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <div class="dataPicker_i">
                  <v-date-picker
                    v-model="data.date"
                    @change="changeDate"
                    elevation="5"
                    flat
                  ></v-date-picker>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                <template>
                  <v-row no-gutters>
                    {{ $t('Select the appropriate time') }}
                  </v-row>
                </template>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <div class="dataPicker_time" v-if="allCkeckout.loadingTime">
                  <Loading :type="1" />
                </div>

                <div class="dataPicker_time" v-else>
                  <v-radio-group
                    v-model="data.time"
                    :rules="[$rules.required]"
                    @change="changeTime"
                  >
                    <v-radio
                      v-for="(item, i) in allCkeckout.time.data"
                      :key="i"
                      :label="item"
                      :value="item"
                    ></v-radio>
                  </v-radio-group>
                </div>
                <Msg   api="rescheduleOrder" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from '../../tools/loadingP.vue'
import Msg from '../../tools/msgApi.vue'
export default {
  components: {
    Loading,
    Msg,
  },
  data() {
    return {
      panel: [0],
      data: {
        time: null,
        data: null,
        order_id: null,
      },
      dialog: false,
    }
  },
  props: ['id'],
  computed: {
    ...mapGetters(['allCkeckout', 'AllListOforder']),
  },
  methods: {
    ...mapActions(['getListOfTime', 'reschedule']),
    changeDate(e) {
      this.getListOfTime(e)
      this.panel = [1]
    },
    changeTime(e) {
      this.data.order_id = this.id
      this.reschedule(this.data)
    },
  },
}
</script>

<style scoped>
.ReSchedule {
  padding: 10px;
}
.ReSchedule h2 {
  border-bottom: 1px solid #f3f3f3;
  padding-bottom: 10px;
}
.dataPicker_i {
  margin: auto;
  background: #f5f5f5;
  margin-top: 30px;
  text-align: center;
  padding: 20px;
}
.dataPicker_i p {
  margin-bottom: 20px;
}
</style>