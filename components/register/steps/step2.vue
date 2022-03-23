<template>
  <div class="form_register" v-if="this.$store.state.register.step === 2">
    <!-- Form Heading and Progress -->
    <h3 class="mb-5">
      <span>{{ $t("Verify phone number") }}</span>
      <v-avatar
        color="primary"
        class="subheading white--text"
        size="24"
        v-text="this.$store.state.register.step"
      ></v-avatar>
    </h3>
    <!-- Form -->
    <v-form ref="form" @submit="Register" v-model="valid" lazy-validation>
      <p class="mb-4 mt-4 text-center">
        We sent you the activation code over the phone
      </p>

      <div class="form_body">
        <div class="ma-auto position-relative" style="max-width: 300px">
          <v-otp-input
            v-model="otp"
            :loading="this.$store.state.auth.loading"
            @finish="onFinish"
          ></v-otp-input>
        </div>
        <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
          {{ text }}
        </v-snackbar>
      </div>

      <div class="msg" v-if="msg">
        <p>{{ $t(msg) }}</p>
      </div>
      <div class="buttons">
        <v-btn
          :disabled="valid"
          color="primary"
          @click="onFinish"
          :loading="this.$store.state.auth.loading"
        >
          {{ $t("Start") }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  head() {
    return { title: this.$i18n.t("Register") };
  },
  data: () => ({
    valid: false,
    snackbar: false,
    snackbarColor: "default",
    otp: "",
    text: "",
  }),
  computed: {},
  methods: {
    ...mapActions(["Register"]),
    onFinish(e) {
      e.preventDefault();
      this.register(this.otp);
    },
  },
};
</script>
