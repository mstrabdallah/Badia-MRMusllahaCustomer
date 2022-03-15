<template>
   <div class="page container_cc">
    <div class="page_cc">
      <h1>{{$t('My Tickets')}}</h1>
      <div class="tickets">
     
      <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
      v-if="allTickets.loading"
    ></v-progress-circular>
    
        <div v-for="item in allTickets.data" :key="item.id">
          <nuxt-link :to="localePath('/tickets/'+item.id)">
            <div class="ticket">
              <div class="ticket_left">
                <div class="name">{{ item.user.name }}</div>
                <div class="title">
                  {{ item.title }}
                </div>
              
              </div>

              <div class="ticket_right">
                <div class="state">
                  {{$t('Status')}}: <span>{{ $t(item.status) }}</span>
                </div>
                <span class="date" v-if="item.last_reply != null"
                  >{{$t('Last Reply')}} : {{ item.last_reply_date }}</span
                >
                <span class="date" v-else> {{$t('Last Reply')}} : {{$t('No reply')}}</span>
                <!-- <div class="platform">platform : <span>{{ item.platform.name }}</span></div>
                <div class="title_en">category : <span>{{ item.category.title_en }}</span></div> -->
                
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
       <New :getTicket="getTicket" />
    </div>
  </div>
</template>
<script>
import New from "../../components/newTicket/newTickets.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["allTickets"]),

  data() {
    return {

    };
  },
  components:{
      New
  },
  mounted() {
    this.getTicket();
  },
  methods: {
    ...mapActions(["getTicket"]),

  },
};
</script>



<style scoped>
.tickets {
  padding: 20px;
}
.ticket {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  padding: 20px;
  max-height: 200px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 25px;
}

.ticket:hover{
  box-shadow: 0 14px 26px -12px rgb(88 88 88 / 42%), 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(1 33 104 / 20%);
}
.name {
  font-weight: bold;
}
.title {
  padding: 0px 10px;
  margin-top: 11px;
  border-radius: 2px;
}
.title:lang(en){
  border-left: 2px solid #bf804b;

}

.title:lang(ar){
  border-right: 2px solid #bf804b;

}
.ticket_right {
  max-width: 250px;
  color: #666;
}

.state span {
  color: #bf804b;
  font-weight: bold;
}
.date {
  margin-top: 7px;
  color: rgba(48, 80, 79, 0.52157);
  display: block;
}

@media (max-width: 756px) {
  .ticket {
    flex-flow: column;
  }
  .ticket_right {
    margin-top: 30px;
  }
}
</style>

 
 