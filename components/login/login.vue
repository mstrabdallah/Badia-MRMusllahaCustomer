<template>
  <div class="page container_cc">
    <div class="page_cc login">
      <h1>{{ $t("Login") }}</h1>

      <div class="form_login_cc">
        <div class="form_login">
          <div class="form_title">
            <div v-if="!checkUserStatus && !checkPhoneStatus">
              {{ $t("Enter Phone Number") }}
            </div>
            <div v-if="checkUserStatus && checkPhoneStatus">
              {{ $t("Enter Password To Login") }}
            </div>
            <div v-if="!checkUserStatus && checkPhoneStatus">
              {{ $t("Create Account") }}
            </div>
          </div>

          <div class="form">
            <v-form
              ref="form"
              @submit="
                (e) => {
                  e.preventDefault();
                  return false;
                }
              "
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="phone"
                :counter="11"
                :rules="phoneRules"
                :label="$t('Phone')"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="showPasswordLogin ? 'text' : 'password'"
                :label="$t('Password')"
                @click:append="showPasswordLogin = !showPasswordLogin"
                v-if="checkUserStatus && checkPhoneStatus"
              ></v-text-field>

              <v-text-field
                v-model="name"
                :label="$t('Name')"
                required
                v-if="!checkUserStatus && checkPhoneStatus"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('E-mail')"
                required
                v-if="!checkUserStatus && checkPhoneStatus"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                :label="$t('Enter the password')"
                hint="At least 8 characters"
                counter
                @click:append="showPassword = !showPassword"
                v-if="!checkUserStatus && checkPhoneStatus"
              ></v-text-field>

              <v-text-field
                v-model="password_confirmation"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min, passwordConfirmationRule]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                :label="$t('Re-enter the password')"
                hint="At least 8 characters"
                counter
                @click:append="showPassword = !showPassword"
                v-if="!checkUserStatus && checkPhoneStatus"
              ></v-text-field>

              <div class="msg" v-if="msg">
                <p>{{ $t(msg) }}</p>
              </div>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="checkPhone"
                v-if="!checkPhoneStatus"
                :loading="loading"
              >
                {{ $t("Next") }}
              </v-btn>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="Register"
                :loading="loading"
                v-if="!checkUserStatus && checkPhoneStatus"
              >
                {{ $t("Register") }}
              </v-btn>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="Login"
                :loading="loading"
                v-if="checkUserStatus && checkPhoneStatus"
              >
                {{ $t("Login") }}
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
      title: this.$i18n.t('Login-page'),
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
    checkPhoneStatus: false,
    checkUserStatus: false,
    valid: true,
    showPassword: false,
    showPasswordLogin: false,
    password_confirmation: "",
    password: "",
    email: "",
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
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    Platform: [],
  }),

  mounted() {},

  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.password_confirmation || "Password must match";
    },
  },
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
    Register(e) {
      e.preventDefault();
      this.$refs.form.validate();
      if (this.$refs.form.validate() === false) return false;

      var data = new FormData();
      data.append("phone", this.phone);
      data.append("name", this.name);
      data.append("email", this.email);
      data.append("password", this.password);
      data.append("password_confirmation", this.password_confirmation);
      this.loading = true;

      this.$axios
        .post("/register", data)
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
        });
    },
    checkPhone(e) {
      e.preventDefault();

      this.$refs.form.validate();
      if (this.$refs.form.validate() === false) return false;
      var data = new FormData();
      data.append("phone", this.phone);
      this.loading = true;

      this.$axios
        .post("checkPhone", data)
        .then((res) => {
          this.checkPhoneStatus = true;
          this.checkUserStatus = res.data.status;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
 


<style scoped>
.login {
  background: #f5f5f5 url(/background_bg_login.png) 53px 149px no-repeat !important;
  background-position: 50%;
  background-size: cover;
}

.form_login {
  width: 600px;
  padding: 40px;
  border-radius: 5px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0 1px 17px 0 rgb(95 95 95 / 20%);
}

.form_title {
  text-align: center;
  color: #2c4b4c;
  font-size: 1.5em;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 23px;
}

.form_login button {
  margin: 10px 0px !important;
  width: 100%;
  background: rgb(190 129 75) !important;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.input_style {
  text-align: left;
}

.form-control,
.custom-select {
  margin: 20px 0px;
}

select {
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  border: #ccc 1px solid;
  border-radius: 4px;
}

.msg p {
  color: #ea0d0d;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
@media (max-width: 1023px) {
  .login {
    background: #f5f5f5 !important;
  }
}
@media (max-width: 768px) {
  .form_login {
    width: 100%;
    padding: 20px;
  }
  .form_login_cc {
    padding: 0px 20px;
  }
}
</style>