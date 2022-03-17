<template>
  <div class="page container_cc">
    <div class="login">
      <h1>{{ $t("Register") }}</h1>

      <div class="form_login_cc">
        <div class="form_login">
          <div class="form_title">
            <div class="mb-5">
              {{ $t("Enter Phone Number") }}
            </div>
          </div>

          <div class="form">
            <v-form ref="form" @submit="Login" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="200"
                :label="$t('Name')"
                required
                outlined
                dense
              ></v-text-field>

              <vue-phone-number-input
                v-model="phone"
                :label="$t('Phone')"
                class="mb-7"
                default-country-code="SA"
                required="true"
              />

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="showPasswordLogin ? 'text' : 'password'"
                :label="$t('Password')"
                @click:append="showPasswordLogin = !showPasswordLogin"
                outlined
                dense
              ></v-text-field>

              <v-expansion-panels class="mb-6">
                <v-expansion-panel>
                  <v-expansion-panel-header expand-icon="mdi-menu-down">
                    More Options
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field
                      v-model="referral"
                      :label="$t('Referral Code')"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-checkbox v-model="checkbox">
                <template v-slot:label>
                  <div>
                    I agree that
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="https://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          Vuetify
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                    is awesome
                  </div>
                </template>
              </v-checkbox>

              <div class="msg" v-if="msg">
                <p>{{ $t(msg) }}</p>
              </div>

              <v-btn
                :disabled="!valid"
                color="success"
                class="button_login"
                @click="Login"
                :loading="loading"
              >
                {{ $t("Register") }}
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: this.$i18n.t("Register-page"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "todos description",
          name: "todos description",
          content: "todos My custom description",
        },
      ],
    };
  },
  data: () => ({
    loading: false,
    valid: false,
    showPasswordLogin: false,
    password: "",

    phone: "",
    msg: "",
    msgStatus: true,
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length <= 11) || "Phone must be less than 11 Number",
      (v) =>
        Number.isInteger(Number(v)) || "The value must be an integer number",
    ],
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    Login(e) {
      e.preventDefault();
      this.$refs.form.validate();
      if (this.$refs.form.validate() === false) return false;

      var data = new FormData();
      data.append("phone", this.phone);
      data.append("password", this.password);
      this.loading = true;
      this.msg = "";
      this.$axios
        .post("/login", data)
        .then((res) => {
          this.$cookies.set("token", res.data.token, {
            path: "/",
            maxAge: 365 * 24 * 60 * 60,
          });
          this.$cookies.set("user", res.data.user, {
            path: "/",
            maxAge: 365 * 24 * 60 * 60,
          });
          if (this.$i18n.locale === "ar") {
            window.location.href = "/";
          } else {
            window.location.href = "/en";
          }
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.msg = error.response.data.message;
        });
    },
  },
};
</script>
 


<style scoped>
.login {
  margin-top: 24px;
  padding: 20px;
}
.login h1 {
  text-align: center;
}
.form_login_cc {
  max-width: 500px;
  background: #fff;
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
  border: 1px solid #f4f4f4;
  border-radius: 5px;
}
.button_login {
  width: 100%;
  margin-top: 30px;
}
</style>