<template>
  <div class="container_cc page">
      <div class="title_page">
      <h1>{{ $t("Companies") }}</h1>
    </div>

    <ListCompanies />
  </div>
</template>
<script>
import ListCompanies from './vue/listComanies.vue'
export default {
      head() {
    return {
      title: this.$i18n.t('Companies'),
    }
  },
  components: {
    ListCompanies,
  },
}
</script>