<template>
  <div class="container_cc">
    <div class="register">
      <h1>{{ $t("Register") }}</h1>

      <div class="loadingReg" v-if="this.$store.state.auth.loading">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else>
        <Step1 v-if="this.$store.state.auth.step === 1" />
        <Step2 v-else />
      </div>
    </div>
  </div>
</template>
<script>
import Step1 from "./steps/step1.vue";
import Step2 from "./steps/step2.vue";

export default {
  head() {
    return {
      title: this.$i18n.t("Register-page"),
    };
  },
  components: {
    Step1,
    Step2,
  },
};
</script>
<style>
.register {
  margin: 30px 0px;
}
.register h1 {
  margin-bottom: 30px;
  text-align: center;
}
.form_register {
  margin: 15px auto;
  width: 500px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}
.form_register h3 {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.form_register .select-country-container {
  z-index: 10;
}
.form_register .buttons {
  display: flex;
  justify-content: flex-end;
  padding: 15px 5px;
}
</style>
