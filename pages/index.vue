<template>
  <div class="head_p container_cc">
    <div class="head">
      <v-row no-gutters>
        <v-col md="6" xs="12" sm="12">
          <div class="head_left">
            <NuxtLink
              v-if="!this.$store.state.auth.checkAuth"
              :to="localePath('/login')"
              ><button>{{ $t("Login") }}</button></NuxtLink
            >
            <!-- <NuxtLink
              v-if="this.$store.state.auth.checkAuth"
              :to="localePath('/tickets')"
              ><button>
                {{ $t("Create a new support ticket") }}
              </button></NuxtLink
            > -->
          </div>
        </v-col>
  
        <v-col md="6" sm="12" class="d-none d-md-flex" xs="12">
          <div class="head_right">
            <img src="/images/background_bg.png" class="head_img" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
 head() {
   return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
  }
</script>

<style lang='scss' scoped>
.head {
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head h1 {
  font-size: 5em;
  margin-bottom: 40px;
}

.head_left button {
  width: 250px;
  margin-top: 60px;
  background: #2c4b4c;
  padding: 10px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.head_left p {
  padding-bottom: 15px;
}
.head_right img {
  width: 100%;
  padding: 0px 20px;
}

@media (max-width: 960px) {
  .head_left {
    width: 100%;
  }

  .head {
    flex-direction: column;
    text-align: center;
    border: 1px solid #bf804b;
    border-radius: 5px;
    padding: 20px;
    padding-top: 3em;
  }
  .head_right {
    display: none;
  }
}
</style>