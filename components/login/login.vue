<template>
  <div class="page container_cc">
    <div class="login">
      <h1>{{ $t('Login') }}</h1>

      <div class="form_login_cc">
        <div class="form_login">
          <div class="form_title">
            <div class="mb-5">
              {{ $t('Enter Phone Number') }}
            </div>
          </div>

          <div class="form">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="data.phone"
                :counter="11"
                :rules="phoneRules"
                :label="$t('Phone')"
                required
                outlined
              ></v-text-field>

              <v-text-field
                v-model="data.password"
                :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="showPasswordLogin ? 'text' : 'password'"
                :label="$t('Password')"
                @click:append="showPasswordLogin = !showPasswordLogin"
                outlined
              ></v-text-field>

              <div class="msg" v-if="msg">
                <p>{{ $t(msg) }}</p>
              </div>

              <v-btn
                :disabled="!valid"
                color="success"
                class="button_login"
                @click="OnLogin"
                :loading="loading"
              >
                {{ $t('Login') }}
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: this.$i18n.t('Login-page'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'todos description',
          name: 'todos description',
          content: 'todos My custom description',
        },
      ],
    }
  },
  data: () => ({
    loading: false,
    valid: false,
    showPasswordLogin: false,
    data:{
      password: '',
      phone: '',
    },
    msg: '',
    msgStatus: true,
    phoneRules: [
      (v) => !!v || 'Phone is required',
      (v) => (v && v.length <= 11) || 'Phone must be less than 11 Number',
      (v) =>
        Number.isInteger(Number(v)) || 'The value must be an integer number',
    ],
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
    },

    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  }),
computed: {
    ...mapGetters(['allAuth']),
  },
  methods: {
    ...mapActions(['LoginAction']),
    OnLogin() {
    this.LoginAction(this.data)
    },

  },
}
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
