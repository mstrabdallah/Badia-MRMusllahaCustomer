<template>
  <v-row >
    <v-dialog v-model="dialog" persistent max-width="700" max-height="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="tickets_add" dark v-bind="attrs" v-on="on" color="indigo">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">{{ $t("Add a new reply") }}</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-textarea
              v-model="description"
              class="textarea"
              outlined
              name="input-7-4"
              :label="$t('Description')"
              :rules="[(v) => !!v || $t('This field is required')]"
              required
            ></v-textarea>

            <v-file-input
              v-model="file"
              chips
              counter
              show-size
              small-chips
              truncate-length="1"
              label="file"
            ></v-file-input>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            {{ $t("Close") }}
          </v-btn>
          <v-btn
            :loading="loading"
            color="green darken-1"
            text
            @click="addTicket"
          >
            {{ $t("Send") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    loading: false,
    file: [],
    valid: true,
    description: "",
  }),

  mounted() {},
  //  props: ["getTicket"],
  methods: {
    ...mapActions(["getTicket"]),

    addTicket(e) {
      const headers = { "Content-Type": "multipart/form-data" };

      var data = new FormData();
      data.append("ticket_id", this.$route.params.id);
      data.append("reply", this.description);
      data.append("file", this.file);
      if (!this.$refs.form.validate()) return false;
      this.loading = true;
      this.$axios
        .post("/TicketReply", data, { headers })
        .then((res) => {
          this.$refs.form.reset();
          this.getTicket(this.$route.params.id);
          this.loading = false;
          this.dialog = false;
        })
        .catch((error) => {
          this.loading = false;
        });
    },
  },
};
</script>
 
<style scoped>
.newTicket {
  max-width: 400px;
  background: #fff;
}
.title {
  background: #fcfcfc;
  padding: 10px;
  border-bottom: 1px solid #f5f5f5;
}
.newTicket .from {
  padding: 20px;
  border-radius: 5px;
}

 

.textarea {
  margin-top: 20px;
}
</style>
  