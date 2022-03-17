<template >
  <nav class="header-top container_cc">
    <a>{{$t('call us')}}</a>
    <ul>
      <li :class="[this.$i18n.locale === 'ar' && 'active']">
        <a :href="switchLocalePath('ar')"> العربية </a>
      </li>
       <v-divider
      class="mx-4"
      vertical
    ></v-divider>
    
      <li :class="[this.$i18n.locale === 'en' && 'active']">
        <a :href="switchLocalePath('en')"> English </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
 
 <style scoped>
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e0b755;
    padding-top: 10px;
    padding-bottom: 10px;
}
ul {
  display: flex;
}
ul li:lang(ar) {
  margin-right: 20px;
}

ul li:lang(en) {
  margin-left: 20px;
}
li.active a{
  color: #fff;
}
</style>