<template>
  <div class="form_register">
    <!-- Form Heading and Progress -->
    <h3 class="mb-5">
      <span>{{ $t("Register") }}</span>
      <v-avatar
        color="primary"
        class="subheading white--text"
        size="24"
        v-text="this.$store.state.register.step"
      ></v-avatar>
    </h3>
    <!-- Form -->
    <v-form ref="form"
    v-model="valid"
     lazy-validation>
      <v-text-field
        :label="$t('Name')"
        type="text"
        v-model="data.name"
        :counter="200"
        :rules="[rules.required]"
        outlined
        dense
      ></v-text-field>



      <vue-phone-number-input
        v-model="data.phone"
        :label="$t('Phone')"
        class="mb-7"
        default-country-code="SA"
      />


      <v-text-field
        :label="$t('E-mail')"
        type="email"
        v-model="data.email"
        :rules="emailRules"
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="data.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        :label="$t('Password')"
        :rules="[rules.required, rules.min]"
        hint="At least 6 characters"
        @click:append="showPassword = !showPassword"
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="data.password_confirmation"
        :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPasswordConfirmation ? 'text' : 'password'"
        :rules="[rules.required, rules.min, passwordConfirmationRule]"
        :label="$t('Re-enter the password')"
        hint="At least 8 characters"
        @click:append="showPasswordConfirmation = !showPasswordConfirmation"
        outlined
        dense
      ></v-text-field>

      <v-expansion-panels class="mb-6">
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-down">
            {{ $t("More Options") }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="data.referral"
              :label="$t('Referral Code')"
              outlined
              dense
            ></v-text-field>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="msg" v-if="msg">
        <p>{{ $t(msg) }}</p>
      </div>

      <div class="buttons">
        <v-btn
          :disabled="!valid"
          color="primary"
          :loading="this.$store.state.auth.loading"
          @click="RegisterFunction"
          type="submit"
        >
          {{ $t("Register") }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FMData from "../../mixins/SignupMixins.js";
export default {
  head() {
    return { title: this.$i18n.t("Register") };
  },
  mixins: [FMData],
  data: () => ({
    valid: false,
    showPassword: false,
    showPasswordConfirmation: false,
    data: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      referral: "",
    },
    msg: "",
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.password_confirmation || "Password must match";
    },
  },
  methods: {
    ...mapActions(["registerAction"]),
    RegisterFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;

      this.registerAction(this.data);
    },

  },
};
</script>
