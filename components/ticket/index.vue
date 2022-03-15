<template>
  <div class="page container_cc">
    <div class="page_cc">
      <h1 class="h1">{{ allTicket.data.title }}</h1>

      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
        v-if="allTicket.loading"
        class="lodingS"
      ></v-progress-circular>
      <div v-else>
        <div class="ticketHead_cc">
          <div class="options_head">
            <p class="des">{{ allTicket.data.description }}</p>
            <div class="files_show"></div>
          </div>
          <div class="ticketHead">
            <div class="flex">
              <div class="ticketInfoI">
                {{ $t("Category") }} :
                <span>{{ allTicket.data.category.title_en }}</span>
              </div>
              <div class="ticketInfoI">
                {{ $t("Platform") }} :
                <span>{{ allTicket.data.platform.name }}</span>
              </div>
              <div class="ticketInfoI">
                {{ $t("Status") }} :
                <span>{{ $t(allTicket.data.status) }}</span>
              </div>
            </div>
            <die class="is_open" v-if="!allTicket.data.is_closed">
              {{ $t("This ticket is still open, do you want to close it?") }}
              <v-switch
                @change="closeTicket(allTicket.data.id)"
                v-model="is_open"
              ></v-switch>
            </die>
            <die class="is_open" v-if="allTicket.data.is_closed">
              {{ $t("This ticket has been closed") }}
              <v-switch disabled></v-switch>
            </die>
          </div>
        </div>

        <div class="tickets">
          <!-- files besic -->
          <div class="ticket_b" v-if="allTicket.data.attachments.length > 0">
            <div v-for="item in allTicket.data.attachments" :key="item.id">
              <div class="ticket_left">
                <HandelFile :data="item.path" :type="item.file_type" />
              </div>
            </div>
          </div>

          <div v-for="item in allTicket.data.replies" :key="item.id">
            <div
              class="ticket"
              :class="[item.user.type == 'User' ? 'myMsg' : '']"
            >
              <div class="ticket_left">
                <h4>{{ item.user.name }}</h4>
                <div class="reply">
                  {{ item.reply }}
                </div>

                <HandelFile :data="item.file" :type="item.file_type" />
              </div>
            </div>

            <div class="ticket_right">
              <div class="date">{{ item.date }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!allTicket.data.is_closed">
        <NewTicket />
      </div>
    </div>
  </div>
</template>
<script>
import HandelFile from "./handelFile.vue";
import NewTicket from "../../components/newTicket/newTicket.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    HandelFile,
    NewTicket,
  },
  data() {
    return {
      is_open: true,
    };
  },
  mounted() {
    this.getTicket(this.$route.params.id);
  },
  computed: mapGetters(["allTicket"]),
  methods: {
    ...mapActions(["getTicket", "closeTicket"]),
  },
};
</script>



<style scoped>
.h1 {
  z-index: 2;
  position: relative;
}

.ticketHead_cc {
  background: #fff;
  min-height: 100px;
  margin-top: -50px;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 3px;
  padding-top: 40px;
  padding-bottom: 15px;
}
.ticketHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.des {
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 18px;
}

.options_head {
  padding: 0px 27px;
}

.is_open {
  display: flex;
  align-items: center;
}
.is_open .v-input {
  padding: 0px 10px;
}

.ticketInfoI {
  padding: 5px 10px;
  border-radius: 3px;
  margin: 0px 15px;
}
.ticketInfoI span {
  font-weight: bold;
}
.tickets {
  padding: 20px;
}
.lodingS {
  margin: 20px;
}
.ticket {
  box-shadow: -2px 5px 7px 0px rgb(0 0 0 / 1%);
  padding: 15px;
  border-radius: 5px;
  background: #fff;
  margin-top: 25px;
  max-width: 600px;
}

.ticket_b {
  padding: 15px;
  border-radius: 5px;
  background: #fff;
  max-width: 100%;
}
.reply {
  padding-bottom: 15px;
}
.name {
  font-weight: bold;
}
.title {
  border-left: 2px solid #bf804b;
  padding: 0px 10px;
  margin-top: 11px;
  border-radius: 2px;
}
.ticket_left {
  max-width: 600px;
}
.ticket_right {
  max-width: 200px;
  color: #666;
}

.ticket h4 {
  font-size: 16px;
  font-weight: bold;
}
.state span {
  color: #bf804b;
  font-weight: bold;
}
.date {
  margin-top: 10px;
  color: #ccc;
}

img.file_show {
  height: 200px;
  margin: 0px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 6px;
}
.files {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
}
@media (max-width: 1000px) {
  .flex {
    flex-flow: column;
  }

  .ticketHead {
    flex-flow: column;
  }
}
</style>

 
 