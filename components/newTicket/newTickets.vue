<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700" max-height="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="tickets_add" dark v-bind="attrs" v-on="on" color="indigo">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">{{ $t("Add New Ticket") }}</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="title"
              :counter="255"
              :label="$t('Title')"
              :rules="[(v) => !!v || $t('This field is required')]"
              required
            ></v-text-field>

            <v-textarea
              v-model="description"
              class="textarea"
              outlined
              name="input-7-4"
              required
              :rules="[(v) => !!v || $t('This field is required')]"
              :label="$t('Description')"
            ></v-textarea>

            <v-select
              v-model="category_id"
              :items="Category"
              item-text="title_en"
              item-value="id"
              :menu-props="{ top: true, offsetY: true }"
              :rules="[(v) => !!v || $t('This field is required')]"
              :label="$t('Category')"
              required
            ></v-select>

            <v-select
              v-model="platform_id"
              :items="Platform"
              item-text="name"
              item-value="id"
              :menu-props="{ top: true, offsetY: true }"
              :rules="[(v) => !!v || $t('This field is required')]"
              :label="$t('Platform')"
              required
            ></v-select>

            <v-file-input
              v-model="attachments"
              chips
              counter
              show-size
              small-chips
              multiple
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
export default {
  data: () => ({
    dialog: false,
    loading: false,
    Platform: [],
    Category: [],
    title: "",
    description: "",
    category_id: 0,
    platform_id: 0,
    attachments: "",
  }),

  mounted() {
    this.getCategory();
    this.getPlatform();
  },
  props: ["getTicket"],

  methods: {
    getPlatform() {
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("token"),
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      };
      this.$axios.get("/Platform", { headers }).then((res) => {
        this.Platform = res.data.data;
      });
    },

    getCategory() {
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("token"),
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      };
      this.$axios.get("/TicketCategory", { headers }).then((res) => {
        this.Category = res.data.data;
      });
    },

    addTicket() {
      var data = new FormData();
      if (!this.$refs.form.validate()) return false;
      data.append("title", this.title);
      data.append("description", this.description);
      data.append("category_id", this.category_id);
      data.append("platform_id", this.platform_id);
       if (this.attachments.length > 0){
         console.log(this.attachments[0])
         for(var i = 0 ; i < this.attachments.length ; i++){
          data.append("attachments[]", this.attachments[i]);
         }
       }
      this.loading = true;
      const headers = { "Content-Type": "multipart/form-data" };

      this.$axios.post("/Ticket", data, { headers })
        .then((res) => {
          this.getTicket();
          this.loading = false;
          this.dialog = false;
          this.$refs.form.reset();
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